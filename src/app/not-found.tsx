export default function NotFound() {
  return (
    <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <h1 className="text-9xl font-bold text-slate-200 dark:text-slate-700">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mt-4">
          This page could not be found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 transition-colors"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  )
}