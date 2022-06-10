import { css as cssImport } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";
import styledImport from "@emotion/styled";
import React from "react";
import "twin.macro";

declare module "twin.macro" {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module "react" {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSInterpolation;
    tw?: string;
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSInterpolation;
    tw?: string;
  }
  // Intrinsic attributes
  interface Attributes extends React.Attributes {
    css?: CSSInterpolation;
    tw?: string;
  }
}