const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const path = require("path");

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "data");
const DB_PATH = path.join(DATA_DIR, "db.json");

function loadEnvFile() {
  const envPath = path.join(ROOT, ".env");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const index = trimmed.indexOf("=");
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile();

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || "";

const PUBLIC_FILES = new Set(["/", "/index.html", "/styles.css", "/app.js"]);
const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".json": "application/json; charset=utf-8",
};

function now() {
  return new Date().toISOString();
}

function ensureDb() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DB_PATH)) {
    writeDb({
      saccos: [],
      admins: [
        {
          id: "admin_seed_1",
          saccoId: "seed",
          name: "Amina Kato",
          email: "admin@zsacco.coop",
          phone: "+256 700 000 000",
          passwordHash: hashPassword("zsacco"),
          linkedMemberId: "member_seed_1",
          createdAt: now(),
        },
      ],
      members: [
        {
          id: "member_seed_1",
          saccoId: "seed",
          memberNumber: "ZS-1001",
          name: "Amina Kato",
          phone: "+256 700 000 000",
          passwordHash: hashPassword("Member2026!"),
          createdAt: now(),
        },
      ],
      sessions: [],
      passwordResets: [],
      outbox: [],
    });
  }
}

function readDb() {
  ensureDb();
  return JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
}

function writeDb(db) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DB_PATH, `${JSON.stringify(db, null, 2)}\n`);
}

function hashPassword(password) {
  return crypto.createHash("sha256").update(String(password)).digest("hex");
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a));
  const right = Buffer.from(String(b));
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

function makeId(prefix) {
  return `${prefix}_${crypto.randomBytes(10).toString("hex")}`;
}

function makeToken() {
  return crypto.randomBytes(24).toString("hex");
}

function makeSaccoRegistration() {
  return `ZS-SACCO-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 899999)}`;
}

function isStrongPassword(password) {
  return String(password).length >= 12
    && !/\s/.test(password)
    && /[A-Z]/.test(password)
    && /[a-z]/.test(password)
    && /\d/.test(password)
    && /[^A-Za-z0-9]/.test(password);
}

function hasSupabase() {
  return Boolean(SUPABASE_URL && SUPABASE_KEY);
}

async function supabaseRpc(name, payload) {
  const response = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/rpc/${name}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
    body: JSON.stringify({ payload }),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || data.error || `Supabase RPC ${name} failed.`);
  }
  return data;
}

function cleanAmount(value) {
  const number = Number(String(value || "0").replace(/[^0-9.]/g, ""));
  return Number.isFinite(number) ? number : 0;
}

function authPayload(input) {
  return { ...input, token: input.token || input.authToken || "" };
}

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 8_000_000) {
        req.destroy();
        reject(new Error("Request body is too large."));
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON."));
      }
    });
  });
}

function publicUser(user, role) {
  return {
    id: user.id,
    role,
    name: user.name,
    email: user.email,
    phone: user.phone,
    memberNumber: user.memberNumber,
    saccoId: user.saccoId,
  };
}

function createSession(db, role, user, rememberDevice) {
  const session = {
    id: makeId("session"),
    token: makeToken(),
    role,
    userId: user.id,
    saccoId: user.saccoId,
    rememberDevice: Boolean(rememberDevice),
    createdAt: now(),
  };
  db.sessions.push(session);
  return session;
}

function queueEmail(db, to, subject, body) {
  const email = {
    id: makeId("email"),
    to,
    subject,
    body,
    status: "queued",
    createdAt: now(),
  };
  db.outbox.push(email);
  return email;
}

function localAppData(db, session) {
  const scopedMembers = db.members.filter((member) => member.saccoId === session.saccoId || session.saccoId === "seed");
  return {
    sacco: db.saccos.find((item) => item.id === session.saccoId) || { name: "Z-SACCO Demo Cooperative", registrationNumber: "ZS-SACCO-2026-100001" },
    summary: {
      totalMembers: scopedMembers.length,
      totalAccounts: 0,
      totalSavings: 0,
      activeLoans: 0,
      totalTransactions: 0,
    },
    members: scopedMembers.map((member) => ({
      id: member.id,
      memberNumber: member.memberNumber,
      name: member.name,
      phone: member.phone,
      email: member.email,
      branch: "Main Branch",
      profilePhoto: member.profilePhoto || "",
      documents: member.documents || [],
      savingsBalance: 0,
      loansCount: 0,
      status: "Active",
      createdAt: member.createdAt,
    })),
    accounts: [],
    transactions: [],
    loans: [],
    staff: db.admins.map((admin) => ({ ...publicUser(admin, "admin"), role: "Admin", branch: "Head Office", access: "Full access", status: "Active" })),
  };
}

