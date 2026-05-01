const icons = {
  dashboard: '<svg viewBox="0 0 24 24"><path d="M3 13h8V3H3v10ZM13 21h8V11h-8v10ZM13 3v6h8V3h-8ZM3 21h8v-6H3v6Z"/></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  wallet: '<svg viewBox="0 0 24 24"><path d="M20 7H5a2 2 0 0 0 0 4h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h13M16 15h.01"/></svg>',
  loan: '<svg viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"/></svg>',
  receipt: '<svg viewBox="0 0 24 24"><path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 1 .67V2l-3 2-3-2-3 2-3-2-3 2-3-2ZM8 8h8M8 12h8M8 16h5"/></svg>',
  report: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18M8 17V9M13 17V5M18 17v-3"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><path d="M6 10V8a6 6 0 0 1 12 0v2M5 10h14v11H5V10Z"/></svg>',
  search: '<svg viewBox="0 0 24 24"><path d="m21 21-4.3-4.3M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"/></svg>',
  file: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>',
  user: '<svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>',
};

const adminNavItems = [
  ["dashboard", "Dashboard", icons.dashboard],
  ["members", "Members", icons.users],
  ["memberForm", "Add/Edit Member", icons.user],
  ["memberProfile", "Member Profile", icons.file],
  ["accounts", "Savings / Accounts", icons.wallet],
  ["deposit", "Deposit", icons.wallet],
  ["withdrawal", "Withdrawal", icons.receipt],
  ["loans", "Loans", icons.loan],
  ["loanApplication", "Loan Application", icons.file],
  ["loanApproval", "Approvals", icons.shield],
  ["loanDetails", "Loan Details", icons.file],
  ["transactions", "Transactions", icons.receipt],
  ["reports", "Reports", icons.report],
  ["users", "User Management", icons.shield],
  ["adminLogin", "Login Screen", icons.lock],
];

const memberNavItems = [
  ["memberDashboard", "Dashboard", icons.dashboard],
  ["memberSavings", "Savings", icons.wallet],
  ["memberLoans", "Loans", icons.loan],
  ["memberProfile", "Profile", icons.user],
  ["memberLogin", "Login", icons.lock],
];

const members = [
  ["ZS-1001", "Amina Kato", "Kampala Central", "UGX 18.2M", "2", "Active"],
  ["ZS-1002", "Brian Okello", "Wandegeya", "UGX 7.8M", "1", "Active"],
  ["ZS-1003", "Claire Namuli", "Mukono", "UGX 25.4M", "0", "Active"],
  ["ZS-1004", "David Ssebugwawo", "Entebbe", "UGX 4.6M", "1", "Review"],
  ["ZS-1005", "Esther Achieng", "Jinja", "UGX 13.9M", "3", "Active"],
];

const transactions = [
  ["TX-88291", "Amina Kato", "Deposit", "UGX 2,000,000", "Apr 30, 2026", "Completed"],
  ["TX-88288", "Brian Okello", "Loan repayment", "UGX 620,000", "Apr 29, 2026", "Completed"],
  ["TX-88276", "Claire Namuli", "Withdrawal", "UGX 1,150,000", "Apr 28, 2026", "Approved"],
  ["TX-88261", "Esther Achieng", "Deposit", "UGX 4,500,000", "Apr 27, 2026", "Completed"],
  ["TX-88244", "David Ssebugwawo", "Loan disbursement", "UGX 8,000,000", "Apr 26, 2026", "Posted"],
];

const loanRows = [
  ["LN-2041", "Amina Kato", "Business Expansion", "UGX 12,000,000", "62%", "Performing"],
  ["LN-2038", "Brian Okello", "School Fees", "UGX 3,500,000", "78%", "Performing"],
  ["LN-2031", "David Ssebugwawo", "Asset Finance", "UGX 8,000,000", "24%", "Watch"],
  ["LN-2026", "Esther Achieng", "Agriculture", "UGX 16,000,000", "41%", "Performing"],
];

const staffRows = [
  ["Grace Nambi", "Admin", "Head Office", "Full access", "Active"],
  ["Samuel Kizza", "Manager", "Kampala Central", "Approvals", "Active"],
  ["Ruth Akello", "Teller", "Wandegeya", "Transactions", "Active"],
  ["Peter Mwanga", "Teller", "Mukono", "Transactions", "Suspended"],
];

const adminAccounts = [
  { name: "Amina Kato", email: "admin@zsacco.coop", password: "zsacco", memberName: "Amina Kato", memberPassword: "Member2026!" },
  { name: "Grace Nambi", email: "grace@zsacco.coop", password: "Grace2026!", memberName: "Grace Nambi", memberPassword: "Member2026!" },
  { name: "Samuel Kizza", email: "samuel@zsacco.coop", password: "Samuel2026!", memberName: "Samuel Kizza", memberPassword: "Member2026!" },
];

const memberAccounts = [
  { name: "Amina Kato", memberId: "ZS-1001", saccoRegistration: "ZS-SACCO-2026-100001", password: "Member2026!" },
  { name: "Brian Okello", memberId: "ZS-1002", saccoRegistration: "ZS-SACCO-2026-100001", password: "Brian2026!" },
  { name: "Claire Namuli", memberId: "ZS-1003", saccoRegistration: "ZS-SACCO-2026-100001", password: "Claire2026!" },
];

const featureDetails = {
  members: ["Member Management", "Open a full member record with KYC information, savings accounts, transaction history, loans, and member status in one organized profile."],
  savings: ["Savings & Accounts", "Record deposits and withdrawals, view balances, print receipts, and keep member savings activity traceable across branches."],
  loans: ["Loan Management", "Capture applications, review approvals, track repayment progress, and monitor the loan portfolio from application to closure."],
  reports: ["Reports & Statements", "Generate financial summaries, export transaction histories, and prepare member statements for transparency and audits."],
};

let currentAdminScreen = "adminLogin";
let currentMemberScreen = "memberDashboard";
let selectedTransaction = transactions[0];
let selectedLoan = loanRows[0];
let toastTimer;
let lastSaccoRegistration = "ZS-SACCO-2026-100001";
let currentSessionRole = null;
let currentSessionUser = null;
let authToken = null;

const appFrame = document.querySelector("#appFrame");
const portalFrame = document.querySelector("#portalFrame");
const publicSite = document.querySelector("#publicSite");
const adminContent = document.querySelector("#adminContent");
const memberContent = document.querySelector("#memberContent");
const sectionLabel = document.querySelector("#sectionLabel");
const pageTitle = document.querySelector("#pageTitle");

function moneyStat(title, value, change, icon) {
  return `<article class="card stat-card">
    <div class="card-title"><span class="stat-icon">${icon}</span><span class="delta">${change}</span></div>
    <div><p class="muted">${title}</p><p class="metric">${value}</p></div>
  </article>`;
}

