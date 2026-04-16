import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Container from "@/components/ui/Container";
import { services } from "@/components/sections/data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Travid Technologies",
    };
  }

  return {
    title: `${service.title} | Travid Technologies`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Header />
      <section className="section-flow pb-20 pt-36 md:pt-40">
        <Container className="space-y-10">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 transition-colors hover:text-ink dark:text-white/70 dark:hover:text-cloud"
          >
            <span aria-hidden>←</span>
            Back to Services
          </Link>
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aurora">
              Service Detail
            </p>
            <h1 className="text-title font-heading font-semibold text-ink dark:text-cloud">
              {service.title}
            </h1>
            <p className="text-base leading-relaxed text-steel md:text-lg">{service.detailIntro}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="glass gradient-border rounded-3xl p-6 md:p-8">
              <h2 className="font-heading text-2xl font-semibold text-ink dark:text-cloud">What we focus on</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-steel">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-aurora" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="glass gradient-border rounded-3xl p-6 md:p-8">
              <h2 className="font-heading text-2xl font-semibold text-ink dark:text-cloud">Typical deliverables</h2>
              <div className="mt-5 space-y-5">
                {service.deliverables.map((deliverable) => (
                  <div key={deliverable.title} className="space-y-2">
                    <h3 className="text-base font-semibold text-ink dark:text-cloud">{deliverable.title}</h3>
                    <p className="text-sm leading-relaxed text-steel">{deliverable.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
