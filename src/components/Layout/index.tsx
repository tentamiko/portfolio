import { css } from "@emotion/css";
import { FC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = { hero?: JSX.Element };

export const Layout: FC<Props> = ({ children, hero }) => {
  return (
    <div
      className={css`
        display: flex;
        height: 100%;
        flex-direction: column;
      `}
    >
      <Header hero={hero} />
      <main
        className={css`
          flex-grow: 1;
        `}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};
