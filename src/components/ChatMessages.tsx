"use client";
import { Message, sortedMessagesRef } from "@/lib/converters/Message";
import { useLanguageStore } from "@/store/store";
import { MessageCircleIcon } from "lucide-react";
import { Session } from "next-auth";
import { createRef, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import LoadingSpinner from "./LoadingSpinner";
import UserAvatar from "./UserAvatar";
import { cn } from "@/lib/utils";

interface ChatMessagesProps {
  chatId: string;
  initialMessages: Message[];
  session: Session | null;
}
export default function ChatMessages({
  chatId,
  initialMessages,
  session,
}: ChatMessagesProps) {
  const language = useLanguageStore((state) => state.language);
  const messagesEndRef = createRef<HTMLDivElement>();

  const [messages, loading, error] = useCollectionData<Message>(
    sortedMessagesRef(chatId),
    {
      initialValue: initialMessages,
    },
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, messagesEndRef]);
  return (
    <div className="p-5">
      {!loading && messages?.length === 0 && (
        <div className="flex flex-col items-center justify-center space-y-2 rounded-xl bg-indigo-400 p-20 text-center font-extralight text-white">
          <MessageCircleIcon className="h-10 w-10" />
          <h2>
            <span className="font-bold">Invite a friend</span> &{" "}
            <span className="font-bold">
              Send your first message in ANY language
            </span>{" "}
            below to get started!
          </h2>
          <p>The AI will auto-detect & translate it all for you</p>
        </div>
      )}

      {messages?.map((message) => {
        const isSender = message.user.id === session?.user.id;

        return (
          <div key={message.id} className="my-2 flex items-end">
            <div
              className={cn(
                "relative mx-2 line-clamp-1 flex w-fit flex-col space-y-2 rounded-lg p-4",
                isSender
                  ? "ml-auto rounded-br-none bg-violet-600 text-white"
                  : "rounded-bl-none bg-gray-100 dark:bg-slate-700 dark:text-gray-100",
              )}
            >
              <p
                className={cn(
                  "line-clamp-1 text-xs font-extralight italic",
                  isSender ? "text-right" : "text-left",
                )}
              >
                {message.user.name.split(" ")[0]}
              </p>

              <p className="flex space-x-2">
                <span>{message.translated?.[language] || message.input}</span>
                {/* {!message.translated && <LoadingSpinner />} */}
              </p>
            </div>

            <UserAvatar
              name={message.user.name}
              image={message.user.image}
              className={cn(!isSender && "order-1")}
            />
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}
