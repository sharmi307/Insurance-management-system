// InsurancePro - Insurance Management System

let policyCount = 0;
let customerCount = 0;
let claimCount = 0;
let agentCount = 0;

// Add Insurance Policy
function addPolicy() {
    const input = document.getElementById("policyName");
    const name = input.value.trim();

    if (name === "") {
        alert("Please enter a policy name!");
        return;
    }

    const list = document.getElementById("policyList");
    const item = document.createElement("li");
    item.textContent = name;

    list.appendChild(item);
    policyCount++;

    document.getElementById("policyCount").textContent = policyCount;
    input.value = "";

    alert("Policy added successfully!");
}

// Submit Insurance Claim
function addClaim() {
    const input = document.getElementById("claimName");
    const name = input.value.trim();

    if (name === "") {
        alert("Please enter claim details!");
        return;
    }

    const list = document.getElementById("claimList");
    const item = document.createElement("li");
    item.textContent = name + " - Pending";

    list.appendChild(item);
    claimCount++;

    document.getElementById("claimCount").textContent = claimCount;
    input.value = "";

    alert("Claim submitted successfully!");
}

// Add Customer
function addCustomer() {
    const input = document.getElementById("customerName");
    const name = input.value.trim();

    if (name === "") {
        alert("Please enter a customer name!");
        return;
    }

    const list = document.getElementById("customerList");
    const item = document.createElement("li");
    item.textContent = name;

    list.appendChild(item);
    customerCount++;

    document.getElementById("customerCount").textContent = customerCount;
    input.value = "";

    alert("Customer added successfully!");
}

// Add Insurance Agent
function addAgent() {
    const input = document.getElementById("agentName");
    const name = input.value.trim();

    if (name === "") {
        alert("Please enter an agent name!");
        return;
    }

    const list = document.getElementById("agentList");
    const item = document.createElement("li");
    item.textContent = name;

    list.appendChild(item);
    agentCount++;

    document.getElementById("agentCount").textContent = agentCount;
    input.value = "";

    alert("Agent added successfully!");
}

// Calculate Insurance Premium
function calculatePremium() {
    const amount = Number(document.getElementById("amount").value);
    const result = document.getElementById("premiumResult");

    if (!Number.isFinite(amount) || amount <= 0) {
        result.textContent = "Please enter a valid insurance amount.";
        return;
    }

    const premium = amount * 0.02;

    result.textContent =
        "Estimated Premium: ₹" +
        premium.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        }) +
        " (2% demonstration rate)";
}

// Generate System Report
function generateReport() {
    const report = document.getElementById("reportResult");

    report.textContent =
        "Total Policies: " + policyCount +
        " | Total Customers: " + customerCount +
        " | Total Claims: " + claimCount +
        " | Total Agents: " + agentCount;
}

// Demonstration Login
function demoLogin() {
    const message = document.getElementById("loginMessage");

    message.textContent =
        "Welcome to InsurancePro! This is a demo login only.";
      }
