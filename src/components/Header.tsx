import { css } from "@emotion/css";
import { VFC } from "react";

export const Header: VFC = () => {
  return (
    <header>
      <nav>
        <ul
          className={css`
            display: flex;
            list-style-type: none;
            padding: 0.5rem;
          `}
        >
          {/* 関数としてfor文みたいなことをしている */}
          {[
            { url: "#", text: "TOP" },
            { url: "#game", text: "GAME" },
          ].map(({ url, text }) => (
            <li>
              <a
                href={url}
                className={css`
                  padding: 0.5rem;
                  color: currentColor;
                `}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