function mergeLocalMemberDocuments(data) {
  const db = readDb();
  const documents = db.memberDocuments || [];
  const membersToMerge = data.members || [];
  membersToMerge.forEach((member) => {
    const memberDocs = documents.filter((doc) => doc.memberId === member.id || doc.memberNumber === member.memberNumber);
    if (!memberDocs.length) return;
    member.documents = memberDocs;
    member.profilePhoto = memberDocs.find((doc) => doc.isProfilePhoto)?.dataUrl || member.profilePhoto || "";
  });
  return data;
}

function storeMemberDocuments(member, docs = []) {
  if (!member || !Array.isArray(docs) || !docs.length) return;
  const db = readDb();
  db.memberDocuments ||= [];
  const normalizedDocs = docs.map((doc) => ({
    id: makeId("doc"),
    memberId: member.id,
    memberNumber: member.memberNumber,
    documentType: doc.documentType || "KYC Document",
    fileName: doc.fileName || "document",
    mimeType: doc.mimeType || "application/octet-stream",
    dataUrl: doc.dataUrl,
    isProfilePhoto: Boolean(doc.isProfilePhoto),
    uploadedAt: now(),
  })).filter((doc) => doc.dataUrl);
  if (!normalizedDocs.length) return;
  if (normalizedDocs.some((doc) => doc.isProfilePhoto)) {
    db.memberDocuments = db.memberDocuments.filter((doc) => doc.memberId !== member.id || !doc.isProfilePhoto);
  }
  db.memberDocuments.push(...normalizedDocs);
  writeDb(db);
}

async function registerSacco(req, res) {
  const input = await readBody(req);
  const required = ["saccoName", "saccoPhone", "saccoEmail", "ownerName", "ownerPhone", "ownerEmail", "password", "confirmPassword"];
  const missing = required.filter((key) => !String(input[key] || "").trim());
  if (missing.length) return sendJson(res, 400, { error: `Missing fields: ${missing.join(", ")}` });
  if (input.password !== input.confirmPassword) return sendJson(res, 400, { error: "Passwords do not match." });
  if (!isStrongPassword(input.password)) return sendJson(res, 400, { error: "Password must include uppercase, lowercase, number, and symbol." });

  if (hasSupabase()) {
    const result = await supabaseRpc("api_register_sacco", {
      saccoName: input.saccoName,
      saccoPhone: input.saccoPhone,
      saccoEmail: input.saccoEmail,
      location: input.location,
      memberCount: input.memberCount,
      ownerName: input.ownerName,
      ownerPhone: input.ownerPhone,
      ownerEmail: input.ownerEmail,
      passwordHash: hashPassword(input.password),
    });
    return sendJson(res, 201, result);
  }

  const db = readDb();
  const emailTaken = db.admins.some((admin) => admin.email.toLowerCase() === input.ownerEmail.toLowerCase());
  if (emailTaken) return sendJson(res, 409, { error: "Owner email is already registered." });

  const sacco = {
    id: makeId("sacco"),
    registrationNumber: makeSaccoRegistration(),
    name: input.saccoName.trim(),
    phone: input.saccoPhone.trim(),
    email: input.saccoEmail.trim(),
    location: String(input.location || "").trim(),
    memberCount: String(input.memberCount || "").trim(),
    status: "pending_activation",
    createdAt: now(),
  };
  const admin = {
    id: makeId("admin"),
    saccoId: sacco.id,
    name: input.ownerName.trim(),
    email: input.ownerEmail.trim(),
    phone: input.ownerPhone.trim(),
    passwordHash: hashPassword(input.password),
    createdAt: now(),
  };
  const member = {
    id: makeId("member"),
    saccoId: sacco.id,
    memberNumber: `ZS-${1000 + db.members.length + 1}`,
    name: input.ownerName.trim(),
    phone: input.ownerPhone.trim(),
    passwordHash: hashPassword(input.password),
    createdAt: now(),
  };
  admin.linkedMemberId = member.id;

  db.saccos.push(sacco);
  db.admins.push(admin);
  db.members.push(member);

  const email = queueEmail(
    db,
    admin.email,
    `Z-SACCO registration ${sacco.registrationNumber}`,
    [
      "Z-SACCO Account Details",
      "",
      `SACCO Name: ${sacco.name}`,
      `Registration Number: ${sacco.registrationNumber}`,
      `SACCO Phone: ${sacco.phone}`,
      `SACCO Email: ${sacco.email}`,
      `Location: ${sacco.location || "Not provided"}`,
      `Members: ${sacco.memberCount || "Not provided"}`,
      "",
      `Owner/Admin: ${admin.name}`,
      `Owner Email: ${admin.email}`,
      `Owner Phone: ${admin.phone}`,
      "",
      "This is the main SACCO admin account. The owner is also added as a member with limited member-portal access.",
    ].join("\n")
  );

  writeDb(db);
  sendJson(res, 201, {
    message: "SACCO account created. Email has been queued.",
    sacco,
    admin: publicUser(admin, "admin"),
    member: publicUser(member, "member"),
    email,
  });
}

