---
title: macOSの特定のパスにアクセスして、読み書きを行う
description: Sandboxによって、アクセスすることが困難な特定のパスについて簡単にアクセスする方法を解説する。
keywords: ["Swift", "Sandbox", "macOS"]
genre: Swift
date: 2025/4/2
---
# macOSの特定のパスにアクセスして、読み書きを行う
macOSアプリにおいて、サンドボックスの制約上自由にファイルにアクセスすることはできません。今回は、Sandboxの制約を守りつつHomeリレクトリ直下の特定のパスにアクセスする方法を学びます。
実際に、App Reviewを通過した方法のため問題のない方法です。ぜひ、採用してみてはどうでしょうか。

## 環境

## 今までの方法
これは、Stack Overflowや
```swift
extension FileManager {
    static var homeDirectoryURL: URL? {
        guard let pw = getpwuid(getuid()), let home = pw.pointee.pw_dir else { return nil }
        let homePath = self.default.string(withFileSystemRepresentation: home,
                                           length: strlen(home))
        return URL(fileURLWithPath: homePath)
    }
}

let home = FileManager.homeDirectoryURL
```
今も実際に動作する方法ですが、趣のある方法です。みたことのない関数がありますねgetpwuidとかgetuidはObjective-Cで定義されているように見えます。

古きコードの良さももちろんありますが、Swiftでよりシンプルにアクセスしたいでしょう。そこで、いろいろ試してみると以下の方法でアクセスできました。
## 簡単な方法
実は、コードとしては恐ろしいほど簡単です。今回は~/.ssh/configで試してみます。
```swift
    
```
これは、みんなが理解できるコードかと思います。もちろん試したこともあるはずです。これだけではうまくいかないのですが、使用するのはこのコードです。
ただ単に、エンタイトルメントファイルに以下の内容を追加するだけです。
```plist
	<key>com.apple.security.temporary-exception.files.home-relative-path.read-write</key>
	<array>
		<string>/.ssh/</string>
	</array>
```
これでアクセスができるはずです。

## 最後に
エンタイトルメントファイルに以下の内容を追加するだけということで、

## 参考資料
- [Swift: SandBoxアプリでHomeDirectoryを取得](https://developer.apple.com/jp/videos/play/wwdc2024/10197/)