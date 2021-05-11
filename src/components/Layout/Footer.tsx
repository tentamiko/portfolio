import { css } from "@emotion/css";
import { VFC } from "react";

export const Footer: VFC = () => {
  const someFlag = true;

  if (someFlag) {
    return <footer>うんこ！</footer>;
  }

  return <footer>うんち！</footer>;
};
