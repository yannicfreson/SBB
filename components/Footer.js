export default function Footer() {
  return (
    <footer className="w-full text-center font-black text-white">
      <a
        href="https://www.yannicfreson.be/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="mr-1">Made with</span>
        <span className="text-sky-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mb-1 inline h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="ml-1">by Yannic Fréson</span>
      </a>
    </footer>
  );
}
