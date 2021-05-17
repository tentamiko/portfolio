import { css } from "@emotion/css";
import Link from "next/link";
import { FC } from "react";

export const CardList: FC = ({ children }) => {
  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: repeat(auto-fit, 16rem);
        grid-auto-rows: 16rem;
        justify-content: center;
        gap: 1rem;
      `}
    >
      {children}
    </div>
  );
};
