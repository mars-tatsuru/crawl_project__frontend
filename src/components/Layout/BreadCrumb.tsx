import Link from "next/link";
import clsx from "clsx";

type Props = {
  path: string;
};

export default function BreadCrumb({ path }: Props) {
  const pathArr = path.split("/").slice(1);

  return (
    <ul className="flex w-full flex-row items-center">
      {pathArr.map((item, index) => {
        const href = `/${pathArr.slice(0, index + 1).join("/")}`;

        return (
          <li key={index} className="flex items-center text-sm">
            <Link
              href={href}
              className={clsx({
                "text-blue-600 dark:text-blue-400":
                  index === pathArr.length - 1,
                "text-gray-600 dark:text-white": index < pathArr.length - 1,
              })}
            >
              {item}
            </Link>
            {index < pathArr.length - 1 && (
              <span
                className={clsx({
                  "mx-1": index < pathArr.length - 1,
                  "text-gray-600 dark:text-white": index < pathArr.length - 1,
                })}
              >
                &gt;
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
