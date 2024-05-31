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
            "flex items-center rounded-lg p-2 text-base font-normal  hover:bg-gray-100 dark:hover:bg-gray-700",
            {
              "text-blue-600 dark:text-blue-400":
                pathname === href || pathname.includes(href),
              "text-gray-900 dark:text-white": pathname !== href,
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
