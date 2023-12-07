import type { Meta } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;

export const Default = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@fakerimage" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
