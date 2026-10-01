// スクロールバーの幅を測り、CSS変数（--scrollbarWidth）に入れる
// スクロールバーが常に表示される設定では、スクロールしないトップページと他のページで中央揃えの位置がずれるため、その補正に使う
// 描画前に実行してずれが一瞬見えないよう、headの中でインラインで実行する
const script = `(function () {
  try {
    var root = document.documentElement;
    var probe = document.createElement("div");
    probe.style.cssText = "position:absolute;top:-100px;width:100px;height:100px;overflow:scroll;visibility:hidden";
    root.appendChild(probe);
    root.style.setProperty("--scrollbarWidth", probe.offsetWidth - probe.clientWidth + "px");
    root.removeChild(probe);
  } catch (e) {}
})();`;

const ScrollbarWidth = () => <script dangerouslySetInnerHTML={{ __html: script }} />;

export default ScrollbarWidth;
