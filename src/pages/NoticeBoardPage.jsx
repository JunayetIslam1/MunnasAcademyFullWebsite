import { useEffect, useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Card, EmptyState, ICONS, IconTile, PAGE_MAIN, SearchBox } from "../components/ui";
import { NOTICES, SITE, groupNotices } from "../data/homeData";

/* /notice-board — schedules grouped, every page is one tap */
export default function NoticeBoardPage() {
  const [q, setQ] = useState("");
  const groups = useMemo(() => groupNotices(NOTICES), []);

  useEffect(() => {
    document.title = "Notice Board | Munna's Academy";
  }, []);

  const list = groups.filter((g) => g.title.toLowerCase().includes(q.trim().toLowerCase()));

  return (
    <>
      <PageHero
        title="Notice Board"
        subtitle={`${NOTICES.length} notices in ${groups.length} schedules`}
        crumbs={[{ label: "Notice Board" }]}
      />

      <main className={PAGE_MAIN}>
        <Card className="p-5 pt-6">
          <SearchBox value={q} onChange={setQ} placeholder="Search notice (e.g. June, September, Class Eight)" />
        </Card>

        {list.length === 0 ? (
          <div className="mt-8">
            <EmptyState title="No notice found">Try another word.</EmptyState>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {list.map((g, i) => (
              <Reveal key={g.title} delay={(i % 2) * 70}>
                <section className="relative h-full overflow-hidden rounded-2xl border border-[#e1eaf0] bg-white px-5 pb-5 pt-6 shadow-[0_6px_22px_rgba(0,0,0,.07)]">
                  <span className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#1a8bbd,#0f6a91)]" />
                  <div className="mb-4 flex items-start gap-3">
                    <IconTile>{ICONS.notice}</IconTile>
                    <div className="min-w-0">
                      <h3 className="font-bold leading-snug text-[#0a4d6b]">{g.title}</h3>
                      <p className="text-sm text-[#5c6670]">
                        {g.pages.length} {g.pages.length === 1 ? "page" : "pages"}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.pages.map((p, idx) => (
                      <a
                        key={p.id}
                        href={`${SITE}/notice-board.php?id=${p.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border-2 border-[#1a8bbd] bg-white px-3.5 py-1 text-sm font-bold text-[#0f6a91] transition-colors duration-200 hover:bg-[#1a8bbd] hover:text-white motion-reduce:transition-none"
                      >
                        {p.page != null ? `Page ${p.page}` : `Open ${idx + 1}`}
                      </a>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href={`${SITE}/notice-board.php`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-black px-6 py-3 font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition duration-200 hover:-translate-y-px hover:bg-[#222] motion-reduce:transition-none"
          >
            OPEN FULL NOTICE BOARD &rsaquo;
          </a>
        </div>
      </main>
    </>
  );
}
