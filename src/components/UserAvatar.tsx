import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

type UserAvatarProps = {
  name?: string | null;
  image?: string | null;
  className?: string;
};

export default function UserAvatar({
  name = "User Name",
  image,
  className,
}: UserAvatarProps) {
  return (
    <Avatar className={cn("bg-white text-midnight-950", className)}>
      {image && (
        <Image
          src={image}
          alt={name || ""}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      <AvatarFallback className="text-lg dark:bg-white">
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
}
