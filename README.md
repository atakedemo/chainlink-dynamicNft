# chainlink-dynamicNft
Chainlinkを使用したダイナミックnft（チュートリアル）

# 環境情報
項目|値
--|--
ネットワーク|Polygon Mumbai
Linkトークン(Mumbai)| 0x326C977E6efc84E512bB9C30f76E30c160eD06FB
オラクルコントラクト| 0x678173a60d0f098af059e1a0ddf1c29d10a30473
サンプルコントラクト(ERC721) | 0xD90224DbA00302EFEDd8C4E32FeF5e31a6276726


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

   ```shell
   cd hardhat-contracts
   npx hardhat run --network mumbai scripts/deploy_useOracle.ts
   npx hardhat run --network mumbai scripts/deploy_useOracleNft.ts
   npx hardhat verify --network mumbai デプロイしたコントラクトAddress
   ```

4. External Adapterの作成
5. Bridgeの作成（）
6. Jobの作成
7. メインコントラクトの作成・デプロイ
8. メインコントラクトにLINKトークンを送る
9. X

***

# 参考URL：
* [Dynamic NFTを作る（決定版） -Zenn](https://zenn.dev/allegorywrite/articles/a8be18daa57980)
* [テストネット用Job IDとオラクルアドレス](https://docs.chain.link/any-api/testnet-oracles/)
* [External Adapterの作り方](https://docs.chain.link/chainlink-nodes/external-adapters/node-operators)
* [Chainlink Faucet](https://faucets.chain.link/mumbai)
* [Link Token Contract Address](https://docs.chain.link/resources/link-token-contracts)
* [Lambda (Python) でスクレイピングしようとしたら盛大にハマった](https://zenn.dev/mn87/articles/843eb8251bdeb6)
* [AWS Lambdaで定期的にスクレイピングする方法](https://twinkangaroos.com/how-to-use-aws-lambda-for-periodic-scraping-3.html)
* [Dockerを用いてAWS Lambda Layersのzipファイルを作成すーる ※Lambdaレイヤーのエラー解消のため参照](https://qiita.com/SatoshiGachiFujimoto/items/437b0ccaba817903fb72)
