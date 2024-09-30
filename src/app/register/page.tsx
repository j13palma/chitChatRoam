import PricingCards from "@chitChat/PricingCards";
import { auth } from "@/lib/nextAuth";

export default async function Register() {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to view this page");

  return (
    <div className="isolate overflow-hidden dark:bg-midnight-950">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-12 text-center sm:pt-2 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mt-2 text-4xl font-bold tracking-tight dark:text-white sm:text-5xl">
            Lets handle your Membership {session?.user?.name?.split(" ")[0]}!
          </p>
          <div className="relative">
            <svg
              viewBox="0 0 1208 1024"
              className="absolute left-1/2 top-5 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:top-12 md:top-10 lg:-top-28"
            >
              <ellipse
                cx={604}
                cy={512}
                fill="url(#radial-gradient-pricing)"
                rx={604}
                ry={512}
              />
              <defs>
                <radialGradient id="radial-gradient-pricing">
                  <stop stopColor="#34adfc" />
                  <stop offset={1} stopColor="#ff5cc6" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="flow-root pb-24 sm:pb-32">
        <div className="-mt-80">
          <PricingCards redirect={false} />
        </div>
      </div>
    </div>
  );
}
