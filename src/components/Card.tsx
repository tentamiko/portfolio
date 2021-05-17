import { css } from "@emotion/css";
import Link from "next/link";
import { VFC } from "react";

type Props = { pictureUrl: string; linkUrl: string; title: string };

export const Card: VFC<Props> = ({ pictureUrl, linkUrl, title }) => {
  return (
    <Link href={linkUrl}>
      <a
        className={css`
          text-decoration: none;
        `}
      >
        <article
          className={css`
            position: relative;
            width: 100%;
            height: 100%;
          `}
        >
          <img
            src={pictureUrl}
            alt=""
            className={css`
              z-index: -1;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;

              object-fit: cover;
              object-position: center;

              transition: 0.15s filter;

              a:focus &,
              a:hover & {
                filter: brightness(0.4);
              }
            `}
          />
          <h1
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
              opacity: 0;
              transition: 0.15s opacity;
              text-decoration: none;
              font-size: 2rem;
              color: #ffffff;

              a:focus &,
              a:hover & {
                opacity: 1;
              }
            `}
          >
            {title}
          </h1>
        </article>
      </a>
    </Link>
  );
};
