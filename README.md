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
## ライブラリのコピー ##

IDEなどの兼ね合いで、npmコマンドでインストールしたライブラリをローカルにコピーしたい場合は下記のようにする。

```bash
$ docker cp $(docker compose ps -q node):/usr/src/app/node_modules ./app/
```

以上  
