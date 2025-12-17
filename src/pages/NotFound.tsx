import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
    <div className="flex min-h-screen items-center justify-center bg-[#050505] text-zinc-200 font-sans">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-serif font-bold text-gold-400">404</h1>
        <div className="space-y-2">
          <p className="text-2xl font-serif text-white">Page Not Found</p>
          <p className="text-zinc-400">The page you are looking for doesn't exist or has been moved.</p>
        </div>
        <a 
          href="/" 
          className="inline-block px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gold-400 transition-colors duration-300"
        >
          Return Home
        </a>
      </div>
    </div>
    </PageTransition>
  );
};

export default NotFound;
