FROM node:20

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# コードコピー
COPY ./app /usr/src/app

# ライブラリをインストールする
RUN npm install

# ビルドを実行する
RUN npm run build

# サーバー起動 (手動で実行するのでコメントアウトする)
# CMD npm start
