import { css } from "@emotion/css";
import { NextPage } from "next";
import { Layout } from "../components/Layout/";
//~/index.tsxはこのように省略できる

//IndexPageというNextPage(Reactコンポーネントの拡張版)を宣言、初期化している。
const IndexPage: NextPage = () => {
  return (
    <Layout
      hero={
        <div
          className={css`
            height: 30rem;
            font-weight: 900;
            font-style: italic;
            /* 15vwを基準に、しかし5rem以下 */
            font-size: min(5rem, 15vw);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            background-image: url("/hero1.png");
            background-size: cover;
          `}
        >
          TENTAMIKO
        </div>
      }
    ></Layout>
  );
};

//IndexPageをNext.jsに渡して、実際に表示させてる
export default IndexPage;
