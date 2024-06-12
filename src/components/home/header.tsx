import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

export default async function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex justify-between items-center mx-auto w-full max-w-screen-xl py-4 px-4 lg:px-20">
        <h1 className="text-3xl font-bold">
          <Link
            href="/"
            className="flex items-center gap-2 text-black dark:text-white transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-200"
          >
            <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x font-extrabold">
              S3oosh
            </p>
          </Link>
        </h1>
        <ModeToggle />
      </div>
    </header>
  );
}
