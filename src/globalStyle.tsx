import { css, Global } from "@emotion/react";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        :root {
          --color-main: #89a06b;
          --color-side: rgba(0, 66, 47, 43);
          --color-background: #f7ffef;
          --color-gray: #aaa;
          --color-black: #2c2c2c;
          --font-size-large: 24px;
          --font-size-base: 15px;
          --font-size-small: 12px;
          @media (max-width: 768px) {
            --font-size-large: 21px;
            --font-size-base: 12px;
            --font-size-small: 9px;
          }
        }
        p,
        li {
          line-height: 120%;
        }
        button {
          border: none;
          background-color: transparent;
          padding: 0;
          cursor: pointer;
        }
        a {
          text-decoration: none;
          color: #2c2c2c;
        }
        body {
          color: var(--color-black);
        }
      `}
    />
  );
}
