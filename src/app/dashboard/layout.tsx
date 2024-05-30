import SideNav from "@/components/Layout/SideNav";
import Header from "@/components/Layout/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row w-full">
      <div className="w-72">
        <SideNav />
      </div>
      <div className="flex flex-col w-full">
        <div className="">
          <Header />
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
}
