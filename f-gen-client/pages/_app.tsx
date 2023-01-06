import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { Roboto } from '@next/font/google';

import type { AppProps } from 'next/app';

const roboto = Roboto({
  weight: '400',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}

          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }

          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}
