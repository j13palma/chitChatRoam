"use client";

import useAdminId from "@/hooks/useAdminId";
import { ChatMembers, chatMembersRef } from "@/lib/converters/ChatMemebers";
import { useCollectionData } from "react-firebase-hooks/firestore";
import LoadingSpinner from "./LoadingSpinner";
import { Badge } from "../ui/badge";
import UserAvatar from "./UserAvatar";

interface ChatMembersBadgeProps {
  chatId: string;
}
export default function ChatMembersBadge({ chatId }: ChatMembersBadgeProps) {
  const [members, loading, error] = useCollectionData<ChatMembers>(
    chatMembersRef(chatId),
  );

  const adminId = useAdminId({ chatId });

  if (loading && !members) {
    return <LoadingSpinner />;
  }

  members?.sort((a, b) => {
    // If a's userId matches adminId and b's doesn't, a comes first
    if (a.userId === adminId && b.userId !== adminId) {
      return -1;
    }
    // If b's userId matches adminId and a's doesn't, b comes first
    if (b.userId === adminId && a.userId !== adminId) {
      return 1;
    }
    // If neither or both match adminId, their order remains unchanged
    return 0;
  });
  return (
    !loading && (
      <div className="m-5 rounded-xl border p-2">
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 md:justify-start">
          {members?.map((member) => (
            <Badge variant="secondary" key={member.email}>
              <div className="flex h-14 space-x-2 p-5 pl-2 pr-5">
                <div className="flex items-center space-x-2">
                  <UserAvatar name={member.email} image={member.image} />
                </div>
                <div>
                  <p>{member.email}</p>
                  {member.userId === adminId && (
                    <p className="animate-pulse text-indigo-400">Admin</p>
                  )}
                </div>
              </div>
            </Badge>
          ))}
        </div>
      </div>
    )
  );
}
