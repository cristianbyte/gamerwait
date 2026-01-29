import AppLayout from "../components/layout/AppLayout";
import Sidebar from "../components/layout/Sidebar";
import MainContent from "../components/layout/MainContent";
import { AppProvider } from "../context/AppContext";

export default function Home() {
  return (
    <AppProvider>
      <AppLayout>
        <Sidebar />
        <MainContent />
      </AppLayout>
    </AppProvider>
  );
}
