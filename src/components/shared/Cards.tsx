import { PlusIcon } from "@heroicons/react/outline";
import { FC } from "react";
import tw from "twin.macro";

import { HasChildren, isClickable } from "../../types/GeneralTypes";

// Normal cards
export type BaseCardProps = {
  hasShadow?: boolean;
  hasPadding?: boolean;
} & HasChildren &
  isClickable;

export const Card: FC<BaseCardProps> = ({
  hasShadow = true,
  hasPadding = true,
  onClick,
  ...props
}) => {
  return (
    <article
      tw="transition rounded-2xl min-h-[10rem] min-w-full sm:(min-w-[16rem])"
      onClick={onClick}
      css={[
        hasShadow && tw`shadow-md bg-base-50`,
        hasPadding && tw`px-4 py-2 sm:(px-6 py-4)`,
      ]}
      {...props}
    />
  );
};

// Empty state cards
export const EmptyStateCard: FC<BaseCardProps> = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <Card
      hasShadow={false}
      onClick={onClick}
      tw="transition flex border-4 border-dashed border-base-200 text-base-400 all-child:(m-auto)"
      css={onClick && tw`cursor-pointer hover:(text-base-700 border-base-400)`}
      {...props}
    >
      {children ?? <p>{"No content"}</p>}
    </Card>
  );
};

export const AddNewCard: FC<BaseCardProps> = ({}) => {
  return (
    <EmptyStateCard
      onClick={() => console.log('You clicked a "Add New" card !')}
    >
      <p tw="flex">
        <PlusIcon tw="h-5 w-5 mr-1" />
        Add a card
      </p>
    </EmptyStateCard>
  );
};

// Loading cards
export const PulsingCard: FC<HasChildren> = (props: {}) => {
  return (
    <Card hasShadow hasPadding tw="flex flex-col" {...props}>
      <div tw="flex flex-col flex-1 gap-4 animate-pulse">
        <span tw="h-7 w-9/12 rounded bg-base-400" />

        <p tw="flex flex-col gap-1 justify-between w-full">
          <span tw="h-5 w-full rounded bg-base-400" />
          <span tw="h-5 w-10/12 rounded bg-base-400" />
          <span tw="h-5 w-11/12 rounded bg-base-400" />
        </p>
      </div>
    </Card>
  );
};
