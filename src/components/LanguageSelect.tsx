"use client";

import {
  LanguagesSupported,
  LanguagesSupportedMap,
  useLanguageStore,
  useSubscriptionStore,
} from "@/store/store";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select";
import LoadingSpinner from "./LoadingSpinner";
import Link from "next/link";

export default function LanguageSelect() {
  const [language, setLanguage, getLanguages, getNotSupportedLanguages] =
    useLanguageStore((state) => [
      state.language,
      state.setLanguage,
      state.getLanguages,
      state.getNotSupportedLanguages,
    ]);

  const subscription = useSubscriptionStore((state) => state.subscription);
  const isPro = subscription?.status === "active";

  const pathName = usePathname();
  const isChatPage = pathName.includes("/chat");

  return (
    isChatPage && (
      <Select onValueChange={(value: LanguagesSupported) => setLanguage(value)}>
        <SelectTrigger className="w-[158px] text-black dark:text-white">
          <SelectValue
            placeholder={LanguagesSupportedMap[language]}
            className=""
          />
        </SelectTrigger>
        <SelectContent>
          {subscription === undefined ? (
            <LoadingSpinner />
          ) : (
            <>
              {getLanguages(isPro).map((language) => (
                <SelectItem key={language} value={language}>
                  {LanguagesSupportedMap[language]}
                </SelectItem>
              ))}
              {getNotSupportedLanguages(isPro).map((language) => (
                <Link href="/register" key={language} prefetch={false}>
                  <SelectItem
                    key={language}
                    value={language}
                    disabled
                    className="my-1 bg-gray-300/50 py-2 text-gray-500 dark:text-white"
                  >
                    {LanguagesSupportedMap[language]} (PRO)
                  </SelectItem>
                </Link>
              ))}
            </>
          )}
        </SelectContent>
      </Select>
    )
  );
}
