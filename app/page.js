import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex items-center gap-6">
          <Image
            className="dark:invert"
            src="/nextjs-logo.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <span className="text-6xl font-bold">+</span>

          <Image
            className=""
            src="/keycloak-logo.svg"
            alt="Keycloak logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/dashboard"
          >
            Go to dashboard
          </Link>

          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/uaibo/nextjs-keycloak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the readme
          </Link>
        </div>
      </main>
    </div>
  );
}
