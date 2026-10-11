import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Card, ICONS, IconTile, PAGE_MAIN } from "../components/ui";
import { CONTACT } from "../data/homeData";

const inputCls =
  "w-full rounded-lg border border-[#cfdde6] bg-white px-3.5 py-2.5 text-base text-[#2b2f33] outline-none transition focus:border-[#1a8bbd] focus:ring-2 focus:ring-[#1a8bbd]/30";
const labelCls = "mb-1 block text-sm font-semibold text-[#0f6a91]";

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <IconTile>{icon}</IconTile>
      <div className="min-w-0">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#5c6670]">{label}</p>
        <div className="font-semibold leading-snug text-[#0a4d6b] [overflow-wrap:anywhere]">{children}</div>
      </div>
    </div>
  );
}

/* /contact (Location) */
export default function ContactPage() {
  const [form, setForm] = useState({ name: "", mobile: "", message: "" });

  useEffect(() => {
    document.title = "Contact | Munna's Academy";
  }, []);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // No server needed: opens the visitor's email app with the message filled in
  const onSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nMobile: ${form.mobile}\n\n${form.message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      "Message from website"
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Visit us or call us — we are happy to help."
        crumbs={[{ label: "Contact" }]}
      />

      <main className={PAGE_MAIN}>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full space-y-6 px-6 pb-8 pt-9">
              <InfoRow icon={ICONS.phone} label="Call us">
                {CONTACT.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="block hover:underline">
                    {p}
                  </a>
                ))}
              </InfoRow>
              <InfoRow icon={ICONS.pin} label="Address">
                {CONTACT.address}
              </InfoRow>
              <InfoRow icon={ICONS.mail} label="Email">
                <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                  {CONTACT.email}
                </a>
              </InfoRow>
              <InfoRow icon={ICONS.globe} label="Web">
                <a href={CONTACT.webUrl} className="hover:underline">
                  {CONTACT.web}
                </a>
              </InfoRow>
            </Card>
          </Reveal>

          <Reveal delay={80}>
            <Card className="h-full px-6 pb-8 pt-9">
              <h2 className="mb-5 font-['Raleway',sans-serif] text-2xl font-extrabold text-[#0a4d6b]">
                Send a message
              </h2>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="c-name" className={labelCls}>
                    Your Name
                  </label>
                  <input id="c-name" required value={form.name} onChange={set("name")} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-mobile" className={labelCls}>
                    Mobile Number
                  </label>
                  <input
                    id="c-mobile"
                    type="tel"
                    inputMode="numeric"
                    value={form.mobile}
                    onChange={set("mobile")}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="c-msg" className={labelCls}>
                    Message
                  </label>
                  <textarea
                    id="c-msg"
                    required
                    rows={4}
                    value={form.message}
                    onChange={set("message")}
                    className={inputCls}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-black px-5 py-3 font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition hover:bg-[#222]"
                >
                  SEND &rsaquo;
                </button>
              </form>
            </Card>
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Card className="p-3 pt-4">
            <iframe
              title="Munna's Academy location"
              src="https://www.google.com/maps?q=Panchlaish,+Chittagong,+Bangladesh&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[320px] w-full rounded-xl border-0 sm:h-[400px]"
            />
          </Card>
        </Reveal>
      </main>
    </>
  );
}
