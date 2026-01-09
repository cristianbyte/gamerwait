import AppLayout from "../components/layout/AppLayout";
import Sidebar from "../components/layout/Sidebar";

export default function Home() {
  return (
    <AppLayout>
      <Sidebar />
      <main className="bg-yucatan flex-1"></main>
      {/* GamerWit is an independent app and is not affiliated with or endorsed by any game publisher or studio. All game titles are trademarks of their respective owners. */}
    </AppLayout>
  );
}