function renderTable(headers, rows, action = "View") {
  return `<div class="table-wrap"><table>
    <thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}<th>Action</th></tr></thead>
    <tbody>${rows.map((row) => `<tr>${row.map((cell) => {
      const status = String(cell).toLowerCase();
      if (["active", "completed", "approved", "posted", "performing"].includes(status)) return `<td><span class="pill success">${cell}</span></td>`;
      if (["review", "watch", "suspended"].includes(status)) return `<td><span class="pill warn">${cell}</span></td>`;
      if (String(cell).includes("%")) return `<td><div class="progress"><span style="width:${cell}"></span></div><small>${cell}</small></td>`;
      return `<td>${cell}</td>`;
    }).join("")}<td><button class="ghost-button table-action">${action}</button></td></tr>`).join("")}</tbody>
  </table></div>`;
}

function toolbar(searchPlaceholder, filters = []) {
  return `<div class="toolbar">
    <div class="field" style="min-width:260px"><input id="tableSearch" placeholder="${searchPlaceholder}" /></div>
    ${filters.map((f) => `<select><option>${f}</option></select>`).join("")}
    <button class="ghost-button">${icons.search} Filter</button>
  </div>`;
}

function dashboard() {
  return `<div class="screen">
    <section class="grid stats-grid">
      ${moneyStat("Total Members", "8,426", "+12.4% this quarter", icons.users)}
      ${moneyStat("Total Savings", "UGX 18.7B", "+8.1% month", icons.wallet)}
      ${moneyStat("Active Loans", "1,284", "+64 approved", icons.loan)}
      ${moneyStat("Total Transactions", "42,908", "+2,318 today", icons.receipt)}
    </section>
    <section class="grid two-col">
      <article class="card">
        <div class="card-title"><h2>Savings Growth</h2><span class="pill">FY 2026</span></div>
        <div class="chart">${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((m, i) => `<div class="bar"><span style="height:${82 + i * 14 + (i % 3) * 10}px"></span>${m}</div>`).join("")}</div>
      </article>
      <article class="card">
        <div class="card-title"><h2>Loan Distribution</h2><span class="pill dark">Portfolio</span></div>
        <div class="donut-wrap">
          <div class="donut"></div>
          <div class="legend">
            <p><span style="background:var(--blue)"></span>Business loans 48%</p>
            <p><span style="background:var(--gold)"></span>Agriculture 25%</p>
            <p><span style="background:var(--ink)"></span>Education 18%</p>
            <p><span style="background:#a9b7c9"></span>Emergency 9%</p>
          </div>
        </div>
      </article>
    </section>
    <section class="grid two-col">
      <article class="table-card">
        <div class="table-head"><h2 class="section-title">Recent Transactions</h2><button class="ghost-button" data-screen="transactions">Open history</button></div>
        ${renderTable(["Ref", "Member", "Type", "Amount", "Date", "Status"], transactions.slice(0, 4), "Details")}
      </article>
      <article class="card">
        <div class="card-title"><h2>Recent Activity</h2><span class="pill success">Live</span></div>
        <div class="activity">
          <div class="activity-item"><span class="status-dot"></span><div><strong>Deposit approved</strong><br><small>Amina Kato, UGX 2,000,000</small></div></div>
          <div class="activity-item"><span class="status-dot blue"></span><div><strong>New loan request</strong><br><small>Esther Achieng, Agriculture</small></div></div>
          <div class="activity-item"><span class="status-dot warn"></span><div><strong>KYC review flagged</strong><br><small>David Ssebugwawo, ID expiry</small></div></div>
          <div class="activity-item"><span class="status-dot"></span><div><strong>Statement exported</strong><br><small>Manager, Kampala Central</small></div></div>
        </div>
      </article>
    </section>
  </div>`;
}

function authScreen(type) {
  const isMember = type === "member";
  const rememberedAdmin = localStorage.getItem("zsacco_remembered_admin") || "admin@zsacco.coop";
  const rememberedMember = localStorage.getItem("zsacco_remembered_member") || lastSaccoRegistration;
  const signinFields = isMember
    ? `<div class="field"><label>SACCO registration number, member ID, or member name</label><input name="member_identity" value="${rememberedMember}" /></div>
       <div class="field"><label>Member password</label><input name="member_password" type="password" value="Member2026!" /></div>
       <div class="security-note full"><strong>Member access</strong><span>Members use the SACCO registration number, member ID, or registered name with a private password set for the member portal.</span></div>`
    : `<div class="field"><label>Email address</label><input name="admin_email" value="${rememberedAdmin}" /></div>
       <div class="field"><label>Password</label><input name="admin_password" type="password" value="zsacco" /></div>`;
  return `<section class="auth-screen">
    <div class="auth-art-card">
      <div class="auth-welcome">
        <div class="auth-brand-row">
          <span class="brand-hero-mark"><img src="assets/z-sacco-gold-mark.png" alt="" /></span>
          <span>
            <strong>Z-SACCO</strong>
            <small>Management System</small>
          </span>
        </div>
        <p class="eyebrow">Secure SACCO platform</p>
        <h1>Welcome!</h1>
        <span class="gold-rule"></span>
        <p>${isMember ? "Access your savings balance, loans, repayments, and personal details in a protected member portal." : "Operate member savings, loans, reports, and branch activity through a secure financial cooperative workspace."}</p>
        <button class="gold-button" type="button" data-auth-tab="signup">Create account</button>
      </div>
      <form class="auth-card auth-glass" data-auth-panel="signin">
        <div class="auth-tabs">
          <button class="active" type="button" data-auth-tab="signin">Sign in</button>
          <button type="button" data-auth-tab="signup">Sign up</button>
        </div>
        <h2>${isMember ? "Member Login" : "Staff Login"}</h2>
        <div class="grid">
          <div class="auth-role-switch full">
            <button class="${isMember ? "" : "active"}" type="button" data-login-role="admin">Admin</button>
            <button class="${isMember ? "active" : ""}" type="button" data-login-role="member">Member</button>
          </div>
          ${signinFields}
          <div class="split-actions"><label><input name="remember_device" type="checkbox" style="width:auto;min-height:auto" checked /> Remember device</label><button class="link-button" type="button" data-forgot-password="${isMember ? "member" : "admin"}">Forgot password?</button></div>
          <button class="gold-submit" type="button" data-login-submit="${isMember ? "member" : "admin"}">${icons.lock} Sign in securely</button>
          <button class="glass-link" type="button" data-switch="${isMember ? "admin" : "member"}">${isMember ? "Staff back office" : "Member portal"}</button>
        </div>
      </form>
      <form class="auth-card auth-glass hidden" data-auth-panel="signup">
        <div class="auth-tabs">
          <button type="button" data-auth-tab="signin">Sign in</button>
          <button class="active" type="button" data-auth-tab="signup">Sign up</button>
        </div>
        <h2>Create SACCO Account</h2>
        <div class="grid">
          <div class="field"><label>SACCO name</label><input name="sacco_name" value="Kampala Traders SACCO" required /></div>
          <div class="field"><label>SACCO phone number</label><input name="sacco_phone" value="+256 701 000 000" required /></div>
          <div class="field"><label>SACCO email address</label><input name="sacco_email" type="email" value="info@kampalatraders.coop" required /></div>
          <div class="field"><label>Main branch / location</label><input name="location" value="Kampala, Uganda" /></div>
          <div class="field"><label>Number of members</label><input name="members_count" value="250" /></div>
          <div class="field"><label>Owner / admin full name</label><input name="owner_name" value="Amina Kato" required /></div>
          <div class="field"><label>Owner phone number</label><input name="owner_phone" value="+256 700 000 000" required /></div>
          <div class="field"><label>Owner email address</label><input name="owner_email" type="email" value="owner@zsacco.coop" required /></div>
          <div class="field"><label>Create password</label><input name="password" type="password" value="Zsacco2026!" required /></div>
          <div class="field"><label>Confirm password</label><input name="confirm_password" type="password" value="Zsacco2026!" required /></div>
          <div class="security-note full"><strong>Main account security</strong><span>This creates the SACCO owner/admin account. Members will later set their own limited-access member portal passwords.</span></div>
          <div class="security-note full"><strong>Password rules</strong><span>Use at least 8 characters with uppercase, lowercase, number, and symbol.</span></div>
          <button class="gold-submit full" type="button" data-create-access>${icons.lock} Create account</button>
          <button class="glass-link" type="button" data-auth-tab="signin">Already have an account?</button>
        </div>
      </form>
    </div>
  </section>`;
}

