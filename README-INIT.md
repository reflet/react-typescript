# 初期構築 #

## フォルダ作成 ##

appとdockerフォルダを作成する。

```bash
$ mkdir -p ./app ./docker/node
```

## dockerイメージ ##

nodeのDockerfileを用意する。

```bash
$ vi ./docker/node/Dockerfile
```
```Dockerfile
FROM node:20

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
```

docker-compose.yamlを用意する

```bash
$ vi docker-compose.yaml
```
```yaml
services:
  node:
    image: react-app:local
    build:
      context: ./
      dockerfile: ./docker/node/Dockerfile
    ports:
      - "3000:3000"
    tty: true
    volumes:
      - ./app:/usr/src/app
```

dockerイメージを初期構築する。

```bash
$ docker-compose build
```

## React初期構築 ##

npxコマンドを使って、Reactプロジェクトを作成する。

```bash
$ docker-compose run --rm node npx create-react-app . --template typescript
```

## docker設定変更 ##

コードのコピーや「npm install」コマンドを実行するようにDockerfileを変更する。

```bash
$ vi ./docker/node/Dockerfile
```
```Dockerfile
FROM node:20

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# ----------------------------
# ↓ ここから下を追加する

# コードコピー
COPY ./app /usr/src/app

# ライブラリをインストールする
RUN npm install

# ビルドを実行する
RUN npm run build
```

また、 `node_modules` フォルダをローカルと同期するとファイル数が多くて非常に重くなる。  
それを避けるために、ローカルと同期しないように変更する。

```bash
$ vi docker-compose.yaml
```
```yaml
services:
  node:
    image: react-app:local
    build:
      context: ./
      dockerfile: ./docker/node/Dockerfile
    ports:
      - "3000:3000"
    tty: true
    volumes:
      - ./app:/usr/src/app
      # ↓ ここを追加する
      - node_modules:/usr/src/app/node_modules

# ↓ ここを追加する
volumes:
  node_modules:
    driver: local
```

dockerイメージを再構築します。

```bash
$ docker-compose build
```

dockerコンテナを起動する。

```bash
$ docker-compose up -d
```

## 動作確認 ##

Reactを起動します。

```bash
$ docker-compose exec node npm start
```

ブラウザでアクセスしてみる。

```bash
open http://localhost:3000
```

以上
