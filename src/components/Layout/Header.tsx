import { css } from "@emotion/css";
import { VFC } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faGamepad,
  faImages,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  hero?: JSX.Element;
};

export const Header: VFC<Props> = ({ hero }) => {
  return (
    <header>
      <nav
        className={css`
          display: flex;
          padding: 1rem;
          align-items: center;
        `}
      >
        <Link href="/">
          <a>
            <img
              className={css`
                height: 3rem;
                width: auto;
              `}
              src="./icon.png"
              alt="TentamikoIcon"
              width="709"
              height="709"
            />
          </a>
        </Link>
        <div
          className={css`
            flex-grow: 1;
          `}
        />
        <ul
          className={css`
            display: flex;
            list-style-type: none;
            font-size: min(1.5rem, 10vw);
            font-weight: 300;
          `}
        >
          {/* 関数としてfor文みたいなことをしている */}
          {[
            { url: "/game", text: "Game", icon: faGamepad },
            { url: "/illustration", text: "Illustration", icon: faImages },
            { url: "/about", text: "About", icon: faUser },
          ].map(({ url, text, icon }) => (
            <li
              className={css`
                min-height: 100%;
              `}
            >
              <Link href={url}>
                <a
                  className={css`
                    padding: 0 0.5em;
                    color: currentColor;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    justify-content: center;
                  `}
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className={css`
                      padding: 0.3em;
                      box-sizing: content-box;
                    `}
                  />

                  {text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {hero}
    </header>
  );
};
