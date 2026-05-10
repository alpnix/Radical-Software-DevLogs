# DevLog 10 - Final Submission

## Updated Proposal

Task Hub is a canvas-based collaboration tool that reimagines how people work alongside AI. The core idea: instead of a chat interface where you hand off work to an AI and wait, the canvas is the shared workspace. Users create notes and tasks as nodes, draw connections between them to express dependencies, and deliberately assign individual nodes to AI agents. The agent's response lands back on the same node — not in a separate thread — so human reasoning and AI output stay spatially related.

What changed from the original proposal: the initial concept focused more broadly on multi-agent orchestration. Through building and testing, the scope narrowed to making the single-agent interaction feel right first. The connection-line model for task relationships, and the reserved accent color for AI-touched nodes, both emerged from the Figma iteration process documented in DevLog 9.

**Slides:** [Task Hub — Updated Proposal](https://docs.google.com/presentation/d/11_u70EMs3YaRAs8GHoIZ4KAPrPeuP1Ms/edit?usp=sharing&ouid=104506883282399566995&rtpof=true&sd=true)

## Project Video

[Task Hub — Project Demo](https://youtu.be/BeC2DVLJKpA)

## Concept & Execution Statement

Task Hub started from a simple frustration: existing AI tools treat the conversation as the interface. You describe your problem in a chat window, the model responds, and the result lives somewhere separate from the actual work. Task Hub inverts this — the canvas is the workspace, and AI is one participant in it, not the destination you send work to.

The concept is intentional delegation. Users build a graph of tasks and notes, see how they connect, and choose which nodes to hand to an agent. The agent writes back to that same node. Nothing moves automatically. The goal is to make the AI's role visible and reversible rather than invisible and assumed.

On the technical side, the canvas is built in React with custom node and edge rendering. LLM calls go through the AWS SDK to Amazon Bedrock, keeping the model layer separate from the UI layer. The design system — minimal monochromatic base, one accent color reserved for AI output — came directly from the Figma moodboard and was tested against the live prototype before being finalized. Deployment is on Vercel.

The biggest open question is multi-agent support: right now every node routes to the same model. The next step is letting users point individual nodes at their own agents via webhooks, which is where the tool gets genuinely personal.

## Design Layouts

**Figma:** [Task Hub Site Capture](https://www.figma.com/design/lX6zheEdNQVuXUZBsoGerW/Task-Hub-Site-Capture?node-id=0-1&t=t0z6XxzeuJ3IgFyJ-1)

Includes moodboard, color palette, typography, component designs, wireframes, high-fidelity mockups, and layout iterations.

## Project & Repository

- **Live project:** [task-hub-virid-gamma.vercel.app](https://task-hub-virid-gamma.vercel.app/)
- **GitHub repository:** [alpnix/task-hub](https://github.com/alpnix/task-hub)
