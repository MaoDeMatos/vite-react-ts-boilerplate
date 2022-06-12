import { PlusIcon } from "@heroicons/react/outline";
import { FC } from "react";
import "twin.macro";
import tw, { css } from "twin.macro";

import { HasChildren, isClickable } from "../../types/GeneralTypes";

export type BaseButtonProps = {
  type?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
} & HasChildren &
  isClickable;

export const BaseButton: FC<BaseButtonProps> = ({
  type = "secondary",
  size = "md",
  onClick,
  ...props
}) => {
  const typeStylesButton =
    type === "primary"
      ? tw`bg-primary-600 border-transparent text-primary-100 hover:(bg-primary-700 shadow-lg)`
      : type === "secondary"
      ? tw`bg-transparent border-primary-500 hover:(bg-primary-500 text-primary-100 shadow-lg)`
      : tw`bg-transparent border-transparent shadow-none underline hover:(text-primary-400)`;
  const sizeStylesButton =
    size === "sm"
      ? tw`px-2 py-1 text-base rounded-md`
      : size === "md"
      ? tw`px-4 py-2 text-lg rounded-lg`
      : tw`px-6 py-4 text-2xl`;

  const sizeStylesIcon =
    size === "sm" ? tw`h-4 w-4` : size === "md" ? tw`h-6 w-6` : tw`h-8 w-8`;

  return (
    <button
      tw="transition border-2 rounded-xl shadow flex items-center justify-center"
      css={[typeStylesButton, sizeStylesButton]}
      onClick={onClick}
      {...props}
    >
      <PlusIcon tw="pb-1 mr-1" css={sizeStylesIcon} />
      Add a new card
    </button>
  );
};
