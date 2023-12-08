import { ScrollArea, Separator } from "@repo/ui";
import { GoBackButton } from "./components/go-back-button";
import { ListItem } from "./components/list-item";

function List() {
  return (
    <div className="h-full">
      <div className="flex items-center gap-4">
        <GoBackButton />
        <h1 className="text-xl font-semibold">List</h1>
      </div>
      <Separator className="mt-4" />
      <div className="flex flex-col items-center py-4 gap-6 h-[calc(100%-40px)] ">
        <ScrollArea className="h-full w-full">
          <ul className="w-full divide-y divide-dashed">
            <ListItem
              label="Full Name"
              imageSrc="https://github.com/shadcn.png"
            />
            <ListItem
              label="Full Name"
              imageSrc="https://github.com/shadcn.png"
            />
            <ListItem
              label="Full Name"
              imageSrc="https://github.com/shadcn.png"
            />
            <ListItem
              label="Full Name"
              imageSrc="https://github.com/shadcn.png"
            />
            <ListItem
              label="Full Name"
              imageSrc="https://github.com/shadcn.png"
            />
            <ListItem
              label="Full Name"
              imageSrc="https://github.com/shadcn.png"
            />
            <ListItem
              label="Full Name"
              imageSrc="https://github.com/shadcn.png"
            />
            <ListItem
              label="Full Name"
              imageSrc="https://github.com/shadcn.png"
            />
            <ListItem
              label="Full Name"
              imageSrc="https://github.com/shadcn.png"
            />{" "}
            <ListItem
              label="Full Name"
              imageSrc="https://github.com/shadcn.png"
            />{" "}
            <ListItem
              label="Full Name"
              imageSrc="https://github.com/shadcn.png"
            />{" "}
            <ListItem
              label="Full Name"
              imageSrc="https://github.com/shadcn.png"
            />
            <ListItem
              label="Last Name"
              imageSrc="https://github.com/shadcn.png"
            />
          </ul>
        </ScrollArea>
      </div>
    </div>
  );
}

export default List;
