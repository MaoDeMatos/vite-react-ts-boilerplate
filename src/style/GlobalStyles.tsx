import { Global, css } from "@emotion/react";
import { Fragment } from "react";
import tw, { GlobalStyles as BaseStyles, theme } from "twin.macro";

const customStyles = css({
  "html, body, body > div#root, #root > div:first-of-type": {
    ...tw`h-full`,
  },
  body: {
    // for mobile devices
    // HEX: 80 = opacity 50%
    WebkitTapHighlightColor: theme`colors.primary.700` + "80",
    ...tw`antialiased`,
  },
  a: {
    ...tw`text-primary-500`,
  },
  code: {
    ...tw`px-2 py-1 bg-slate-600 rounded-lg text-slate-100`,
  },
  "::selection": {
    ...tw`bg-primary-700 text-base-100`,
  },
});

const GlobalStyles = () => (
  <Fragment>
    <BaseStyles />
    <Global styles={customStyles} />
  </Fragment>
);

export default GlobalStyles;
