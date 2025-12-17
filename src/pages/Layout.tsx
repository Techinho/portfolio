import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-zinc-300 relative font-sans selection:bg-gold-400/20 selection:text-gold-400  mx-auto">
      {/* Global Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-[#050505] to-[#050505] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {!location.pathname.startsWith("/project/") && <Navigation />}
      <main className="flex-1 w-full relative z-10 md:px-8">
        <AnimatePresence mode="wait" initial={false}>
          {/* key by pathname to trigger exit/enter */}
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;
