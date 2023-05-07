# chainlink-dynamicNft
Chainlinkを使用したダイナミックnft（チュートリアル）

# 環境情報
項目|値
--|--
ネットワーク|Polygon Mumbai
オラクルコントラクト| 0x678173a60d0f098af059e1a0ddf1c29d10a30473


# 手順
1. 環境設定
   1. Chanlinkライブラリのインストール
   2. 必要ライブラリのインストール
    ```
    npm install dotenv --save
    ```
2. 環境変数の設定
   1. .envファイル：秘密鍵とRPCのURL
   2. job idとオラクルコントラクトの設定
    </br> -> 不要（/helper-hardhat-config.jsにて設定済み）
    </br> *環境情報：[テストネット用Job IDとオラクルアドレス](https://docs.chain.link/any-api/testnet-oracles/)
3. オラクルコントラクトのデプロイ *Polygon Mumbaiでデプロイ
   ```
   npx hardhat run --network mumbai scripts/deployment/deployApiConsumer.js
   ```
4. 

***

# 参考URL：
* [Dynamic NFTを作る（決定版） -Zenn](https://zenn.dev/allegorywrite/articles/a8be18daa57980)
* [Chainlink Faucet](https://faucets.chain.link/mumbai)
* [テストネット用Job IDとオラクルアドレス](https://docs.chain.link/any-api/testnet-oracles/)
