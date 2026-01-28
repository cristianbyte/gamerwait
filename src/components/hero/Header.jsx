import Breadcrumb from "./../header/Breadcrumb";
import UserMenu from "./../header/UserMenu";

export default function Header() {
  return (
    <header className="flex items-center relative w-full h-20 justify-between px-5 py-5 border-b border-white/5 z-10 bg-slate-900/80 backdrop-blur-md">
      <Breadcrumb />
      <UserMenu />
    </header>
  );
}
