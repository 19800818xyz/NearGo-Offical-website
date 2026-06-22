#!/bin/bash
# 双击运行：启动 NearGo 官网本地预览服务（持续运行，关闭此终端窗口即停止）
cd "$(dirname "$0")"
echo "正在启动 NearGo 预览服务..."
echo "启动后请在浏览器打开： http://localhost:3300"
echo "（按 Ctrl+C 或关闭此窗口可停止服务）"
echo ""

# 端口被占用就先提示
if lsof -nP -iTCP:3300 -sTCP:LISTEN >/dev/null 2>&1; then
  echo "⚠️  端口 3300 已被占用——可能服务已在运行。直接打开 http://localhost:3300 即可。"
  echo ""
fi

# 依赖未安装则先安装
if [ ! -d node_modules ]; then
  echo "首次运行：安装依赖中（npm install）..."
  npm install
fi

# 启动后自动打开浏览器
( sleep 4; open "http://localhost:3300/v2c" ) &

npm run dev
