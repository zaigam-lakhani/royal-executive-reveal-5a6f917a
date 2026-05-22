import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/agribusiness")({
  head: () => ({
    meta: [
      { title: "Synaps Agribusiness — Synaps Group" },
      {
        name: "description",
        content:
          "Synaps Agribusiness — sustainable agriculture, agro-processing and food security initiatives across Madagascar.",
      },
      { property: "og:title", content: "Synaps Agribusiness — Synaps Group" },
      {
        property: "og:description",
        content:
          "Sustainable agriculture, agro-processing and food security initiatives across Madagascar.",
      },
    ],
  }),
  component: AgribusinessPage,
});

function AgribusinessPage() {
  const { t } = useI18n();
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden pt-32 pb-24">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxury text-gold">
              {t("nav.agribusiness")}
            </p>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl text-ivory">
              {t("nav.agribusiness")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
              {t("agri.intro") !== "agri.intro"
                ? t("agri.intro")
                : "Sustainable agriculture, agro-processing and food security initiatives across Madagascar."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { k: "agri.c1.title", d: "agri.c1.desc", fb: ["Sustainable Farming", "Regenerative agriculture, soil health and local crops."] },
            { k: "agri.c2.title", d: "agri.c2.desc", fb: ["Agro-Processing", "Value-added transformation of Madagascar's natural produce."] },
            { k: "agri.c3.title", d: "agri.c3.desc", fb: ["Export & Trade", "Premium agricultural exports to international markets."] },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                className="rounded-2xl border p-8 h-full"
                style={{
                  borderColor: "color-mix(in oklab, var(--gold) 20%, transparent)",
                  background: "color-mix(in oklab, var(--gold) 4%, transparent)",
                }}
              >
                <h3 className="font-serif text-2xl text-ivory">
                  {t(c.k) !== c.k ? t(c.k) : c.fb[0]}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {t(c.d) !== c.d ? t(c.d) : c.fb[1]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex rounded-full px-8 py-3 text-xs font-semibold uppercase tracking-luxury shadow-gold"
            style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}
          >
            {t("cta.contact")}
          </Link>
        </div>
      </section>
    </div>
  );
}
