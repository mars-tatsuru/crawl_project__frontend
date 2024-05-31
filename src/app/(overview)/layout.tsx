import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-row">
      <Sidebar />
      <div className="flex h-screen w-[calc(100%-16rem)] flex-col overflow-y-auto">
        <Header />
        <div className="h-[calc(100%_-_4rem)] bg-gray-100 p-4 dark:bg-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
}