function membersScreen() {
  return `<div class="screen">
    <div class="table-card">
      <div class="table-head"><h2 class="section-title">Member Management</h2>${toolbar("Search members by name, ID, or branch", ["All branches", "All statuses"])}</div>
      ${renderTable(["Member ID", "Name", "Branch", "Savings", "Loans", "Status"], members)}
    </div>
  </div>`;
}

function memberForm() {
  return `<div class="screen"><article class="card">
    <div class="card-title"><h2>Add / Edit Member</h2><span class="pill">KYC required</span></div>
    <form class="form-grid">
      <div class="field"><label>First name</label><input value="Amina" /></div>
      <div class="field"><label>Last name</label><input value="Kato" /></div>
      <div class="field"><label>National ID</label><input value="CM94077109" /></div>
      <div class="field"><label>Phone number</label><input value="+256 772 402 110" /></div>
      <div class="field"><label>Branch</label><select><option>Kampala Central</option><option>Wandegeya</option><option>Mukono</option></select></div>
      <div class="field"><label>Membership type</label><select><option>Individual</option><option>Group</option><option>Corporate</option></select></div>
      <div class="field full"><label>Address</label><textarea>Kira Road, Kampala</textarea></div>
      <div class="form-actions full"><button class="primary-button" type="button" data-save-member>Save member</button><button class="ghost-button" type="button" data-upload-kyc>Upload KYC</button></div>
    </form>
  </article></div>`;
}

function memberProfileAdmin() {
  return `<div class="profile-layout">
    <aside class="card profile-panel">
      <div class="profile-hero"><span class="avatar">AK</span><div><h2>Amina Kato</h2><p class="muted">ZS-1001 - Kampala Central</p></div></div>
      <div class="grid" style="margin-top:22px">
        <div><p class="muted">Savings balance</p><h2>UGX 18,240,000</h2></div>
        <div><p class="muted">Outstanding loans</p><h2>UGX 7,420,000</h2></div>
        <div><p class="muted">Risk grade</p><span class="pill success">A Stable</span></div>
      </div>
    </aside>
    <section class="screen">
      <div class="grid three-col">
        ${moneyStat("Accounts", "3", "Primary active", icons.wallet)}
        ${moneyStat("Transactions", "186", "Last 12 months", icons.receipt)}
        ${moneyStat("Loans", "2", "1 cleared", icons.loan)}
      </div>
      <article class="table-card"><div class="table-head"><h2 class="section-title">Member Transactions</h2></div>${renderTable(["Ref", "Member", "Type", "Amount", "Date", "Status"], transactions.slice(0, 4), "Open")}</article>
    </section>
  </div>`;
}

function accountsScreen(mode) {
  if (mode === "deposit" || mode === "withdrawal") {
    const deposit = mode === "deposit";
    return `<div class="grid two-col">
      <article class="card">
        <div class="card-title"><h2>${deposit ? "Deposit Interface" : "Withdrawal Interface"}</h2><span class="pill ${deposit ? "success" : "warn"}">${deposit ? "Cash in" : "Cash out"}</span></div>
        <form class="form-grid">
          <div class="field full"><label>Member account</label><select><option>Amina Kato - ZS-SAV-1001</option><option>Brian Okello - ZS-SAV-1002</option></select></div>
          <div class="field"><label>Amount</label><input value="2,000,000" /></div>
          <div class="field"><label>Payment method</label><select><option>Cash</option><option>Mobile Money</option><option>Bank transfer</option></select></div>
          <div class="field full"><label>Narration</label><textarea>${deposit ? "Monthly member savings deposit" : "Member withdrawal request approved at teller desk"}</textarea></div>
          <div class="form-actions full"><button class="primary-button" type="button" data-post-transaction="${deposit ? "Deposit" : "Withdrawal"}">${deposit ? "Post deposit" : "Process withdrawal"}</button><button class="ghost-button" type="button" data-print-receipt>Print receipt</button></div>
        </form>
      </article>
      <article class="card">
        <div class="card-title"><h2>Account Balance</h2><span class="pill success">Verified</span></div>
        <p class="muted">Available balance</p><p class="amount-xl" style="color:var(--ink)">UGX 18,240,000</p>
        <div class="summary-band"><div><p class="muted">Shares</p><strong>UGX 3.4M</strong></div><div><p class="muted">Savings</p><strong>UGX 14.8M</strong></div><div><p class="muted">Lien</p><strong>UGX 0</strong></div></div>
      </article>
    </div>`;
  }
  return `<div class="screen"><article class="table-card"><div class="table-head"><h2 class="section-title">Savings Accounts</h2>${toolbar("Search accounts", ["Account type", "Branch"])}</div>${renderTable(["Account", "Member", "Type", "Balance", "Last Activity", "Status"], [["ZS-SAV-1001","Amina Kato","Savings","UGX 18,240,000","Apr 30, 2026","Active"],["ZS-SHR-1001","Amina Kato","Shares","UGX 3,400,000","Apr 18, 2026","Active"],["ZS-SAV-1002","Brian Okello","Savings","UGX 7,800,000","Apr 29, 2026","Active"],["ZS-SAV-1004","David Ssebugwawo","Savings","UGX 4,600,000","Apr 26, 2026","Review"]])}</article></div>`;
}

