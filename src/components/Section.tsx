import { css } from "@emotion/css";
import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faCoffee,
  faGamepad,
  faImages,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

type Props = { title: string; url: string };

export const Section: FC<Props> = ({ title, children, url }) => {
  return (
    <section>
      <h1
        className={css`
          display: flex;
          height: 100%;
          flex-direction: column;
          font-weight: 300;
          font-size: min(2rem, 15vw);
          align-items: center;
          color: #fff;
          padding: 2rem;
        `}
      >
        {title}
        <div
          className={css`
            height: 1px;
            width: 20rem;
            background-color: #ffffff;
          `}
        />
      </h1>
      {children}
      <div
        className={css`
          display: flex;
          height: 100%;
          flex-direction: column;
          align-items: center;
          padding: 2rem 0;
        `}
      >
        <a
          href={url}
          className={css`
            border: solid 2px;
            border-radius: 2px;
            color: currentColor;
            padding: 0.5rem 3rem;
            font-size: 1.5rem;
            font-weight: 300;
            text-decoration: none;
          `}
        >
          MORE
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className={css`
              padding: 0 0.3em;
              box-sizing: content-box;
              transition: 0.2s transform;
              a:hover & {
                transform: translateX(50%);
              }
            `}
          />
        </a>
      </div>
    </section>
  );
};
