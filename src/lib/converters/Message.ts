import {
  collection,
  collectionGroup,
  doc,
  DocumentData,
  FirestoreDataConverter,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  SnapshotOptions,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { LanguagesSupported } from "@/store/store";

export interface User {
  id: string;
  email: string;
  name: string;
  image: string;
}

export interface Message {
  id?: string;
  input: string;
  timestamp: Date;
  user: User;
  translated?: {
    [K in LanguagesSupported]?: string;
  };
  // ... other fields
}

const messageConverter: FirestoreDataConverter<Message> = {
  toFirestore: function (message: Message): DocumentData {
    return {
      timestamp: message.timestamp,
      input: message.input,
      user: message.user,
    };
  },
  fromFirestore: function (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Message {
    const data = snapshot.data(options);

    return {
      id: snapshot.id,
      input: data.input,
      timestamp: data.timestamp?.toDate().toISOString(),
      translated: data.translated,
      user: data.user,
    };
  },
};

export const messagesRef = (chatId: string) =>
  collection(db, "chats", chatId, "messages").withConverter(messageConverter);

export const limitedMessagesRef = (chatId: string) =>
  query(messagesRef(chatId), limit(20));

export const sortedMessagesRef = (chatId: string) =>
  query(messagesRef(chatId), orderBy("timestamp", "asc"));

export const limitedSortedMessagesRef = (chatId: string) =>
  query(query(messagesRef(chatId), limit(1), orderBy("timestamp", "desc")));
