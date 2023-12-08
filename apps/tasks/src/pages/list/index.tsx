import { ListItem } from "./list-item";
import { Layout } from "../../shared/layout";

function List() {
  return (
    <Layout title="List">
      <ul className="w-full divide-y divide-dashed">
        <ListItem label="Full Name" imageSrc="https://github.com/shadcn.png" />
        <ListItem label="Full Name" imageSrc="https://github.com/shadcn.png" />
        <ListItem label="Full Name" imageSrc="https://github.com/shadcn.png" />
        <ListItem label="Full Name" imageSrc="https://github.com/shadcn.png" />
        <ListItem label="Full Name" imageSrc="https://github.com/shadcn.png" />
        <ListItem label="Full Name" imageSrc="https://github.com/shadcn.png" />
        <ListItem label="Full Name" imageSrc="https://github.com/shadcn.png" />
        <ListItem label="Full Name" imageSrc="https://github.com/shadcn.png" />
        <ListItem
          label="Full Name"
          imageSrc="https://github.com/shadcn.png"
        />{" "}
        <ListItem label="Full Name" imageSrc="https://github.com/shadcn.png" />{" "}
        <ListItem label="Full Name" imageSrc="https://github.com/shadcn.png" />{" "}
        <ListItem label="Full Name" imageSrc="https://github.com/shadcn.png" />
        <ListItem label="Last Name" imageSrc="https://github.com/shadcn.png" />
      </ul>
    </Layout>
  );
}

export default List;
