# ローカル環境 #

React.js (18.x系) を学習するために作成したリポジトリです。

## ミドルウェア ##

* [Node.js 20.x](https://nodejs.jp/)  
  ※ Reactの開発に必要なのでNode.jsを設置しています
* [nginx](https://nginx.org/en/)  
  ※ ビルド後の静的ファイルの動作確認のためにWebサーバーを設置しています

## 前提条件 ##
* MacOS ( bashが使えるWindows環境)
  ( [Gitbash](https://gitforwindows.org) / [Windows Subsystem for Linux 2](https://docs.microsoft.com/ja-jp/windows/wsl/install-win10) )
* [Gitコマンド](https://git-scm.com) をインストール済み
* [Docker for Desktop](https://hub.docker.com/editions/community/docker-ce-desktop-mac) をインストール済み  
  ※ docker compose ver2.x系

## 準備 ##

ソースコードをダウンロードします。

```bash
$ mkdir -p ~/workspace & cd ~/workspace
$ git clone git@github.com:reflet/react-typescript.git
$ cd react-typescript
```

## Dockerイメージ/コンテナ ##

dockerイメージを作成します。

```bash
$ docker compose build
```

## サーバー起動 ##

dockerコンテナを起動します。

```bash
$ docker compose up -d
```

## 動作確認 (Watch) ##

開発用にReactを起動します。

```bash
$ docker compose exec node npm start
```

ブラウザでページを開いてみる。

```bash
$ open http://localhost:3000
```

## 動作確認 (ビルド) ##

Reactをビルドします。  
※ `./app/build/` フォルダ配下にビルドされたファイルが作成されます

```bash
$ docker compose exec node npm run build
```

ブラウザでページを開いてみる。

```bash
$ open http://localhost:8080
```

## サーバー削除 ##

サーバーを破棄する場合は、下記コマンドを実行します。

```bash
$ docker compose down -v
```

## Nodeライブラリ ##

新規にライブラリを追加する。

```bash
$ docker compose exec node npm install {ライブラリ名}
```

# 備考 #
## TypeScript設定 (tsconfig) ##

TypeScriptをプロジェクト事にカスタマイズする。  

* TypeScript公式サイト / tsconfig リファレンス  
  https://www.typescriptlang.org/ja/tsconfig

### target ###
`どのバージョンのJavaScriptにコンパイルするか` を指定します。  
　※ デフォルト: es5  
　※ ES6は、一部未対応のブラウザがあるので、デフォルトはES5となっている  

### lib ###

targetに指定しているバージョンに存在しない機能を使用したい場合はlibに追記します。  
esnextという記述がありますが、ESNextとはECMAScriptの仕様（つまり最新のJavaScriptの記法）となります。  

### module ###

JavaScriptは、フロントエンドかバックエンドかで指定するモジュールが変わるようです。  
※ フロントエンド: `esnext`  
※ バックエンド: `commonjs`  

### jsx ###

React開発では必要な設定となります。  
これはJSX構文がどのようにJavaScriptファイルに出力されるかを設定するものです。  
※ Reactのバージョン16まで： react  
※ Reactのバージョン17以降： react-jsx  
　( バージョン17からJSXの変換ロジックが変わった )  

### strict ###

プログラムがなるべく安全に動くようにTypeScriptが推奨している設定をいくつかまとめて有効化する。  
※ 新規開発の場合は、 `true` にすることが推奨される  

## TypeScriptの型定義を別でインストールする ##

使用するライブラリに型定義がない場合、 `Definitely Typed` のリポジトリから追加する。  

* Definitely Typed  
  https://github.com/DefinitelyTyped/DefinitelyTyped  

* TypeScript公式サイト（Type Search画面）  
  https://www.typescriptlang.org/dt/search

```bash
# 例)
$ docker-compose exec node npm install -D @types/react-router-dom
```

## ライブラリのコピー ##

IDEなどの兼ね合いで、npmコマンドでインストールしたライブラリをローカルにコピーしたい場合は下記のようにする。

```bash
$ docker cp $(docker compose ps -q node):/usr/src/app/node_modules ./app/
```

以上  
