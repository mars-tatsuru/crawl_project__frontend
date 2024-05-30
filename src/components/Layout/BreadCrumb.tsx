import Link from "next/link";
import clsx from "clsx";

type Props = {
  path: string;
};

export default function BreadCrumb({ path }: Props) {
  const pathArr = path.split("/").slice(1);

  return (
    <ul className="w-full flex flex-row items-center">
      {pathArr.map((item, index) => {
        const href = `/${pathArr.slice(0, index + 1).join("/")}`;

        return (
          <li key={index} className="text-sm flex items-center">
            <Link
              href={href}
              className={clsx({
                "text-blue-600": index === pathArr.length - 1,
                "text-gray-600": index < pathArr.length - 1,
              })}
            >
              {item}
            </Link>
            {index < pathArr.length - 1 && (
              <span className="mx-1 text-gray-600">&gt;</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
