import { Avatar, AvatarImage } from "@repo/ui";

export function ListItem({
  label,
  imageSrc,
}: {
  label: string;
  imageSrc: string;
}) {
  return (
    <li className="px-2 py-4 text-sm flex items-center gap-6">
      <Avatar>
        <AvatarImage src={imageSrc} alt={label} />
      </Avatar>
      {label}
    </li>
  );
}
