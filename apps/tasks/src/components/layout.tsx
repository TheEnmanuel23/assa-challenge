import { ScrollArea, Separator } from "@repo/ui";
import { GoBackButton } from "./go-back-button";
import { ReactNode } from "react";

export function Layout({
  children,
  action,
  title,
}: {
  children: ReactNode;
  action?: ReactNode;
  title: string;
}) {
  return (
    <div className="h-full">
      <div className="flex items-center gap-4">
        <GoBackButton />
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <Separator className="mt-4" />
      <div className="flex flex-col items-center py-4 gap-6 h-[calc(100%-40px)] ">
        {action}
        <ScrollArea className="h-full w-full">{children}</ScrollArea>
      </div>
    </div>
  );
}
