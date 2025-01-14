---
title: Running the M5Stack NanoC6 with Embedded Swift
description: We will now use Embedded Swift to blink LEDs on the M5Stack NanoC6 using the sample project esp32-led-blink-sdk.
keywords: [“Swift”, “ESP32-C6”, “Embedded Swift”]
genre: Embedded Swift
date: "2025/1/14"
---
# Running the M5Stack NanoC6 with Embedded Swift
I will now use Embedded Swift to blink LEDs on the M5Stack NanoC6 using the sample project esp32-led-blink-sdk.
![M5Stack NanoC6](/images/m5stacknanoc6-pinmap.png "M5Stack NanoC6")
Source : [NanoC6 - m5-docs - M5Stack](https://docs.m5stack.com/ja/core/M5NanoC6)
## Introduction
Embedded Swift was announced at WWDC2024 and will allow development of embedded devices instead of Apple devices with Swift. (Currently, it does not appear to be officially released and requires Swift Snapshot to be installed and used.)
So I decided to try my hand at developing embedded devices as well as Apple devices. This time, **I aim to use M5Stack NanoC6 to blink LEDs**. I am new to embedded devices, so I may get some things wrong, but I hope you will keep a warm eye on me.

## What is Embedded Swift?
Embedded Swift is a Swift for Embedded Devices development. As a result, most Swift syntax can be used, although the dependencies are very different. Conversely, there are some syntaxes that cannot be used.
Although it was the WWDC 2024 session [“Embedded Swift Reduces Size”](https://developer.apple.com/jp/videos/play/wwdc2024/10197/) that attracted a lot of attention, it was actually announced earlier than that. Swift.org blog post [“Byte-sized Swift: Building Tiny Games for the Playdate”](https://www.swift.org/blog/byte-sized-swift-tiny-games-playdate/) and [“Get Started with Embedded Swift on ARM and RISC-V Microcontrollers”](https://www.swift.org/blog/embedded-swift-examples/).
As you can see from the title of this Swift.org blog post, not all embedded devices can use Embedded Swift; it is limited to those on ARM and RISC-V architectures. If you want to develop Embedded Swift, please note that you need to get an embedded device that supports it.

## How to select an embedded device
I chose to use the M5Stack NanoC6, so the following discussion will be based on the M5Stack NanoC6. You may use different devices, but Embedded Swift supports the following, so I will select based on them.
### Microcontrollers
Microcontrollers have CPUs, so you can look here. There are probably other microcontrollers that can be used with Embedded Swift, but I have listed only those that have been confirmed to work reliably in our sample projects.
- ARM
  - STM32F746
  - RP2040
  The product name Raspberry Pi Pico is more famous. It was introduced under the product name.
  - nRF52840
- RISC-V
  - ESP32C6

It is considered safe to choose from among these. The following discussion will be about ESP32C6, so if you choose other microcontrollers, the discussion after this will not be valid.
In addition, it may be possible to make it work with microcontrollers other than these if you have knowledge of embedded systems such as environment construction and C libraries, but I do not know at present.

## Building the environment
Now let's proceed to building the environment. Basically, proceed as described in [Swift Matter Examples Tutorials at Swift Matter Examples Tutorials](https://apple.github.io/swift-matter-examples/tutorials/swiftmatterexamples/setup-macos/).
```zsh
$ ls ~/Library/Developer/Toolchains/
swift-development-snapshot-2024-06-03-a.xctoolchain
swift-latest.xctoolchain

$ plutil -extract CFBundleIdentifier raw \
  -o - \fst
  ~/Library/Developer/Toolchains/swift-DEVELOPMENT-SNAPSHOT-2024-06-03-a.xctoolchain/Info.plist
org.swift.59202406031a

$ TOOLCHAINS=org.swift.59202406031a swift --version
Apple Swift version 6.0-dev (LLVM c7c87ee42989d4b, Swift 0aa0687fe0f4047)
Target: arm64-apple-macosx14.0
```
Omit the homebrew installation, as I'm sure you can figure it out.
```zsh
$ brew install cmake ninja dfu-util
```
Next, create an esp folder in your home directory, clone esp-idf and esp-matter into it, and install them.
Then, set the toolchain to the CFBundleIdentifier value that you have just confirmed, and finally, run export.sh.
Here, esp-matter is also installed, but since the project does not appear to be using it, it may not be necessary, but it has not been verified.
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
$ . /install.sh

$ cd ~/esp
$ git clone \
    --branch release/v1.2 \
    --depth 1 \
    --shallow-submodules \
    --recursive https://github.com/espressif/esp-matter.git \
    --jobs 24

$ cd ~/esp/esp-matter
$ . /install.sh

$ export TOOLCHAINS=org.swift.59202406031a

$ . ~/esp/esp-idf/export.sh

$ . ~/esp/esp-matter/export.sh
```
Then execute the following commands in order.
```zsh
$ cd swift-embedded-examples
$ python3 -m venv .venv
$ source .venv/bin/activate
$ python3 -m pip install -r Tools/requirements.txt
```
Now the environment is ready to be built.

## Check the file structure of the sample project
Let's see how the Swift project is organized.
- main
  - BridgingHeader.h
  This is a header file in C language. Imported here can be used in Swift.
  - CMakeLists.txt
  This section defines the configuration in main, which is also made available to Swift.
  - idf_component.yml
  This file defines the dependencies of idf. In this case, nothing is described.
  - Led.swift
  This defines the LED structure. Notice here that the function called here is not defined in Swift. It is defined in the C library.
  - Main.swift
  This file is the entry point.
- CMakeLists.txt
  The `include($ENV{IDF_PATH}/tools/cmake/project.cmake)` is distinctive. it seems to register components to use ESP-EDF. Currently understood as a spell.
- dependencies.lock
  A file that defines dependencies. Since it is defined here that esp32c6 is used, it is not necessary to describe it in idf_component.yml.
- diagram.json
  This is a json file that defines the board type and connections in a board simulator called Wokwi. you can check the actual board by installing the Wokwi extension in Visual Studio Code. This project launches a simulator for the [Esp32-C6-Bug](https://www.mouser.jp/ProductDetail/Prokyber/ESP32-C6-BUG?qs=ZcfC38r4Pou1X3IbFvgUPQ%3D%3D&srsltid=AfmBOooiRK2CNlgGq1oGmTfcpbewYg8Pd-TurtD67HyhEXK8YB_cZg8-) board. Since it does not simulate, we will not touch it this time.
- sdkconfig
  file, it seems to be an auto-generated file.
- sdkconfig.old
  file, it seems to be an auto-generated file.
- wokwi.toml
  Configuration file of the simulator of the board named Wokwi.

### What we know
This project is unique in that it does not use the Swift Package Manager. However, [swift-playdate-examples](https://github.com/apple/swift-playdate-examples), which also uses Embedded Swift, uses Swift Package Manager. Therefore, there is room to verify if it is possible to build a project configuration using Swift Package Manager in the future.

## Let's run the sample project
Now, let's try to run the sample project and blink the LEDs, since we have confirmed that the M5Stack NanoC6 is an ESP32C6, we will use the esp32-led-blink-sdk project.
Now, let's get it working by hitting the following command after connecting the board.
```zsh
$ cd esp32-led-blink-sdk
$ export TOOLCHAINS=org.swift.59202406031a
$ . <path-to-esp-idf>/export.sh
$ idf.py set-target esp32c6
$ idf.py build
$ idf.py flash
```
### If you leave it as it is, it builds but does not work.
It should be able to build, but it should not work. This is because the sample project uses a different board [Esp32-C6-Bug](https://www.mouser.jp/ProductDetail/Prokyber/ESP32-C6-BUG?qs=ZcfC38r4Pou1X3IbFvgUPQ%3D%3D&srsltid=AfmBOooiRK2CNlgGq1oGmTfcpbewYg8Pd-TurtD67HyhEXK8YB_cZg8-) and this board is programmed to work.
Check out the [M5Stack NanoC6 documentation](https://docs.m5stack.com/ja/core/M5NanoC6). Notice the description of the pin map.
![M5Stack NanoC6 Pinmap](/images/m5stacknanoc6-pinmap.png "Pinmap")
Source : [NanoC6 - m5-docs - M5Stack](https://docs.m5stack.com/ja/core/M5NanoC6)
LED (Blue) is assigned to GPI07. In contrast, you will notice that it is assigned to GPI08 according to the diagram in the sample project.
This means that the numbers need to be changed.
```swift:Main.swift
@_cdecl(“app_main”)
func main() {
  print(“Hello from Swift on ESP32-C6!”)

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
You can change it to 
````swift:Main.swift.
@_cdecl(“app_main”)
func main() {
  print(“Hello from Swift on ESP32-C6!”)

  var ledValue: Bool = false
  let blinkDelayMs: UInt32 = 500
  let led = Led(gpioPin: 7) // M5NanoC6 built-in LED was GPIO7, so change to this value (default is 8)

  while true {
    led.setLed(value: ledValue)
    ledValue.toggle()
    vTaskDelay(blinkDelayMs / (1000 / UInt32(configTICK_RATE_HZ)))
  }
}
````

Run it again and you should see the LED blink.
![M5Stack NanoC6 blinking (lights off)](/images/m5stacknanoc6-blinking1.jpg "Blinking (lights off)")
![M5Stack NanoC6 blinking (light on)](/images/m5stacknanoc6-blinking2.jpg "Blinking (light on)")

## Finally
This time, I modified the sample code to blink LEDs on the M5Stack NanoC6. This time, I learned that it is very important to look at the spec sheet in the development of embedded devices, just as it is important to look at the documentation in programming. I hope I can share this importance with others.
Also, since the [Esp32-C6-Bug](https://www.mouser.jp/ProductDetail/Prokyber/ESP32-C6-BUG?qs=ZcfC38r4Pou1X3IbFvgUPQ%3D%3D&srsltid=AfmBOooiRK2CNlgGq1oGmTfcpbewYg8Pd-TurtD67HyhEXK8YB_cZg8-) is not easy to obtain and costs 4,785 yen, I was able to tell them that they can experience Embedded Swift with the M5Stack NanoC6, which costs 1,276 yen. This would be very meaningful. We hope this is useful, especially since there are not many articles on Embedded Swift in the Japanese-speaking world.

## References
- [Go small with Embedded Swift](https://developer.apple.com/videos/play/wwdc2024/10197/)
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
- [ESP32-C6-BUG Prokyber | Mouser Japan](https://www.mouser.jp/ProductDetail/Prokyber/ESP32-C6-BUG?qs=ZcfC38r4Pou1X3IbFvgUPQ%3D%3D&srsltid=AfmBOooiRK2CNlgGq1oGmTfcpbewYg8Pd-TurtD67HyhEXK8YB_cZg8-)