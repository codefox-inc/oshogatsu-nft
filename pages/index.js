import React from "react";
import Head from "next/head";

import NavBar from "../components/nav-bar";
import Campaign from "../components/campaign";
import MintCard from "../components/mint-card";

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>2023-newyear-nft</title>
          <meta property="og:title" content="2023-newyear-nft" />
        </Head>
        <NavBar image_src="/playground_assets/logo_h1-1500h.png"></NavBar>
        <main className="home-main">
          <img
            alt="image"
            src="/playground_assets/%E5%BA%83%E5%B3%B6dao%202023-1400w.png"
            className="home-image"
          />
          <section className="home-campaign section-container">
            <div className="home-container1 max-content-container">
              <h2 className="home-text Heading2">キャンペーンやるなら</h2>
              <Campaign></Campaign>
            </div>
          </section>
          <section className="home-message section-container">
            <div className="home-max-width max-content-container">
              <h2 className="home-text01">
                輝かしい年頭にあたり, 皆様のご健康とご多幸をお祈り申し上げます
              </h2>
              <p className="home-text02">
                <span className="Content">
                  旧年中はご愛顧を賜り厚く御礼申し上げます。
                </span>
                <br></br>
                <br></br>
                <span>
                  この度、ひろしまDAOは新年を祝い年賀状NFTを無料で配布することとなりました。
                </span>
                <br></br>
                <span>
                  何方でもウォレット接続ボタンからウォレットを接続し、お好きな年賀状NFTを発行いただけます。
                </span>
                <br></br>
                <span>
                  Polygonチェーンで発行しておりますが、ガス代はかかりません。ご安心ください。
                </span>
                <br></br>
                <br></br>
                <span>受け取りにあたっては、</span>
                <a
                  style={{ color: "blue" }}
                  href="https://codefox-jp.notion.site/NFT-a49a8dac7c8b4a2c9c1d40a1cf933e4c"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  年賀状NFTのお受け取り方法
                </a>
                <span>をご参照ください。</span>
                <br></br>
                <br></br>
                <span>
                  当初
                </span>
                <a
                  style={{ color: "blue" }}
                  href="https://prtimes.jp/main/html/rd/p/000000003.000107591.html"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  1月11日までの配布期間
                </a>
                <span>としておりましたが、当面の間は配布を継続しますので、NFTは初めてという方もぜひご体験ください。ガス代となるmaticのご準備は不要です。
                </span>
              </p>
            </div>
          </section>
          <div className="section-container">
            <div className="home-max-width1 max-content-container">
              <h2 className="home-text10">年賀状NFT一覧</h2>
              <div className="home-max-width2">
                <MintCard
                  corp_name="株式会社CodeFox"
                  image_alt="CodeFox2023"
                  image_src="/playground_assets/img_codefox.png"
                  item_name="うさぎたうくん年賀状 2023"
                  rootClassName="mint-card-root-class-name6"
                ></MintCard>
                <MintCard
                  corp_name="JPYC株式会社"
                  image_src="/playground_assets/img_jpyc.png"
                  item_name="JPYC年賀状 2023"
                  rootClassName="mint-card-root-class-name7"
                ></MintCard>
                <MintCard
                  corp_name="株式会社RAMPAGE"
                  image_src="/playground_assets/img_matsuri.png"
                  item_name="2023 MATSURI NFT ~始動"
                  rootClassName="mint-card-root-class-name7"
                ></MintCard>
                <MintCard
                  corp_name="OTAGROUP株式会社"
                  image_src="/playground_assets/img_otagroup.png"
                  item_name="OTAGROUP株式会社NFT年賀状"
                  rootClassName="mint-card-root-class-name7"
                ></MintCard>
                <MintCard
                  corp_name="株式会社オノゴロ"
                  image_src="/playground_assets/img_onogoro.png"
                  item_name="オノゴロNFT年賀状"
                  rootClassName="mint-card-root-class-name7"
                ></MintCard>
                <MintCard
                  corp_name="星山　雄史"
                  image_src="/playground_assets/img_hoshiyama.png"
                  item_name="New Year`s card by Hoshiyama"
                  rootClassName="mint-card-root-class-name7"
                ></MintCard>
                <MintCard
                  corp_name="相原　悠平"
                  image_src="/playground_assets/img_aihara.png"
                  item_name="New Year`s card by Aihara"
                  rootClassName="mint-card-root-class-name7"
                ></MintCard>
              </div>
            </div>
          </div>
          <div className="home-help section-container">
            <div className="home-max-width3 max-content-container">
              <h2 className="home-text11">このプロジェクトについて</h2>
              <div className="home-container2">
                <ul className="home-ul list">
                  <li className="list-item">
                    <span>ひろしまDAOでは、次の方針で活動しております。</span>
                    <ul className="home-ul1 list">
                      <li className="list-item">
                        <span className="home-text13">
                          広島県内で「Web3・メタバース」の認知度を高める
                        </span>
                      </li>
                      <li className="list-item">
                        <span>
                          <span className="home-text15">
                            広島県の産品を「世界」に繋げていく
                          </span>
                          <br></br>
                        </span>
                      </li>
                      <li className="list-item">
                        <span className="home-text17">
                          次世代と共創し「新しい産業」を広島県から生み出していく
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="list-item">
                    <span>
                      <span>
                        この一環で12/22にNFT勉強会を実施し、その成果物として年賀状NFTを作成しました。
                      </span>
                      <br></br>
                    </span>
                  </li>
                  <li className="list-item">
                    <span>
                      ガス代不要で無料で発行いただけますので、自由にお取りください。
                    </span>
                  </li>
                  <li className="list-item">
                    <span>
                      年賀状NFTを受け取るには、Metamask等のWalletに接続する必要があります。
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <div className="home-footer section-container">
          <div className="max-content-container">
            <div className="home-top-part">
              <div className="home-collaborating-companies">
                <h3 className="home-text23">協賛企業一覧</h3>
                <div className="home-list">
                  <a
                    href="https://codefox.co.jp/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link02 collablink"
                  >
                    株式会社CodeFox
                  </a>
                  <a
                    href="https://jpyc.co.jp/"
                    target="_blank"
                    rel="noreferrer noopener collablink"
                    className="home-link02"
                  >
                    JPYC株式会社
                  </a>
                  <a
                    href="http://web-rampage.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link02 collablink"
                  >
                    株式会社RAMPAGE
                  </a>
                  <a
                    href="https://onogoro.co.jp/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link02 collablink"
                  >
                    株式会社オノゴロ
                  </a>
                  <a
                    href="https://otagroup.co.jp/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link03 collablink"
                  >
                    OTAGROUP株式会社
                  </a>
                </div>
              </div>
              <div className="home-subscribe-container">
                <h3 className="home-text24">Copyright</h3>
                <a
                  href="https://hiroshima-dao.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link09"
                >
                  <img
                    alt="image"
                    src="/playground_assets/logo_h1-1500h.png"
                    className="home-image1"
                  />
                </a>
              </div>
              <div className="home-subscribe-container1">
                <h3 className="home-text25">Powerd by</h3>
                <a
                  href="https://codefox.co.jp/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link10"
                >
                  <img
                    alt="image"
                    src="/playground_assets/logoinc-holizon-200h.png"
                    className="home-image2"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="home-separator"></div>
          <footer className="home-max-width5 max-content-container">
            <span className="home-text26">© Hiroshima DAO.</span>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 88px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image {
            width: 100%;
            height: auto;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            object-fit: cover;
          }
          .home-campaign {
            gap: var(--dl-space-space-oneandhalfunits);
            display: none;
            position: relative;
          }
          .home-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
          }
          .home-text {
            width: auto;
            text-align: center;
          }
          .home-message {
            display: flex;
            flex-direction: column;
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .home-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-text01 {
            width: auto;
            text-align: center;
          }
          .home-text02 {
            width: 70%;
            text-align: left;
          }
          .home-max-width1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text10 {
            text-align: center;
          }
          .home-max-width2 {
            display: grid;
            grid-gap: var(--dl-space-space-oneandhalfunits);
            max-width: 100%;
            grid-template-columns: repeat(auto-fit, 320px);
          }
          .home-help {
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .home-max-width3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text11 {
            text-align: center;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-ul {
            width: auto;
          }
          .home-ul1 {
            width: auto;
            margin-top: 0em;
            margin-bottom: 0em;
            list-style-type: circle;
          }
          .home-text13 {
            font-weight: 700;
          }
          .home-text15 {
            font-weight: 700;
          }
          .home-text17 {
            font-weight: 700;
          }
          .home-footer {
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-top-part {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-collaborating-companies {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text23 {
            color: var(--dl-color-scheme-brown);
            align-self: center;
            font-weight: 700;
          }
          .home-list {
            gap: var(--dl-space-space-unit);
            width: 640px;
            display: flex;
            flex-wrap: wrap;
            max-width: 100%;
            max-height: var(--dl-size-size-xlarge);
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-subscribe-container {
            flex: 0 0 auto;
            width: 35%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .home-text24 {
            color: var(--dl-color-scheme-brown);
            align-self: center;
            font-weight: 700;
          }
          .home-link09 {
            display: contents;
          }
          .home-image1 {
            width: auto;
            object-fit: cover;
            text-decoration: none;
          }
          .home-subscribe-container1 {
            flex: 0 0 auto;
            width: 35%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text25 {
            color: var(--dl-color-scheme-brown);
            align-self: center;
            font-weight: 700;
          }
          .home-link10 {
            display: contents;
          }
          .home-image2 {
            width: auto;
            object-fit: cover;
            text-decoration: none;
          }
          .home-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            background-color: #d9d9d9;
          }
          .home-max-width5 {
            flex-direction: row;
            justify-content: flex-end;
          }
          .home-text26 {
            align-self: center;
            font-style: normal;
            font-weight: 400;
          }
          @media (max-width: 1200px) {
            .home-max-width1 {
              position: relative;
            }
          }
          @media (max-width: 991px) {
            .home-max-width3 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .home-main {
              margin-top: 72px;
            }
            .home-campaign {
              gap: var(--dl-space-space-unit);
            }
            .home-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-subscribe-container {
              width: 100%;
            }
            .home-image1 {
              width: var(--dl-size-size-xlarge);
            }
            .home-subscribe-container1 {
              width: 100%;
            }
            .home-image2 {
              width: var(--dl-size-size-xlarge);
            }
            .home-separator {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-text02 {
              width: 100%;
            }
            .home-top-part {
              align-items: center;
              flex-direction: column;
            }
            .home-collaborating-companies {
              gap: var(--dl-space-space-unit);
            }
            .home-max-width5 {
              flex-direction: column;
            }
            .home-text26 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
