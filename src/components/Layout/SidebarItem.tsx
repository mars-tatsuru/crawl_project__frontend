import Link from "next/link";

type SideBarProps = {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
};

export default function SideBar({ href, icon, children }: SideBarProps) {
  const Icon = icon;
  return (
    <li className="sidebar-item">
      <Link href={href} legacyBehavior>
        <a className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white">
          {icon && <Icon className="h-6 w-6" />}
          <span className="ml-3">{children}</span>
        </a>
      </Link>
    </li>
  );
}
