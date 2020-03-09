# Cloud Functions を使って SlackBot で遊ぶ

## Setup

### ライブラリのインストール

```
npm install
```

### gcloud コマンドの設定

https://cloud.google.com/sdk/docs/quickstart-macos?hl=ja

### SlackBot の設定

[ここ](https://api.slack.com/apps)から `Create New App` で Bot を作成する

Bot を作成したら、左の `Install App` タブから Slack に Bot をインストールしてトークンを発行する

### bot のトークンを設定

.env ファイルをコピー

```
cp .env.yml.example .env.yml
```

.env.yml ファイルの SLACK_BOT_TOKEN に SlackBot のトークンを書く

### デプロイする

make コマンドで一発

```
make deploy
```

## 参考

https://qiita.com/castaneai/items/144bb17ec8bb21f306d4
