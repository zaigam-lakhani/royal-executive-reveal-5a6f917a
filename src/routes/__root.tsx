import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { I18nProvider } from "../i18n/I18nProvider";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-8xl text-gradient-gold">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-ivory">Page not found</h2>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-xs font-semibold uppercase tracking-luxury shadow-gold"
            style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Synaps Group — Mining & Sustainable Development" },
      {
        name: "description",
        content:
          "Synaps Group delivers mining expertise, international trade, and social impact projects in Madagascar.",
      },
      { name: "author", content: "Synaps Group" },
      { property: "og:site_name", content: "Synaps Group" },
      { property: "og:title", content: "Synaps Group — Mining & Sustainable Development" },
      { property: "og:description", content: "Royal Crown Design transforms the Synaps Group website into a premium, luxury investment holding company theme." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Synaps Group — Mining & Sustainable Development" },
      { name: "description", content: "Royal Crown Design transforms the Synaps Group website into a premium, luxury investment holding company theme." },
      { name: "twitter:description", content: "Royal Crown Design transforms the Synaps Group website into a premium, luxury investment holding company theme." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e2566a67-d3a0-4e48-b3e0-923472553e49/id-preview-8f660610--36ee4ab1-df9b-4ac1-af77-fd78d6f6dc26.lovable.app-1779796073724.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e2566a67-d3a0-4e48-b3e0-923472553e49/id-preview-8f660610--36ee4ab1-df9b-4ac1-af77-fd78d6f6dc26.lovable.app-1779796073724.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Synaps Group",
          url: "https://royal-executive-reveal.lovable.app",
          description:
            "Synaps Group delivers mining expertise, international trade, real estate and social impact projects in Madagascar.",
          areaServed: "Madagascar",
          sameAs: [],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Synaps Group",
          url: "https://royal-executive-reveal.lovable.app",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}
