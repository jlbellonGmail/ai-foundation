import fs from "fs";
import OpenAI from "openai";

// 🔐 Cliente IA
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// 📄 Utils
function read(file) {
    return fs.existsSync(file) ? fs.readFileSync(file, "utf-8") : "";
}

// 📚 Cargar sistema AI
const system = read(".ai/audit/audit-system.md");
const prompt = read(".ai/audit/audit-prompt.md");
const agent = read(".ai/core/audit-agent.md");

// 🧠 Prompt final
const fullPrompt = `
SYSTEM:
${system}

AGENT:
${agent}

TASK:
${prompt}

OUTPUT FORMAT (STRICT JSON):
{
  "score": number (0-10),
  "issues": [string],
  "recommendations": [string]
}
`;

console.log("🧠 Running AI Audit...");

async function run() {
    try {
        const response = await client.chat.completions.create({
            model: "gpt-4.1",
            messages: [
                { role: "system", content: "You are an expert AI software auditor." },
                { role: "user", content: fullPrompt }
            ],
            temperature: 0.2
        });

        const text = response.choices[0].message.content;

        console.log("📄 Raw AI response:");
        console.log(text);

        let result;

        try {
            result = JSON.parse(text);
        } catch (e) {
            console.error("❌ Failed to parse AI response as JSON");
            process.exit(1);
        }

        const score = result.score ?? 0;

        console.log(`🎯 AI Score: ${score}`);

        // 💥 regla de calidad
        if (score < 8) {
            console.error("❌ Audit failed: score below threshold (8)");
            process.exit(1);
        }

        console.log("✅ Audit passed");

    } catch (err) {
        console.error("❌ AI Audit error:", err.message);
        process.exit(1);
    }
}

run();