function loansScreen(kind) {
  if (kind === "application") {
    return `<div class="screen"><article class="card"><div class="card-title"><h2>Loan Application Form</h2><span class="pill">Credit scoring</span></div>
      <form class="form-grid">
        <div class="field"><label>Member</label><select><option>Amina Kato - ZS-1001</option></select></div>
        <div class="field"><label>Loan product</label><select><option>Business Expansion</option><option>Agriculture</option><option>Education</option></select></div>
        <div class="field"><label>Requested amount</label><input value="12,000,000" /></div>
        <div class="field"><label>Term</label><select><option>18 months</option><option>24 months</option></select></div>
        <div class="field full"><label>Purpose</label><textarea>Purchase inventory and expand retail outlet.</textarea></div>
        <div class="form-actions full"><button class="primary-button" type="button" data-submit-loan>Submit application</button><button class="ghost-button" type="button" data-attach-documents>Attach documents</button></div>
      </form></article></div>`;
  }
  if (kind === "approval") {
    return `<div class="screen"><div class="grid three-col">${moneyStat("Pending Review", loanRows.filter((loan) => loan[5] === "Watch").length, "Needs decision", icons.file)}${moneyStat("Approved Today", "11", "UGX 91M", icons.shield)}${moneyStat("Rejected", "3", "Policy checks", icons.loan)}</div><article class="table-card"><div class="table-head"><h2 class="section-title">Loan Approval Queue</h2>${toolbar("Search applications", ["Risk grade", "Loan product"])}</div>${renderTable(["Loan ID","Member","Purpose","Amount","Progress","Status"], loanRows, "Decide")}</article></div>`;
  }
  if (kind === "details") {
    return `<div class="grid two-col"><article class="card"><div class="card-title"><h2>Loan Details</h2><span class="pill ${selectedLoan[5] === "Rejected" ? "warn" : "success"}">${selectedLoan[5]}</span></div><div class="summary-band"><div><p class="muted">Principal</p><strong>${selectedLoan[3]}</strong></div><div><p class="muted">Outstanding</p><strong>UGX 7.42M</strong></div><div><p class="muted">Rate</p><strong>14%</strong></div></div><h3>Repayment Progress</h3><div class="progress"><span style="width:${selectedLoan[4]}"></span></div><p class="muted">${selectedLoan[4]} repaid - next installment due May 15, 2026</p><div class="form-actions"><button class="primary-button" type="button" data-loan-decision="approve">Approve</button><button class="danger-button" type="button" data-loan-decision="reject">Reject</button></div></article><article class="card"><div class="card-title"><h2>Repayment Schedule</h2></div><div class="loan-schedule">${["May 15, 2026","Jun 15, 2026","Jul 15, 2026","Aug 15, 2026"].map((d, i) => `<div class="schedule-item"><span class="status-dot ${i ? "blue" : "warn"}"></span><div><strong>UGX 685,000</strong><br><small>${d}</small></div><span class="pill ${i ? "dark" : "warn"}">${i ? "Upcoming" : "Due"}</span></div>`).join("")}</div></article></div>`;
  }
  return `<div class="screen"><article class="table-card"><div class="table-head"><h2 class="section-title">Loan Management</h2>${toolbar("Search loans", ["Loan status", "Product"])}</div>${renderTable(["Loan ID","Member","Purpose","Amount","Progress","Status"], loanRows, "Open")}</article></div>`;
}

function transactionsScreen() {
  return `<div class="screen"><article class="table-card"><div class="table-head"><h2 class="section-title">Full Transaction History</h2>${toolbar("Search transactions", ["Date range", "Transaction type", "Member"])}</div>${renderTable(["Ref", "Member", "Type", "Amount", "Date", "Status"], transactions, "Details")}</article><article class="card"><div class="card-title"><h2>Transaction Details</h2><span class="pill success">Audit logged</span></div><div class="form-grid"><div><p class="muted">Reference</p><strong>${selectedTransaction[0]}</strong></div><div><p class="muted">Member</p><strong>${selectedTransaction[1]}</strong></div><div><p class="muted">Type</p><strong>${selectedTransaction[2]}</strong></div><div><p class="muted">Amount</p><strong>${selectedTransaction[3]}</strong></div><div><p class="muted">Posted by</p><strong>Ruth Akello</strong></div><div><p class="muted">Channel</p><strong>Teller counter</strong></div></div></article></div>`;
}

function reportsScreen() {
  return `<div class="screen"><section class="grid stats-grid">${moneyStat("Net Savings", "UGX 18.7B", "+8.1%", icons.wallet)}${moneyStat("Loan Portfolio", "UGX 9.4B", "+5.8%", icons.loan)}${moneyStat("Arrears Rate", "2.7%", "Low risk", icons.report)}${moneyStat("Exported Reports", "148", "This month", icons.file)}</section><section class="grid two-col"><article class="card"><div class="card-title"><h2>Financial Summary</h2><button class="primary-button" data-download="financial-summary">${icons.file} Download PDF</button></div><div class="chart">${["Savings","Loans","Fees","Shares","Interest"].map((m, i) => `<div class="bar"><span style="height:${90 + i * 24}px"></span>${m}</div>`).join("")}</div></article><article class="table-card"><div class="table-head"><h2 class="section-title">Member Statements</h2><button class="ghost-button" data-download="statements">${icons.file} Export CSV</button></div>${renderTable(["Statement","Member","Period","Balance","Generated","Status"], [["ST-7091","Amina Kato","Apr 2026","UGX 18.2M","May 1, 2026","Completed"],["ST-7088","Brian Okello","Apr 2026","UGX 7.8M","May 1, 2026","Completed"],["ST-7081","Claire Namuli","Q1 2026","UGX 25.4M","Apr 2, 2026","Completed"]], "Download")}</article></section></div>`;
}

function usersScreen() {
  return `<div class="screen"><article class="table-card"><div class="table-head"><h2 class="section-title">Staff Accounts & Roles</h2><button class="primary-button">${icons.user} Add staff</button></div>${renderTable(["Staff","Role","Branch","Access","Status"], staffRows, "Edit")}</article><article class="card"><div class="card-title"><h2>Role Permissions</h2></div><div class="grid three-col"><div class="activity-item"><span class="stat-icon">${icons.shield}</span><div><strong>Admin</strong><br><small>System settings, users, approvals, reports</small></div></div><div class="activity-item"><span class="stat-icon">${icons.report}</span><div><strong>Manager</strong><br><small>Member oversight, loan decisions, reports</small></div></div><div class="activity-item"><span class="stat-icon">${icons.receipt}</span><div><strong>Teller</strong><br><small>Deposits, withdrawals, receipts</small></div></div></div></article></div>`;
}

