import Link from "next/link";

import clsx from "clsx";

type SideBarProps = {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
  pathname: string;
};

export default function SideBar({
  href,
  icon,
  children,
  pathname,
}: SideBarProps) {
  const Icon = icon;

  return (
    <li className="sidebar-item">
      <Link href={href} legacyBehavior>
        <a
          className={clsx(
            "flex items-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700",
            {
              "text-cyan-700 dark:text-cyan-700": pathname.includes(href),
              "text-gray-600 dark:text-gray-400": pathname !== href,
            },
          )}
        >
          {icon && <Icon className="h-6 w-6" />}
          <span className="ml-3">{children}</span>
        </a>
      </Link>
    </li>
  );
}
