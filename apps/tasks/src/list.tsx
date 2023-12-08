import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  ScrollArea,
  Separator,
} from "@repo/ui";
import { GoBackButton } from "./components/go-back-button";

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
            <li className="px-2 py-4 text-sm flex items-center gap-6">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@fakerimage"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Full Name
            </li>
            <li className="px-2 py-4 text-sm flex items-center gap-6">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@fakerimage"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Full Name
            </li>
            <li className="px-2 py-4 text-sm flex items-center gap-6">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@fakerimage"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Full Name
            </li>
            <li className="px-2 py-4 text-sm flex items-center gap-6">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@fakerimage"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Full Name
            </li>
            <li className="px-2 py-4 text-sm flex items-center gap-6">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@fakerimage"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Full Name
            </li>
            <li className="px-2 py-4 text-sm flex items-center gap-6">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@fakerimage"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Full Name
            </li>
            <li className="px-2 py-4 text-sm flex items-center gap-6">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@fakerimage"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Full Name
            </li>
            <li className="px-2 py-4 text-sm flex items-center gap-6">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@fakerimage"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Full Name
            </li>
            <li className="px-2 py-4 text-sm flex items-center gap-6">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@fakerimage"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Full Name
            </li>
            <li className="px-2 py-4 text-sm flex items-center gap-6">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@fakerimage"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Full Name
            </li>
            <li className="px-2 py-4 text-sm flex items-center gap-6">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@fakerimage"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Last Name
            </li>
          </ul>
        </ScrollArea>
      </div>
    </div>
  );
}

export default List;
