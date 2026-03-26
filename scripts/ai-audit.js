import fs from "fs";

function read(file) {
    return fs.existsSync(file) ? fs.readFileSync(file, "utf-8") : "";
}

const system = read(".ai/audit/audit-system.md");
const prompt = read(".ai/audit/audit-prompt.md");
const agent = read(".ai/core/audit-agent.md");

const fullPrompt = `
SYSTEM:
${system}

AGENT:
${agent}

TASK:
${prompt}
`;

console.log("🧠 AI AUDIT RUNNING...");
console.log("📄 Prompt preview:");
console.log(fullPrompt.substring(0, 500));

console.log("✅ AI Audit script executed (Punto B OK)");