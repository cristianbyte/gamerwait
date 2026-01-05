import AppLayout from "../components/layout/AppLayout";
import Sidebar from "../components/layout/Sidebar";

export default function Home() {
  return (
    <AppLayout>
      <Sidebar />
      <main className="flex-1 p-6">{/* MainContent va aquí */}</main>
    </AppLayout>
  );
}
