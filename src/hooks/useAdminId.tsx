"use client";

import { chatMemberAdminRef } from "@/lib/converters/ChatMemebers";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

interface useAdminIdProps {
  chatId: string;
}
export default function useAdminId({ chatId }: useAdminIdProps) {
  const [adminId, setAdminId] = useState<string>("");

  useEffect(() => {
    const fetchAdminStatus = async () => {
      const adminId = (await getDocs(chatMemberAdminRef(chatId))).docs.map(
        (doc) => doc.id,
      )[0];

      setAdminId(adminId);
    };

    fetchAdminStatus();
  }, [chatId]);

  return adminId;
}
