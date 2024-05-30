import SideNav from "@/components/Layout/SideNav";
import Header from "@/components/Layout/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row w-full">
      <div className="w-64">
        <SideNav />
      </div>
      <div className="flex flex-col w-[calc(100%_-_16rem)]">
        <Header />
        <div className="h-[calc(100%_-_4rem)] p-4">{children}</div>
      </div>
    </div>
  );
}