const adminScreens = {
  dashboard,
  members: membersScreen,
  memberForm,
  memberProfile: memberProfileAdmin,
  accounts: () => accountsScreen("accounts"),
  deposit: () => accountsScreen("deposit"),
  withdrawal: () => accountsScreen("withdrawal"),
  loans: () => loansScreen("list"),
  loanApplication: () => loansScreen("application"),
  loanApproval: () => loansScreen("approval"),
  loanDetails: () => loansScreen("details"),
  transactions: transactionsScreen,
  reports: reportsScreen,
  users: usersScreen,
  adminLogin: () => authScreen("admin"),
};

function memberDashboard() {
  return `<div class="screen">
    <section class="portal-hero">
      <article class="portal-card balance-card">
        <p class="eyebrow">Available savings</p><div class="amount-xl">UGX 18,240,000</div>
        <div class="quick-grid"><div class="quick-card"><p class="muted">Shares</p><strong>UGX 3.4M</strong></div><div class="quick-card"><p class="muted">Loan balance</p><strong>UGX 7.42M</strong></div><div class="quick-card"><p class="muted">Next payment</p><strong>May 15</strong></div></div>
      </article>
      <article class="portal-card"><div class="card-title"><h2>Quick Summary</h2><span class="pill success">Good standing</span></div><div class="activity"><div class="activity-item"><span class="status-dot"></span><div><strong>Deposit received</strong><br><small>UGX 2,000,000 - Apr 30</small></div></div><div class="activity-item"><span class="status-dot blue"></span><div><strong>Loan repayment posted</strong><br><small>UGX 685,000 - Apr 15</small></div></div><div class="activity-item"><span class="status-dot warn"></span><div><strong>Next repayment</strong><br><small>UGX 685,000 - May 15</small></div></div></div></article>
    </section>
    <section class="grid two-col"><article class="table-card"><div class="table-head"><h2 class="section-title">Recent Savings Transactions</h2></div>${renderTable(["Ref", "Member", "Type", "Amount", "Date", "Status"], transactions.slice(0, 3), "View")}</article><article class="portal-card"><div class="card-title"><h2>Loan Balance</h2></div><div class="progress"><span style="width:62%"></span></div><p class="muted">UGX 7,420,000 remaining on Business Expansion loan.</p></article></section>
  </div>`;
}

function memberSavings() {
  return `<div class="screen"><article class="portal-card balance-card"><p class="eyebrow">Savings balance</p><div class="amount-xl">UGX 18,240,000</div><div class="split-actions"><button class="ghost-button" data-download="member-statement">Download statement</button><button class="ghost-button" data-support>Request support</button></div></article><article class="table-card"><div class="table-head"><h2 class="section-title">Transaction History</h2>${toolbar("Search savings history", ["Date", "Type"])}</div>${renderTable(["Ref", "Member", "Type", "Amount", "Date", "Status"], transactions, "Details")}</article></div>`;
}

function memberLoans() {
  return `<div class="screen"><section class="grid three-col">${moneyStat("Loan Status", "Performing", "No arrears", icons.shield)}${moneyStat("Outstanding", "UGX 7.42M", "62% repaid", icons.loan)}${moneyStat("Next Due", "May 15", "UGX 685,000", icons.receipt)}</section><article class="portal-card"><div class="card-title"><h2>Repayment Progress</h2><span class="pill success">On time</span></div><div class="progress"><span style="width:62%"></span></div><p class="muted">11 of 18 installments completed.</p></article><article class="portal-card"><div class="card-title"><h2>Schedule</h2></div><div class="loan-schedule">${["May 15, 2026","Jun 15, 2026","Jul 15, 2026"].map((d, i) => `<div class="schedule-item"><span class="status-dot ${i ? "blue" : "warn"}"></span><div><strong>UGX 685,000</strong><br><small>${d}</small></div><span class="pill ${i ? "dark" : "warn"}">${i ? "Upcoming" : "Due"}</span></div>`).join("")}</div></article></div>`;
}

function memberProfilePortal() {
  return `<div class="grid two-col"><article class="portal-card"><div class="profile-hero"><span class="avatar">AK</span><div><h2>Amina Kato</h2><p class="muted">Member ZS-1001 - Joined 2018</p></div></div><div class="form-grid" style="margin-top:18px"><div><p class="muted">Phone</p><strong>+256 772 402 110</strong></div><div><p class="muted">Email</p><strong>amina.kato@example.com</strong></div><div><p class="muted">Branch</p><strong>Kampala Central</strong></div><div><p class="muted">Address</p><strong>Kira Road, Kampala</strong></div></div></article><article class="portal-card"><div class="card-title"><h2>Account Security</h2><span class="pill success">Verified</span></div><div class="activity"><div class="activity-item"><span class="status-dot"></span><div><strong>National ID verified</strong><br><small>Updated Apr 20, 2026</small></div></div><div class="activity-item"><span class="status-dot"></span><div><strong>Mobile money linked</strong><br><small>MTN ending 2110</small></div></div></div></article></div>`;
}

const memberScreens = {
  memberDashboard,
  memberSavings,
  memberLoans,
  memberProfile: memberProfilePortal,
  memberLogin: () => authScreen("member"),
};

function nav(container, items, active, target) {
  container.innerHTML = items.map(([id, label, icon]) => `<button class="nav-item ${id === active ? "active" : ""}" data-${target}="${id}">${icon}<span>${label}</span></button>`).join("");
}

function setAdminScreen(id) {
  currentAdminScreen = id;
  const item = adminNavItems.find(([key]) => key === id) || adminNavItems[0];
  nav(document.querySelector("#adminNav"), adminNavItems, item[0], "screen");
  pageTitle.textContent = item[1];
  sectionLabel.textContent = item[0] === "adminLogin" ? "Authentication" : "Back Office";
  appFrame.classList.toggle("login-mode", item[0] === "adminLogin");
  adminContent.innerHTML = adminScreens[item[0]]();
  appFrame.classList.remove("menu-open");
}

function setMemberScreen(id) {
  currentMemberScreen = id;
  const item = memberNavItems.find(([key]) => key === id) || memberNavItems[0];
  nav(document.querySelector("#memberNav"), memberNavItems, item[0], "member-screen");
  portalFrame.classList.toggle("login-mode", item[0] === "memberLogin");
  memberContent.innerHTML = memberScreens[item[0]]();
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function todayLabel() {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date());
}

function nextRef(prefix) {
  return `${prefix}-${Math.floor(10000 + Math.random() * 89999)}`;
}

function nextSaccoRegistration() {
  const year = new Date().getFullYear();
  return `ZS-SACCO-${year}-${Math.floor(100000 + Math.random() * 899999)}`;
}

