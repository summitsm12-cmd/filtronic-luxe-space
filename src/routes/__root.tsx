import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-brand-green">404</h1>
        <h2 className="mt-4 text-xl font-medium text-brand-green">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-brand-green px-6 py-3 text-sm text-primary-foreground hover:bg-brand-indigo transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-brand-green">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-brand-green px-6 py-3 text-sm text-primary-foreground hover:bg-brand-indigo transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-md border border-input bg-background px-6 py-3 text-sm text-foreground hover:bg-accent transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Filtronic Lifestyle — Premium Interior Design Studio" },
      {
        name: "description",
        content:
          "Filtronic Lifestyle Pvt Ltd — a modern interior design studio crafting refined homes, offices and spaces with elegance and craftsmanship.",
      },
      { name: "author", content: "Filtronic Lifestyle Pvt Ltd" },
      { property: "og:title", content: "Filtronic Lifestyle — Premium Interior Design Studio" },
      { property: "og:description", content: "Filtronic Lifestyle Studio is a modern luxury interior design website showcasing premium residential and commercial projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Filtronic Lifestyle — Premium Interior Design Studio" },
      { name: "description", content: "Filtronic Lifestyle Studio is a modern luxury interior design website showcasing premium residential and commercial projects." },
      { name: "twitter:description", content: "Filtronic Lifestyle Studio is a modern luxury interior design website showcasing premium residential and commercial projects." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/76cc33cb-75f3-4796-9256-b69a148a2b1f/id-preview-e01d2b09--1d1b01ae-81ee-41c8-bd6a-f04a93c52b76.lovable.app-1779840957215.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/76cc33cb-75f3-4796-9256-b69a148a2b1f/id-preview-e01d2b09--1d1b01ae-81ee-41c8-bd6a-f04a93c52b76.lovable.app-1779840957215.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-28 md:pt-32">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </QueryClientProvider>
  );
}
