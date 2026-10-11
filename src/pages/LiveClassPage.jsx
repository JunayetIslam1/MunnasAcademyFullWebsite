import { useEffect } from "react";
import { useAuthModals } from "../components/AuthModals";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Card, ICONS, IconTile, PAGE_MAIN } from "../components/ui";
import { SITE, VIDEO_SECTIONS } from "../data/homeData";

/* /live-class */
export default function LiveClassPage() {
  const { openLogin } = useAuthModals();

  useEffect(() => {
    document.title = "Live Class | Munna's Academy";
  }, []);

  return (
    <>
      <PageHero
        title="Live Class"
        subtitle="অনলাইন-অফলাইন দুটো মাধ্যমেই আপনার সন্তান পেতে পারবে সেবা।"
        crumbs={[{ label: "Live Class" }]}
      />

      <main className={PAGE_MAIN}>
        <Card className="flex flex-col items-center gap-4 px-6 pb-7 pt-8 text-center sm:flex-row sm:text-left">
          <IconTile big>{ICONS.live}</IconTile>
          <p className="flex-1">
            শিক্ষার্থীরা তাদের ইনডেক্স ও পাসওয়ার্ড ব্যবহারের মাধ্যমে এই সেবা পাবে কোন ঝামেলা ছাড়াই।
          </p>
          <button
            type="button"
            onClick={openLogin}
            className="rounded-lg bg-black px-6 py-3 font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition duration-200 hover:-translate-y-px hover:bg-[#222] motion-reduce:transition-none"
          >
            LOGIN &rsaquo;
          </button>
        </Card>

        <h2 className="mb-5 mt-10 flex items-center gap-3 text-[clamp(20px,3vw,26px)] font-bold text-[#0a4d6b]">
          <span className="h-7 w-1.5 rounded bg-[#e3202c]" />
          Choose your class
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEO_SECTIONS.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 60}>
              <a
                href={`${SITE}/live-class.php`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[#e1eaf0] bg-white px-5 py-5 shadow-[0_6px_22px_rgba(0,0,0,.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(26,139,189,.22)] motion-reduce:transition-none"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#1a8bbd,#0f6a91)]" />
                <IconTile>{ICONS.live}</IconTile>
                <span className="min-w-0 flex-1 font-bold leading-snug text-[#0a4d6b]">{s.title}</span>
                <span className="font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition-transform duration-200 group-hover:translate-x-1">
                  JOIN &rsaquo;
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </main>
    </>
  );
}