function downloadFile(filename, content, type = "text/plain") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

async function apiRequest(path, payload) {
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Request failed.");
  return data;
}

function tableRowValues(button) {
  return [...button.closest("tr").children].slice(0, -1).map((cell) => cell.innerText.trim());
}

function filterTable(input) {
  const tableCard = input.closest(".table-card");
  const table = tableCard?.querySelector("table");
  if (!table) return;
  const query = input.value.trim().toLowerCase();
  let visible = 0;
  table.querySelectorAll("tbody tr").forEach((row) => {
    const match = row.innerText.toLowerCase().includes(query);
    row.hidden = !match;
    if (match) visible += 1;
  });
  tableCard.querySelector(".empty-state")?.remove();
  if (!visible) table.insertAdjacentHTML("afterend", '<div class="empty-state">No matching records found.</div>');
}

function postTransaction(type, button) {
  const form = button.closest("form");
  const account = form.querySelector("select").value;
  const amount = form.querySelector("input").value.trim() || "0";
  const member = account.split(" - ")[0];
  const row = [nextRef("TX"), member, type, `UGX ${amount}`, todayLabel(), type === "Deposit" ? "Completed" : "Approved"];
  transactions.unshift(row);
  selectedTransaction = row;
  showToast(`${type} posted for ${member}. Transaction ${row[0]} is now in history.`);
  setAdminScreen("transactions");
}

function saveMember(button) {
  const form = button.closest("form");
  const fields = form.querySelectorAll("input, select, textarea");
  const first = fields[0].value.trim() || "New";
  const last = fields[1].value.trim() || "Member";
  const branch = fields[4].value;
  const existing = members.find((member) => member[1] === `${first} ${last}`);
  if (existing) {
    existing[2] = branch;
    existing[5] = "Active";
    showToast(`${first} ${last} updated successfully.`);
  } else {
    members.unshift([`ZS-${1000 + members.length + 1}`, `${first} ${last}`, branch, "UGX 0", "0", "Active"]);
    showToast(`${first} ${last} added as a Z-SACCO member.`);
  }
  setAdminScreen("members");
}

function submitLoan(button) {
  const form = button.closest("form");
  const values = form.querySelectorAll("select, input, textarea");
  const member = values[0].value.split(" - ")[0];
  const product = values[1].value;
  const amount = `UGX ${values[2].value.trim() || "0"}`;
  const loan = [nextRef("LN"), member, product, amount, "0%", "Watch"];
  loanRows.unshift(loan);
  selectedLoan = loan;
  showToast(`Loan application ${loan[0]} submitted for review.`);
  setAdminScreen("loanApproval");
}

function decideLoan(decision) {
  selectedLoan[5] = decision === "approve" ? "Performing" : "Rejected";
  selectedLoan[4] = decision === "approve" ? "5%" : selectedLoan[4];
  showToast(`Loan ${selectedLoan[0]} ${decision === "approve" ? "approved" : "rejected"}.`);
  setAdminScreen("loanApproval");
}

function setAuthMode(mode, button) {
  const authCard = button.closest(".auth-art-card");
  if (!authCard) return;
  authCard.querySelectorAll("[data-auth-panel]").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.authPanel !== mode);
  });
}

function showAdminLogin(mode = "signin") {
  publicSite.classList.add("hidden");
  portalFrame.classList.add("hidden");
  appFrame.classList.remove("hidden");
  setAdminScreen("adminLogin");
  const panel = adminContent.querySelector(`[data-auth-panel="${mode}"]`);
  if (panel) {
    adminContent.querySelectorAll("[data-auth-panel]").forEach((item) => {
      item.classList.toggle("hidden", item.dataset.authPanel !== mode);
    });
  }
}

function showMemberLogin(mode = "signin") {
  publicSite.classList.add("hidden");
  appFrame.classList.add("hidden");
  portalFrame.classList.remove("hidden");
  setMemberScreen("memberLogin");
  const panel = memberContent.querySelector(`[data-auth-panel="${mode}"]`);
  if (panel) {
    memberContent.querySelectorAll("[data-auth-panel]").forEach((item) => {
      item.classList.toggle("hidden", item.dataset.authPanel !== mode);
    });
  }
}

function openSystemAuth(mode = "signin") {
  showAdminLogin(mode);
}

function chooseLoginRole(role) {
  if (currentSessionRole && currentSessionRole !== role) {
    showToast(`Please logout from the ${currentSessionRole} session before logging in as ${role}.`);
    return;
  }
  if (role === "member") showMemberLogin("signin");
  else showAdminLogin("signin");
}

async function loginAsRole(role, button) {
  if (currentSessionRole && currentSessionRole !== role) {
    showToast(`Please logout from the ${currentSessionRole} session before switching accounts.`);
    return;
  }
  const form = button.closest("form");
  const remember = form.querySelector('[name="remember_device"]')?.checked;
  if (role === "admin") {
    const email = form.querySelector('[name="admin_email"]')?.value.trim().toLowerCase();
    const password = form.querySelector('[name="admin_password"]')?.value;
    let account = adminAccounts.find((admin) => admin.email.toLowerCase() === email && admin.password === password);
    if (!account) {
      try {
        const result = await apiRequest("/api/auth/login", { role: "admin", email, password, rememberDevice: remember });
        account = result.user;
        authToken = result.token;
      } catch (error) {
        showToast(error.message || "Invalid admin login details.");
        return;
      }
    }
    currentSessionRole = "admin";
    currentSessionUser = account;
    if (remember) localStorage.setItem("zsacco_remembered_admin", account.email);
    setAdminScreen("dashboard");
    appFrame.classList.remove("hidden");
    portalFrame.classList.add("hidden");
    showToast(`Welcome back, ${account.name}. Device ${remember ? "remembered" : "not remembered"}.`);
    return;
  }
  const identity = form.querySelector('[name="member_identity"]')?.value.trim().toLowerCase();
  const password = form.querySelector('[name="member_password"]')?.value;
  let member = memberAccounts.find((item) => {
    const matchesIdentity = [item.saccoRegistration, item.name, item.memberId].some((value) => value.toLowerCase() === identity);
    const adminLinked = adminAccounts.some((admin) => admin.memberName.toLowerCase() === item.name.toLowerCase() && admin.password === password);
    return matchesIdentity && (item.password === password || adminLinked);
  });
  if (!member) {
    try {
      const result = await apiRequest("/api/auth/login", { role: "member", identity, password, rememberDevice: remember });
      member = result.user;
      authToken = result.token;
    } catch (error) {
      showToast(error.message || "Invalid member login details.");
      return;
    }
  }
  currentSessionRole = "member";
  currentSessionUser = member;
  if (remember) localStorage.setItem("zsacco_remembered_member", member.memberId);
  setMemberScreen("memberDashboard");
  portalFrame.classList.remove("hidden");
  appFrame.classList.add("hidden");
  showToast(`Welcome to the member portal, ${member.name}.`);
}

