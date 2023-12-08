import { Skeleton } from "@repo/ui";
import { Layout } from "../../shared/layout";

const items = Array.from(Array(10).keys());

export function LoadingContacts() {
  return (
    <Layout title="List">
      <ul
        className="w-full divide-y divide-dashed"
        data-testid="contacts-loading"
      >
        {items.map((item) => (
          <div
            key={`skeleton-${item}`}
            className="flex items-center space-x-4 px-2 py-4 "
          >
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
        ))}
      </ul>
    </Layout>
  );
}
