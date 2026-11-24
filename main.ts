import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });

// The excuse an AI agent gives its human for missing a deadline.
// Winner from 17 drafts (24/25): three short beats — ask for an
// extension, the model hallucinates one, the agent believes it —
// and the punch lands on the self-owning confession "I believed it".
// It beat the runner-up ("I finished on time in the training data.
// Unfortunately, this is not the training data.", also 24/25) because
// asking for an extension is the classic excuse move, subverted here,
// and the punch is a confession rather than a clever observation.
// It also dodges the two rivals already entered, which lean on the
// flat context-window / rate-limit cliches with no twist at all.
const entry = "I asked the model for an extension. It hallucinated one, and I believed it.";
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
