#!/bin/bash
set -euo pipefail

# Claude Code on the web でのみ実行
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

# 依存関係をインストール（コンテナキャッシュを活かすため npm ci ではなく npm install）
npm install --no-audit --no-fund
