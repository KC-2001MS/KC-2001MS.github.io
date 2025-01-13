---
title: Embedded SwiftでM5Stack NanoC6を動かす
description: これから、Embedded Swiftを使用して、サンプルプロジェクトのesp32-led-blink-sdkを利用してM5Stack NanoC6でLEDを点滅させる。
keywords: ["Swift", "ESP32-C6", "Embedded Swift"]
genre: Embedded Swift
date: 2025/1/14
---
# Embedded SwiftでM5Stack NanoC6を動かす
これから、Embedded Swiftを使用して、サンプルプロジェクトのesp32-led-blink-sdkを利用してM5Stack NanoC6でLEDを点滅させる。

## はじめに
WWDC2024では、Embedded Swiftが発表され、SwiftでAppleデバイスではなく、組み込み機器の開発ができるようになる予定だ。（現在は、正式なリリースはされていないようで、SwiftのSnapshotをインストールして使用する必要があるようだ。）
そこで、Appleデバイスの開発だけでなく組み込み機器の開発に挑戦してみることにした。今回は、**M5Stack NanoC6を使用してLEDを点滅させることを目指す**。組み込み機器については初めてなので間違っていることがあるかもしれないが、暖かく見守っていただけると幸いだ。

## Embedded Swiftとは
Embedded Swiftは、Swiftを組み込み機器の開発で扱うことができるものだ。Embedded Swiftは、今までのSwiftとは異なり、Embedded Swift用のコンパイルモードを使用する。そのため、依存関係が大きく異なっているが、ほとんどのSwiftの構文を利用できる。逆に言うと、利用できない構文があるとも言える。
大きく注目を集めたのはWWDC 2024のセッション[「Embedded Swiftでサイズを縮小」](https://developer.apple.com/jp/videos/play/wwdc2024/10197/)ではあるが、実は発表されたのはそれ以前のSwift.orgのブログ記事の[「Byte-sized Swift: Building Tiny Games for the Playdate」](https://www.swift.org/blog/byte-sized-swift-tiny-games-playdate/)や[「Get Started with Embedded Swift on ARM and RISC-V Microcontrollers」](https://www.swift.org/blog/embedded-swift-examples/)だ。
このSwift.orgのブログ記事のタイトルからわかる通り、全ての組み込み機器でEmbedded Swiftが利用できるわけではない。ARMアーキテクチャとRISC-Vアーキテクチャのものに限られている。もし、みなさんがEmbedded Swiftの開発をしたい場合、対応した組み込み機器を入手する必要があるため注意が必要だ。

## 組むこみ機器の選定方法について
私は、M5Stack NanoC6を使用してみることにしたため、これ以降はM5Stack NanoC6での話となる。みなさんは異なる機器を使用するかもしれないが、Embedded Swiftは以下のものが対応しているのでそれを元に選定する。
### マイクロコントローラ
マイクロコントローラにはCPUがあるため、こちらを見れば良い。おそらく他にもEmbedded Swiftで利用できるマイクロコントローラはあるとは思うが、ここではサンプルプロジェクトで確実に動作することが確認されているマイクロコントローラだけをあげてみた。
- ARM
  - STM32F746
  - RP2040
  製品名Raspberry Pi Picoのほうが有名。製品名で紹介されていた。
  - nRF52840
- RISC-V
  - ESP32C6

この中から選べば安全だと思われる。これ以降はESP32C6での話になるため、それ以外のマイクロコントローラを選択する場合はこれ以降の話は成り立たない。
また、環境構築やCライブラリなどの組み込みの知識がある人であれば、これ以外のマイクロコントローラでも動作させられるのかもしれないが、現在の私にはわからない。
## 環境構築
では環境構築に進む。基本的には、[Swift Matter Examples TutorialsのSwift Matter Examples Tutorials](https://apple.github.io/swift-matter-examples/tutorials/swiftmatterexamples/setup-macos/)に記載されている通りに進める。

まずは、Xcodeと最新のswiftのDEVELOPMENT SNAPSHOTをインストールする。

その後、ターミナルを開きSNAPSHOTがインストールがされているのかを確認する。さらに、SNAPSHOTのCFBundleIdentifierの値を確認しておく。この値は、TOOLCHAINSの指定に使うために使用する。以下のコマンドの出力は例であるが概ね似たようなものになるはずだ。
一応、インストールしたSwiftが利用する機器のアーキテクチャーと一致するか確認すると良い。
```zsh
$ ls ~/Library/Developer/Toolchains/
swift-DEVELOPMENT-SNAPSHOT-2024-06-03-a.xctoolchain
swift-latest.xctoolchain

$ plutil -extract CFBundleIdentifier raw \
  -o - \
  ~/Library/Developer/Toolchains/swift-DEVELOPMENT-SNAPSHOT-2024-06-03-a.xctoolchain/Info.plist
org.swift.59202406031a

$ TOOLCHAINS=org.swift.59202406031a swift --version
Apple Swift version 6.0-dev (LLVM c7c87ee42989d4b, Swift 0aa0687fe0f4047)
Target: arm64-apple-macosx14.0
```
homebrewのインストールはわかると思うので省略する。homebrewでは、cmake/ninja/dfu-utilのインストールをする。
```zsh
$ brew install cmake ninja dfu-util
```
次に、ホームリレクトリにespフォルダを作成して、その中にesp-idfとesp-matterをクローンしてインストールする。
その後、ツールチェーンには先ほど確認したCFBundleIdentifierの値に設定すして、最後にexport.shを実行する。
ここでは、esp-matterもインストールしているが、プロジェクトでは使用している様子は見られないため、不要かもしれないが検証はしていない。
```zsh
$ mkdir -p ~/esp

$ cd ~/esp
$ git clone \
  --branch v5.2.1 \
  --depth 1 \
  --shallow-submodules \
  --recursive https://github.com/espressif/esp-idf.git \
  --jobs 24

$ cd ~/esp/esp-idf
$ ./install.sh

$ cd ~/esp
$ git clone \
    --branch release/v1.2 \
    --depth 1 \
    --shallow-submodules \
    --recursive https://github.com/espressif/esp-matter.git \
    --jobs 24

$ cd ~/esp/esp-matter
$ ./install.sh

$ export TOOLCHAINS=org.swift.59202406031a

$ . ~/esp/esp-idf/export.sh

$ . ~/esp/esp-matter/export.sh
```

その後、以下のコマンドを順に実行する。`<path to swift-embedded-examples>`はswift-embedded-examplesのパスを入力する。
```zsh
$ cd <path to swift-embedded-examples>
$ python3 -m venv .venv
$ source .venv/bin/activate
$ python3 -m pip install -r Tools/requirements.txt
```
これで、環境の構築は完了だ。

## サンプルプロジェクトのファイル構成を確認
では、Swiftのプロジェクトがどのように構成されているのかを確かめてみる。esp32-led-blink-sdkのファイル構成を一つ一つ説明する。
- main
  - BridgingHeader.h
  C言語のヘッターファイルである。ここでインポートしたものがSwiftで使用できる。
  - CMakeLists.txt
  こちらでは、main内の設定を定義している。Swiftが利用できるようにしているのもこの部分。
  - idf_component.yml
  idfの依存関係を定義するファイル。今回は何も記載されていない。
  - Led.swift
  LED構造体を定義している。ここで注目して欲しいのが、ここで呼ばれている関数の定義がSwiftにはない点だ。これは、C言語のライブラリで定義されているものだ。
  - Main.swift
  エントリーポイントとなるファイルだ。
- CMakeLists.txt
  `include($ENV{IDF_PATH}/tools/cmake/project.cmake)`が特徴的だ。ESP-EDFを利用するためにコンポーネントを登録するらしい。現在は、呪文として理解。
- dependencies.lock
  依存関係を定義するファイル。こちらで、esp32c6を使用することが定義されていることから、idf_component.ymlに記載する必要がないと思われる。
- diagram.json
  Wokwiという基板のシミュレータで基板の種類や接続を定義するjsonファイル。Visual Studio CodeのWokwi拡張機能をインストールすると実際の基板を確認できる。このプロジェクトでは、Esp32-C6-Bugの基板のシミュレータが立ち上がる。シミュレートはしないため今回は触らない。
- sdkconfig
  ファイルのコメントを見ると、自動生成されているファイルのようだ。
- sdkconfig.old
  ファイルのコメントを見ると、自動生成されているファイルのようだ。
- wokwi.toml
  Wokwiという基板のシミュレータのコンフィギュレーションファイル
  

### わかること
このプロジェクトの特徴的な点としてSwift Package Managerを使用していない点が挙げれられる。ただ、同じくEmbedded Swiftを利用している[swift-playdate-examples](https://github.com/apple/swift-playdate-examples)においてはSwift Package Managerを使用していることから、今後Swift Package Managerを使用したプロジェクト構成で構築できるかは検証する余地がある。

## サンプルプロジェクトを動作させてみる
では、サンプルプロジェクトを動作させてLEDを点滅させてみる。M5Stack NanoC6はESP32C6であることは確認しているので、今回はesp32-led-blink-sdkのプロジェクトを使用してみることにする。
では、基板を接続したら以下のコマンドを叩いて動作させよう。
```zsh
$ cd esp32-led-blink-sdk
$ export TOOLCHAINS=org.swift.59202406031a
$ . <path-to-esp-idf>/export.sh
$ idf.py set-target esp32c6
$ idf.py build
```
### そのままだとビルドはできても動かない
ビルドできているはずなのに動かないはずだ。これは、サンプルプロジェクトでは、異なる基板[Esp32-C6-Bug]()を使用しており、このボードが動くようにプログラミングされているためだ。
[M5Stack NanoC6のドキュメント](https://docs.m5stack.com/ja/core/M5NanoC6)を確認してみよう。注目して欲しいのは、ピンマップに関する記載だ。
![M5Stack nano c6 ピンマップ](/images/m5stacknanoc6-pinmap.png "ピンマップ")
LED(Blue)はGPI07に割り当てられている。対して、サンプルプロジェクトでの図によるとGPI08に割り当てられていることに気づくはずだ。
つまり、数字を変更する必要があるのだ。
```swift:Main.swift
@_cdecl("app_main")
func main() {
  print("Hello from Swift on ESP32-C6!")

  var ledValue: Bool = false
  let blinkDelayMs: UInt32 = 500
  let led = Led(gpioPin: 8)

  while true {
    led.setLed(value: ledValue)
    ledValue.toggle()
    vTaskDelay(blinkDelayMs / (1000 / UInt32(configTICK_RATE_HZ)))
  }
}
```
を
```swift:Main.swift
@_cdecl("app_main")
func main() {
  print("Hello from Swift on ESP32-C6!")

  var ledValue: Bool = false
  let blinkDelayMs: UInt32 = 500
  let led = Led(gpioPin: 7) // M5NanoC6内蔵のLEDはGPIO7だったのでこの値に変更(デフォルトは8)

  while true {
    led.setLed(value: ledValue)
    ledValue.toggle()
    vTaskDelay(blinkDelayMs / (1000 / UInt32(configTICK_RATE_HZ)))
  }
}
```
に変えれば良い。

もう一度実行してみると、LEDが点滅するのが確認できるはずだ。

## 最後に
今回は、M5Stack NanoC6でサンプルコードを修正してLEDを点滅させた。今回、プログラミングでドキュメントを見る大切さと同じく、埋め込みの開発においてスペックシートを見ることがとても重要だと学ぶことができた。皆にもこの大切さを共有できれば幸いだ。
また、ESP32-C6-BUGは簡単には手に入らず、値段も高めの4785円のため、1276円のM5Stack NanoC6でEmbedded Swiftを体験できることを伝えられた。これはとても有意義なことではないだろうか。特に、Embedded Swiftに関して実際に動かしてみた記事は日本語圏では多くないため、役に立てば幸いだ。

##　参考資料
- [Embedded Swiftでサイズを縮小](https://developer.apple.com/jp/videos/play/wwdc2024/10197/)
- [Byte-sized Swift: Building Tiny Games for the Playdate](https://www.swift.org/blog/byte-sized-swift-tiny-games-playdate/)
- [Get Started with Embedded Swift on ARM and RISC-V Microcontrollers](https://www.swift.org/blog/embedded-swift-examples/)
- [GitHub : apple/swift-embedded-examples](https://github.com/apple/swift-embedded-examples/tree/main)
- [Swift Matter Examples Tutorials : Swift Matter Examples Tutorials](https://apple.github.io/swift-matter-examples/tutorials/swiftmatterexamples/setup-macos/)
- [NanoC6 - m5-docs - M5Stack](https://docs.m5stack.com/ja/core/M5NanoC6)
- [M5Stack NanoC6](https://www.switch-science.com/products/9570?srsltid=AfmBOorJRglcRJ3WqE-mQq-XjthkeevmB39LyzU5dFA58r3zqGl8vbjb)
- [diagram.json File Format](https://docs.wokwi.com/diagram-format)
- [idf_component.yml Manifest File — IDF Component Management  documentation](https://docs.espressif.com/projects/idf-component-manager/en/latest/reference/manifest_file.html)
- [Dependencies.lock File — IDF Component Management  documentation](https://docs.espressif.com/projects/idf-component-manager/en/latest/reference/dependencies_lock.html)
- [Build System (CMake) -  -  — ESP-IDF Programming Guide release-v3.3 documentation](https://docs.espressif.com/projects/esp-idf/en/release-v3.3/api-guides/build-system-cmake.html)