import { css } from "@emotion/css";
import Link from "next/link";
import { VFC } from "react";

type Props = { pictureUrl: string; linkUrl: string; title: string };

export const Card: VFC<Props> = ({ pictureUrl, linkUrl, title }) => {
  return (
    <Link href={linkUrl}>
      <a>
        <article
          className={css`
            background-image: url(${pictureUrl});
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 100%;
          `}
        >
          <h1>{title}</h1>
        </article>
      </a>
    </Link>
  );
};