async function login(req, res) {
  const input = await readBody(req);
  if (hasSupabase()) {
    const result = await supabaseRpc("api_login", {
      role: input.role,
      email: input.email,
      identity: input.identity,
      passwordHash: hashPassword(input.password || ""),
      rememberDevice: Boolean(input.rememberDevice),
    });
    return sendJson(res, 200, result);
  }

  const db = readDb();
  const role = String(input.role || "").toLowerCase();
  const passwordHash = hashPassword(input.password || "");

  if (role === "admin") {
    const admin = db.admins.find((item) => item.email.toLowerCase() === String(input.email || "").toLowerCase());
    if (!admin || !safeEqual(admin.passwordHash, passwordHash)) return sendJson(res, 401, { error: "Invalid admin login details." });
    const session = createSession(db, "admin", admin, input.rememberDevice);
    writeDb(db);
    return sendJson(res, 200, { message: "Logged in.", token: session.token, user: publicUser(admin, "admin") });
  }

  if (role === "member") {
    const identity = String(input.identity || "").trim().toLowerCase();
    const member = db.members.find((item) => {
      const sacco = db.saccos.find((entry) => entry.id === item.saccoId);
      return [item.name, item.memberNumber, sacco?.registrationNumber].filter(Boolean).some((value) => value.toLowerCase() === identity);
    });
    if (!member || !safeEqual(member.passwordHash, passwordHash)) return sendJson(res, 401, { error: "Invalid member login details." });
    const session = createSession(db, "member", member, input.rememberDevice);
    writeDb(db);
    return sendJson(res, 200, { message: "Logged in.", token: session.token, user: publicUser(member, "member") });
  }

  sendJson(res, 400, { error: "Role must be admin or member." });
}

async function forgotPassword(req, res) {
  const input = await readBody(req);
  if (hasSupabase()) {
    const result = await supabaseRpc("api_forgot_password", {
      role: input.role,
      identity: input.identity,
    });
    return sendJson(res, 200, result);
  }

  const db = readDb();
  const role = String(input.role || "").toLowerCase();
  const identity = String(input.identity || "").trim().toLowerCase();
  const resetCode = `RESET-${Math.floor(100000 + Math.random() * 899999)}`;
  let to = "";

  if (role === "admin") {
    const admin = db.admins.find((item) => item.email.toLowerCase() === identity);
    to = admin?.email || input.identity;
  } else {
    const member = db.members.find((item) => [item.name, item.memberNumber].some((value) => value.toLowerCase() === identity));
    to = member?.phone || input.identity;
  }

  db.passwordResets.push({ id: makeId("reset"), role, identity: input.identity, resetCode, createdAt: now() });
  const email = queueEmail(db, to, "Z-SACCO password reset", `Use this reset code to reset your ${role} password: ${resetCode}`);
  writeDb(db);
  sendJson(res, 200, { message: "Password reset instructions queued.", resetCode, email });
}

async function logout(req, res) {
  const input = await readBody(req);
  if (hasSupabase()) {
    const result = await supabaseRpc("api_logout", { token: input.token });
    return sendJson(res, 200, result);
  }

  const db = readDb();
  db.sessions = db.sessions.filter((session) => session.token !== input.token);
  writeDb(db);
  sendJson(res, 200, { message: "Logged out." });
}

async function appData(req, res) {
  const input = await readBody(req);
  if (hasSupabase()) {
    const result = await supabaseRpc("api_get_app_data", authPayload(input));
    return sendJson(res, 200, mergeLocalMemberDocuments(result));
  }

  const db = readDb();
  const session = db.sessions.find((item) => item.token === input.token);
  if (!session) return sendJson(res, 401, { error: "Invalid or expired session." });
  return sendJson(res, 200, localAppData(db, session));
}

