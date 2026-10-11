import { useEffect } from "react";
import PageHero from "../components/PageHero";
import { Card, PAGE_MAIN } from "../components/ui";
import { INFO_VIDEOS, SITE } from "../data/homeData";

/* /informational-videos */
export default function InfoVideosPage() {
  useEffect(() => {
    document.title = "Informational Videos | Munna's Academy";
  }, []);

  return (
    <>
      <PageHero
        title="Informational Videos"
        subtitle="Know more about Munna's Academy."
        crumbs={[{ label: "Informational Videos" }]}
      />

      <main className={PAGE_MAIN}>
        <div className="grid gap-6 lg:grid-cols-2">
          {INFO_VIDEOS.map((v) => (
            <Card key={v.id} className="p-4 pt-5">
              <video
                controls
                preload="none"
                playsInline
                src={v.src}
                className="block aspect-video w-full rounded-xl bg-black"
              >
                Your browser does not support the video tag.
              </video>
              <h3 className="px-1 pb-1 pt-4 text-lg font-bold text-[#0a4d6b]">{v.title}</h3>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`${SITE}/demo-video.php`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-black px-6 py-3 font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition duration-200 hover:-translate-y-px hover:bg-[#222] motion-reduce:transition-none"
          >
            MORE VIDEOS &rsaquo;
          </a>
        </div>
      </main>
    </>
  );
}
