import Image from "next/image";
import Link from "next/link";
import DemoGif from "@/images/assets/DemoGif.gif";

export default function Home() {
  return (
    <main>
      <div className="relative isolate pt-14">
        <div
          className="absolute inset-x-0 top-48 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden
        >
          <div
            className="relative m-auto aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-45 bg-gradient-to-tr from-jam-400 to-blue-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(50% 0%, 95% 15%, 93% 39%, 100% 70%, 78% 78%, 88% 98%, 16% 95%, 0 77%, 12% 45%, 7% 7%)",
            }}
          />
        </div>

        <div className="py-12 sm:py-20 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Chat with Anyone, anywhere!
              </h1>
              <p className="mt-6 text-lg leading-8 text-midnight-600 dark:text-midnight-300">
                You speak your language, they speak their language.{" "}
                <span className="text-blue-600 dark:text-blue-500">
                  Let AI handle the translation.
                </span>
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/chitchat/chat"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get started
              </Link>
              <Link
                href="/chitchat/pricing"
                className="text-sm font-semibold leading-6 text-midnight-900 dark:text-midnight-300"
              >
                View Pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mt-16 flex justify-center sm:mt-24">
            <div className="mx-auto max-w-7xl rounded-xl bg-midnight-900/5 p-1 ring-1 ring-midnight-900/10 dark:bg-midnight-900/10 lg:mx-4 lg:rounded-2xl lg:p-4">
              <Image
                unoptimized
                src={DemoGif}
                alt="App screenshot"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-midnight-900/10"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-jam-400 to-blue-400  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0, 100% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 52.9% 60.9%, 48.6% 54.2%, 27.6% 76.7%, 0 78.6%, 24.5% 68.2%, 29.6% 58.2%, 41.2% 64.9%, 71.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </main>
  );
}