async function saveMember(req, res) {
  const input = await readBody(req);
  if (!String(input.name || "").trim()) return sendJson(res, 400, { error: "Member name is required." });
  if (!String(input.email || "").trim()) return sendJson(res, 400, { error: "Member email is required." });
  if (!String(input.phone || "").trim()) return sendJson(res, 400, { error: "Member phone is required." });
  if (!isStrongPassword(input.password || "")) return sendJson(res, 400, { error: "Member password must be at least 12 characters with uppercase, lowercase, number, symbol, and no spaces." });

  if (hasSupabase()) {
    const result = await supabaseRpc("api_save_member", authPayload({
      ...input,
      passwordHash: hashPassword(input.password || "Member2026!"),
      temporaryPassword: input.temporaryPassword || input.password,
    }));
    const savedMember = (result.members || []).find((member) => String(member.email || "").toLowerCase() === String(input.email || "").toLowerCase())
      || (result.members || [])[0];
    storeMemberDocuments(savedMember, input.kycDocuments);
    return sendJson(res, 200, mergeLocalMemberDocuments(result));
  }

  const db = readDb();
  const session = db.sessions.find((item) => item.token === input.token && item.role === "admin");
  if (!session) return sendJson(res, 401, { error: "Only admins can manage members." });
  const member = {
    id: makeId("member"),
    saccoId: session.saccoId,
    memberNumber: `ZS-${1000 + db.members.length + 1}`,
    name: input.name.trim(),
    phone: input.phone || "",
    email: input.email || "",
    profilePhoto: (input.kycDocuments || []).find((doc) => doc.isProfilePhoto)?.dataUrl || "",
    documents: input.kycDocuments || [],
    passwordHash: hashPassword(input.password || "Member2026!"),
    createdAt: now(),
  };
  db.members.push(member);
  queueEmail(
    db,
    member.email,
    "Your Z-SACCO member login details",
    [
      "Welcome to Z-SACCO",
      "",
      "Your member portal has been created.",
      `Member Number: ${member.memberNumber}`,
      `Login Identity: ${member.memberNumber}`,
      `Temporary Password: ${input.temporaryPassword || input.password}`,
      "",
      "Please sign in and change your password after first login.",
    ].join("\n")
  );
  queueEmail(
    db,
    member.phone,
    "Z-SACCO member SMS login details",
    `Z-SACCO login: Member ${member.memberNumber}, Password ${input.temporaryPassword || input.password}. Change after first login.`
  );
  writeDb(db);
  return sendJson(res, 200, localAppData(db, session));
}

async function postTransaction(req, res) {
  const input = await readBody(req);
  if (hasSupabase()) {
    const result = await supabaseRpc("api_post_transaction", authPayload({
      ...input,
      amount: cleanAmount(input.amount),
    }));
    return sendJson(res, 200, result);
  }
  sendJson(res, 501, { error: "Transaction posting requires the Supabase data layer." });
}

async function submitLoan(req, res) {
  const input = await readBody(req);
  if (hasSupabase()) {
    const result = await supabaseRpc("api_submit_loan", authPayload({
      ...input,
      amount: cleanAmount(input.amount),
    }));
    return sendJson(res, 200, result);
  }
  sendJson(res, 501, { error: "Loan submissions require the Supabase data layer." });
}

async function decideLoan(req, res) {
  const input = await readBody(req);
  if (hasSupabase()) {
    const result = await supabaseRpc("api_decide_loan", authPayload(input));
    return sendJson(res, 200, result);
  }
  sendJson(res, 501, { error: "Loan decisions require the Supabase data layer." });
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let requestPath = decodeURIComponent(url.pathname);
  if (requestPath === "/") requestPath = "/index.html";
  if (!PUBLIC_FILES.has(requestPath) && !requestPath.startsWith("/assets/")) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  const filePath = path.join(ROOT, requestPath.replace(/^\//, ""));
  if (!filePath.startsWith(ROOT) || !fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  res.writeHead(200, { "Content-Type": MIME_TYPES[path.extname(filePath)] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (req.method === "POST" && url.pathname === "/api/saccos") return registerSacco(req, res);
    if (req.method === "POST" && url.pathname === "/api/auth/login") return login(req, res);
    if (req.method === "POST" && url.pathname === "/api/auth/forgot-password") return forgotPassword(req, res);
    if (req.method === "POST" && url.pathname === "/api/auth/logout") return logout(req, res);
    if (req.method === "POST" && url.pathname === "/api/app-data") return appData(req, res);
    if (req.method === "POST" && url.pathname === "/api/members") return saveMember(req, res);
    if (req.method === "POST" && url.pathname === "/api/transactions") return postTransaction(req, res);
    if (req.method === "POST" && url.pathname === "/api/loans") return submitLoan(req, res);
    if (req.method === "POST" && url.pathname === "/api/loans/decision") return decideLoan(req, res);
    if (req.method === "GET" && url.pathname === "/api/health") return sendJson(res, 200, { ok: true, time: now() });
    if (req.method === "GET") return serveStatic(req, res);
    sendJson(res, 405, { error: "Method not allowed." });
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Server error." });
  }
});

ensureDb();
server.listen(PORT, () => {
  console.log(`Z-SACCO server running at http://localhost:${PORT}`);
});
