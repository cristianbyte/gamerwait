import AppLayout from "../components/layout/AppLayout";
import Sidebar from "../components/layout/Sidebar";

export default function Home() {
  return (
    <AppLayout>
      <Sidebar />
      <main className="bg-yucatan flex-1"></main>
    </AppLayout>
  );
}
