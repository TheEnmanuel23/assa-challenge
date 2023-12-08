import { ListItem } from "./list-item";
import { Layout } from "../../shared/layout";
import { fetchContacts } from "../../features/list-slice";
import { useAppDispatch, useContacts } from "../../lib/hooks";
import { LoadingContacts } from "./loading";

function List() {
  const [contacts, loading] = useContacts();
  const dispatch = useAppDispatch();

  dispatch(fetchContacts());

  if (loading) {
    return <LoadingContacts />;
  }

  return (
    <Layout title="List">
      <ul className="w-full divide-y divide-dashed">
        {contacts.map((contact) => (
          <ListItem
            key={contact.id}
            label={contact.name}
            imageSrc={contact.avatar}
          />
        ))}
      </ul>
    </Layout>
  );
}

export default List;
