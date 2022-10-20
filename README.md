# Hubmee React Native

## Install files and dependencies

```
npm i
```

Install POD

```text
cd ios
pod install
```

## Install fastlane

[Fastline Doc.](https://docs.fastlane.tools/getting-started/ios/setup/)

__Important__ You need mac to run Fastlane.

### Install fastline locally

` sudo gem install fastlane -NV `

### Add fastlane to your profile (bash, zsh..)
```
open ~/.zshrc
save path

If you install fastlane with Homebrew

Copy export PATH="$HOME/.fastlane/bin:$PATH" on the bottom line.

If you install fastlane with RubyGems

Copy export PATH="/usr/local/bin/fastlane"" on the bottom line.

save upon file and try fastlane init, everything is OK!
```

### Run for IOS

```shell
cd ios
bundle exec fastlane ios build
```