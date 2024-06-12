export default function IntroScreen() {
  return (
    <header className="flex flex-col items-center gap-8 py-12 px-4 sm:px-0">
      <h1 className="font-display text-3xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight text-center">
        Effortless File Uploads to Amazon S3
      </h1>
      <p className="text-5xl sm:text-8xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x font-extrabold">
        S3oosh
      </p>
      <h2 className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl text-center max-w-2xl">
        S3oosh allows you to easily upload multiple files to S3 Buckets using a drag-and-drop interface. Supports various file types, with options to set maximum file count, size, and accepted types.
      </h2>
      <div className="flex justify-center space-x-4">
      </div>
    </header>
  );
}