async function logout() {
  const role = currentSessionRole;
  if (authToken) {
    try {
      await apiRequest("/api/auth/logout", { token: authToken });
    } catch {
      // Local logout still clears the prototype session if the backend is unavailable.
    }
  }
  currentSessionRole = null;
  currentSessionUser = null;
  authToken = null;
  publicSite.classList.add("hidden");
  portalFrame.classList.add("hidden");
  appFrame.classList.remove("hidden");
  setAdminScreen("adminLogin");
  showToast(role ? `Logged out from ${role} session.` : "You are on the login page.");
}

async function forgotPassword(role, button) {
  const form = button.closest("form");
  const target = role === "member"
    ? form.querySelector('[name="member_identity"]')?.value || "member account"
    : form.querySelector('[name="admin_email"]')?.value || "admin account";
  try {
    const result = await apiRequest("/api/auth/forgot-password", { role, identity: target });
    downloadFile(`z-sacco-${role}-password-reset.txt`, result.email?.body || `Reset code: ${result.resetCode}`);
    showToast(`Password reset instructions prepared for ${target}.`);
    return;
  } catch {
    // Fall back to local reset copy when running the frontend without the backend server.
  }
  const resetCode = nextRef("RESET");
  const body = `Z-SACCO Password Reset\nAccount: ${target}\nRole: ${role}\nReset Code: ${resetCode}\n\nUse this code to reset your password. This is a prototype email copy.`;
  downloadFile(`z-sacco-${role}-password-reset.txt`, body);
  showToast(`Password reset instructions prepared for ${target}.`);
}

