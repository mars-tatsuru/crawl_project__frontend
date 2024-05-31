import { Button, Card } from "flowbite-react";
import clsx from "clsx";

export default function CommonCard() {
  return (
    <Card className="max-w-sm">
      <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        SITE URL
        <br />
        <span
          className={clsx(
            "text-lg font-normal",
            "text-blue-700 dark:text-blue-400",
          )}
        >
          https://www.example.com
        </span>
      </h2>
      <p className="text-sm font-normal leading-loose text-gray-700 dark:text-gray-400">
        <span>crawl start date: 2021-10-10 10:00:00</span> <br />
        <span>crawl end date: 2021-10-10 10:01:00</span> <br />
        <span>crawl pages: 100</span>
      </p>
      <Button>
        View Site
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
  );
}
