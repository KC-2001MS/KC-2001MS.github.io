// 英語版トップページ（/en/）を GitHub Pages で開けるようにする
// 静的書き出しでは out/en.html しか作られず、/en/ と /en/index.html は out/en/index.html を探して 404 になるため、同じ内容を置く
import fs from "fs";

fs.copyFileSync("out/en.html", "out/en/index.html");
