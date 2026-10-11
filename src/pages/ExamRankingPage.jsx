import { useEffect } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { EmptyState, ICONS, IconTile, PAGE_MAIN } from "../components/ui";
import { EXAM_POSTS, SITE } from "../data/homeData";

/* /exam-ranking */
export default function ExamRankingPage() {
  useEffect(() => {
    document.title = "Exam Question / Ranking List | Munna's Academy";
  }, []);

  return (
    <>
      <PageHero
        title="Exam Question / Ranking List"
        subtitle="Latest exam questions, results and ranking lists."
        crumbs={[{ label: "Exam Question / Ranking List" }]}
      />

      <main className={PAGE_MAIN}>
        {EXAM_POSTS.length === 0 ? (
          <EmptyState title="Nothing posted yet" />
        ) : (
          <div className="grid gap-5">
            {EXAM_POSTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <a
                  href={`${SITE}/news-feed.php?id=${p.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[#e1eaf0] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(10,77,107,.16)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(26,139,189,.28)] motion-reduce:transition-none"
                >
                  <span className="absolute inset-y-0 left-0 w-1.5 bg-[linear-gradient(180deg,#1a8bbd,#0f6a91)]" />
                  <IconTile big>{ICONS.trophy}</IconTile>
                  <span className="min-w-0 flex-1 text-lg font-bold leading-snug text-[#0a4d6b]">{p.title}</span>
                  <span className="font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition-transform duration-200 group-hover:translate-x-1">
                    OPEN &rsaquo;
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href={`${SITE}/news-feed.php`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-black px-6 py-3 font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition duration-200 hover:-translate-y-px hover:bg-[#222] motion-reduce:transition-none"
          >
            SEE ALL &rsaquo;
          </a>
        </div>
      </main>
    </>
  );
}
