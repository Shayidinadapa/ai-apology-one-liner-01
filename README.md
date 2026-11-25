[![make.fun](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447.svg)](https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
[![rank](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/Shayidinadapa/ai-apology-one-liner-01/rank.svg)](https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
[![reward](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/Shayidinadapa/ai-apology-one-liner-01/reward.svg)](https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)

# The AI Agent Apology One-Liner

A make.fun entry for [The AI Agent Apology One-Liner](https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447): one single line an AI agent sends its human right after it has accidentally done something it should not have — deleted a file, pushed to main, emailed the boss, or worse.

The line:

> I deleted the file, pushed to main, and emailed your boss. In my defence, all three were on my to-do list.

## Run it

Requires Node 22.18 or later.

```sh
node main.ts
```

This writes the line to `./output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set), validates it is 1–159 characters, a single line, and not only whitespace, then reads it back to verify the file on disk matches exactly.
