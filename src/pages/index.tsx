import { css } from "@emotion/css";
import { NextPage } from "next";
import { Header } from "../components/Header";

//IndexPageというNextPage(Reactコンポーネントの拡張版)を宣言、初期化している。
const IndexPage: NextPage = () => {
  return <Header />;
};

//IndexPageをNext.jsに渡して、実際に表示させてる
export default IndexPage;