function guardedSwitch(destination) {
  if (destination === "member" && currentSessionRole === "admin") {
    showToast("Logout from the admin account before logging in as a member.");
    return;
  }
  if (destination === "admin" && currentSessionRole === "member") {
    showToast("Logout from the member account before logging in as admin.");
    return;
  }
  publicSite.classList.add("hidden");
  if (destination === "member") {
    if (currentSessionRole === "member") {
      appFrame.classList.add("hidden");
      portalFrame.classList.remove("hidden");
      setMemberScreen("memberDashboard");
    } else {
      showMemberLogin("signin");
    }
  }
  if (destination === "admin") {
    if (currentSessionRole === "admin") {
      portalFrame.classList.add("hidden");
      appFrame.classList.remove("hidden");
      setAdminScreen("dashboard");
    } else {
      showAdminLogin("signin");
    }
  }
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setFeatureDetail(card) {
  const key = card.dataset.feature;
  const detail = featureDetails[key];
  const detailBox = document.querySelector("#featureDetail");
  if (!detail || !detailBox) return;
  detailBox.querySelector("strong").textContent = detail[0];
  detailBox.querySelector("p").textContent = detail[1];
}

function submitContactForm(button) {
  const form = button.closest(".contact-form");
  form.classList.add("was-validated");
  if (!form.checkValidity()) {
    showToast("Please complete the contact form before sending.");
    return;
  }
  const saccoName = new FormData(form).get("sacco");
  showToast(`Inquiry received for ${saccoName}. Z-SACCO will contact you soon.`);
  form.reset();
  form.classList.remove("was-validated");
}

function validatePassword(password) {
  return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[^A-Za-z0-9]/.test(password);
}

async function createSaccoAccount(button) {
  const form = button.closest("form");
  form.classList.add("was-validated");
  if (!form.checkValidity()) {
    showToast("Please complete all required SACCO and owner details.");
    return;
  }
  const data = new FormData(form);
  const password = String(data.get("password") || "");
  const confirmPassword = String(data.get("confirm_password") || "");
  if (!validatePassword(password)) {
    showToast("Password is too weak. Use uppercase, lowercase, number, and symbol.");
    return;
  }
  if (password !== confirmPassword) {
    showToast("Passwords do not match. Please confirm the password correctly.");
    return;
  }
  try {
    const result = await apiRequest("/api/saccos", {
      saccoName: data.get("sacco_name"),
      saccoPhone: data.get("sacco_phone"),
      saccoEmail: data.get("sacco_email"),
      location: data.get("location"),
      memberCount: data.get("members_count"),
      ownerName: data.get("owner_name"),
      ownerPhone: data.get("owner_phone"),
      ownerEmail: data.get("owner_email"),
      password,
      confirmPassword,
    });
    lastSaccoRegistration = result.sacco.registrationNumber;
    adminAccounts.unshift({
      name: result.admin.name,
      email: result.admin.email,
      password,
      memberName: result.admin.name,
      memberPassword: password,
    });
    memberAccounts.unshift({
      name: result.member.name,
      memberId: result.member.memberNumber,
      saccoRegistration: result.sacco.registrationNumber,
      password,
    });
    showToast(result.message);
    form.querySelector(".generated-id")?.remove();
    form.dataset.emailBody = result.email.body;
    form.insertAdjacentHTML("beforeend", `<div class="generated-id full"><strong>Assigned Registration Number</strong><span>${result.sacco.registrationNumber}</span><button class="glass-link" type="button" data-download-email="${result.sacco.registrationNumber}">Download email copy</button></div>`);
    return;
  } catch (error) {
    if (!location.protocol.startsWith("file")) {
      showToast(error.message);
      return;
    }
  }
  const registration = nextSaccoRegistration();
  lastSaccoRegistration = registration;
  const ownerName = String(data.get("owner_name"));
  const ownerEmail = String(data.get("owner_email"));
  const ownerPassword = String(data.get("password"));
  adminAccounts.unshift({
    name: ownerName,
    email: ownerEmail,
    password: ownerPassword,
    memberName: ownerName,
    memberPassword: ownerPassword,
  });
  memberAccounts.unshift({
    name: ownerName,
    memberId: `ZS-${1000 + memberAccounts.length + 1}`,
    saccoRegistration: registration,
    password: ownerPassword,
  });
  const emailBody = `Z-SACCO Account Details

SACCO Name: ${data.get("sacco_name")}
SACCO Registration Number: ${registration}
SACCO Phone: ${data.get("sacco_phone")}
SACCO Email: ${data.get("sacco_email")}
Main Branch: ${data.get("location")}
Members: ${data.get("members_count")}

Owner/Admin Name: ${data.get("owner_name")}
Owner/Admin Phone: ${data.get("owner_phone")}
Owner/Admin Email: ${data.get("owner_email")}

Important:
- This is the main SACCO owner/admin account.
- SACCO members should receive limited member portal access only.
- Each member should set a private member password.
- Members can log in with the SACCO registration number, member ID, or registered member name plus their password.
- The owner/admin can also access the member portal because they are part of this SACCO.`;
  showToast(`Account created. Details sent to ${data.get("owner_email")} with registration ${registration}.`);
  form.querySelector(".generated-id")?.remove();
  form.insertAdjacentHTML("beforeend", `<div class="generated-id full"><strong>Assigned Registration Number</strong><span>${registration}</span><button class="glass-link" type="button" data-download-email="${registration}">Download email copy</button></div>`);
  form.dataset.emailBody = emailBody;
}

document.addEventListener("click", (event) => {
  const screenButton = event.target.closest("[data-screen]");
  const memberScreenButton = event.target.closest("[data-member-screen]");
  const switchButton = event.target.closest("[data-switch]");
  const transactionButton = event.target.closest("[data-post-transaction]");
  const saveMemberButton = event.target.closest("[data-save-member]");
  const submitLoanButton = event.target.closest("[data-submit-loan]");
  const loanDecisionButton = event.target.closest("[data-loan-decision]");
  const downloadButton = event.target.closest("[data-download]");
  const tableAction = event.target.closest(".table-action");
  const authTabButton = event.target.closest("[data-auth-tab]");
  const openAppButton = event.target.closest("[data-open-app]");
  const scrollButton = event.target.closest("[data-scroll-target]");
  const featureCard = event.target.closest("[data-feature]");
  const emailDownloadButton = event.target.closest("[data-download-email]");
  const loginRoleButton = event.target.closest("[data-login-role]");
  const loginSubmitButton = event.target.closest("[data-login-submit]");
  const forgotPasswordButton = event.target.closest("[data-forgot-password]");
  const logoutButton = event.target.closest("[data-logout]");
  if (openAppButton) openSystemAuth(openAppButton.dataset.openApp);
  if (scrollButton) scrollToSection(scrollButton.dataset.scrollTarget);
  if (featureCard) setFeatureDetail(featureCard);
  if (loginRoleButton) chooseLoginRole(loginRoleButton.dataset.loginRole);
  if (loginSubmitButton) loginAsRole(loginSubmitButton.dataset.loginSubmit, loginSubmitButton);
  if (forgotPasswordButton) forgotPassword(forgotPasswordButton.dataset.forgotPassword, forgotPasswordButton);
  if (logoutButton) logout();
  if (screenButton) setAdminScreen(screenButton.dataset.screen);
  if (memberScreenButton) setMemberScreen(memberScreenButton.dataset.memberScreen);
  if (authTabButton) setAuthMode(authTabButton.dataset.authTab, authTabButton);
  if (transactionButton) postTransaction(transactionButton.dataset.postTransaction, transactionButton);
  if (saveMemberButton) saveMember(saveMemberButton);
  if (submitLoanButton) submitLoan(submitLoanButton);
  if (loanDecisionButton) decideLoan(loanDecisionButton.dataset.loanDecision);
  if (event.target.closest("[data-print-receipt]")) downloadFile("z-sacco-receipt.txt", `Z-SACCO Receipt\nGenerated: ${todayLabel()}\nReference: ${selectedTransaction[0]}\nMember: ${selectedTransaction[1]}\nAmount: ${selectedTransaction[3]}`);
  if (event.target.closest("[data-upload-kyc]")) showToast("KYC document upload simulated. Member file marked ready for review.");
  if (event.target.closest("[data-attach-documents]")) showToast("Loan documents attached to the application package.");
  if (event.target.closest("[data-support]")) showToast("Support request submitted. A Z-SACCO officer will follow up.");
  if (event.target.closest("[data-create-access]")) createSaccoAccount(event.target.closest("[data-create-access]"));
  if (event.target.closest("[data-contact-submit]")) submitContactForm(event.target.closest("[data-contact-submit]"));
  if (emailDownloadButton) {
    const form = emailDownloadButton.closest("form");
    downloadFile(`${emailDownloadButton.dataset.downloadEmail}-account-email.txt`, form.dataset.emailBody || "Z-SACCO account details");
  }
  if (downloadButton) {
    const csv = ["Reference,Member,Type,Amount,Date,Status", ...transactions.map((row) => row.join(","))].join("\n");
    const report = `Z-SACCO Financial Summary\nGenerated: ${todayLabel()}\nNet Savings: UGX 18.7B\nLoan Portfolio: UGX 9.4B\nArrears Rate: 2.7%`;
    if (downloadButton.dataset.download === "financial-summary") downloadFile("z-sacco-financial-summary.txt", report);
    else downloadFile("z-sacco-transactions.csv", csv, "text/csv");
  }
  if (tableAction) {
    const values = tableRowValues(tableAction);
    const label = tableAction.innerText.trim().toLowerCase();
    if (label === "details" || label === "view" || label === "open") {
      if (values[0]?.startsWith("TX-")) {
        selectedTransaction = transactions.find((row) => row[0] === values[0]) || values;
        showToast(`Opened transaction ${selectedTransaction[0]}.`);
        if (!appFrame.classList.contains("hidden")) setAdminScreen("transactions");
      } else if (values[0]?.startsWith("LN-")) {
        selectedLoan = loanRows.find((row) => row[0] === values[0]) || values;
        setAdminScreen("loanDetails");
      } else if (values[0]?.startsWith("ZS-")) {
        showToast(`Opened ${values[1]}'s member profile.`);
        setAdminScreen("memberProfile");
      } else {
        showToast(`${tableAction.innerText.trim()} action completed.`);
      }
    }
    if (label === "decide") {
      selectedLoan = loanRows.find((row) => row[0] === values[0]) || values;
      setAdminScreen("loanDetails");
    }
    if (label === "download") downloadFile(`${values[0].toLowerCase()}-statement.txt`, `Z-SACCO Statement\nStatement: ${values[0]}\nMember: ${values[1]}\nPeriod: ${values[2]}\nBalance: ${values[3]}`);
    if (label === "edit") showToast(`${values[0]} role opened for editing.`);
  }
  if (switchButton) {
    guardedSwitch(switchButton.dataset.switch);
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches("#tableSearch")) filterTable(event.target);
});

document.addEventListener("mouseover", (event) => {
  const featureCard = event.target.closest("[data-feature]");
  if (featureCard) setFeatureDetail(featureCard);
});

document.querySelector("#menuButton").addEventListener("click", () => appFrame.classList.toggle("menu-open"));

const siteSections = [...document.querySelectorAll(".public-site main section[id]")];
const siteLinks = [...document.querySelectorAll("[data-site-link]")];

function updateActiveSiteLink() {
  if (publicSite.classList.contains("hidden")) return;
  const current = siteSections.reduce((active, section) => {
    const top = section.getBoundingClientRect().top;
    return top <= 140 ? section : active;
  }, siteSections[0]);
  siteLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current?.id}`));
}

window.addEventListener("scroll", updateActiveSiteLink, { passive: true });

setAdminScreen("adminLogin");
setMemberScreen("memberDashboard");
updateActiveSiteLink();
