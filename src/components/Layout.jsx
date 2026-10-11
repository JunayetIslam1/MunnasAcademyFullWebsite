import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { AuthModalsProvider, useAuthModals } from "./AuthModals";

const NAV = [
  { label: "Home", to: "/", end: true },
  { label: "About Us", to: "/about" },
  { label: "Live Class", to: "/live-class" },
  { label: "Informational Videos", to: "/informational-videos" },
  { label: "Videos", to: "/videos" },
  { label: "Notice Board", to: "/notice-board" },
  { label: "Exam Question / Ranking List", to: "/exam-ranking" },
  { label: "Contact", to: "/contact" },
];

/* Sticky header: main menu on the left, Login / Register on the right */
function Header() {
  const { openLogin, openRegister } = useAuthModals();

  const authBtn =
    "rounded-lg bg-black px-3.5 py-2.5 font-['Raleway',sans-serif] text-[13px] font-extrabold text-[#e3202c] transition duration-200 hover:-translate-y-px hover:bg-white hover:text-black motion-reduce:transition-none sm:px-5 sm:py-3 sm:text-sm";

  return (
    <header className="sticky top-0 z-50 bg-[#1a8bbd] shadow-[0_3px_14px_rgba(0,0,0,.18)]">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center gap-x-4 px-3.5 py-2.5 sm:px-[22px] xl:flex-nowrap">
        {/* menu: 2nd row on small screens (swipe sideways), one line on wide screens */}
        <nav
          aria-label="Main menu"
          className="order-2 -mx-1 mt-2 flex w-full gap-1 overflow-x-auto px-1 pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:order-1 xl:mt-0 xl:w-auto xl:flex-1 xl:pb-0"
        >
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                "shrink-0 whitespace-nowrap rounded-lg px-3.5 py-2 font-['Raleway',sans-serif] text-[13px] font-bold transition-colors duration-200 motion-reduce:transition-none " +
                (isActive
                  ? "bg-white text-[#0f6a91]"
                  : "text-white/90 hover:bg-white/15 hover:text-white")
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="order-1 ml-auto flex gap-2 sm:gap-2.5 xl:order-2">
          <button type="button" onClick={openLogin} className={authBtn}>
            LOGIN &rsaquo;
          </button>
          <button type="button" onClick={openRegister} className={authBtn}>
            REGISTER &rsaquo;
          </button>
        </div>
      </div>
    </header>
  );
}

/* Scroll to top on a new page, or to the #section if the link has one */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={
        "fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-black shadow-[0_8px_22px_rgba(0,0,0,.35)] transition duration-300 hover:bg-[#222] motion-reduce:transition-none " +
        (show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0")
      }
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#e3202c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

/* Page frame: header + page (Outlet) + footer (black bar always at the bottom) */
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-[#f3f7fa] font-['Hind_Siliguri','Noto_Sans_Bengali',Arial,sans-serif] text-base leading-[1.85] text-[#2b2f33] sm:text-[17px]">
      <AuthModalsProvider>
        <ScrollManager />
        <Header />
        <div className="flex flex-1 flex-col">
          <Outlet />
        </div>
        <Footer />
        <BackToTop />
      </AuthModalsProvider>
    </div>
  );
}
