import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getBlogPostBySlug } from '@/content/blog/posts';
import JsonLd from '@/components/JsonLd';
import LeadForm from '@/components/LeadForm';
import { siteConfig } from '@/lib/seo';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Elevate Home Offers'],
      tags: post.tags,
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Elevate Home Offers',
      url: siteConfig.baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Elevate Home Offers',
      url: siteConfig.baseUrl,
    },
    url: `${siteConfig.baseUrl}/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      {/* Hero */}
      <div className="bg-primary py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-gray-300 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs">{post.title}</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-accent/20 text-accent text-xs font-medium px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xs">
                EH
              </div>
              <span>Elevate Home Offers</span>
            </div>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article body */}
            <div className="lg:col-span-2">
              <article
                className="prose prose-lg prose-gray max-w-none
                  prose-headings:text-primary prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-p:text-gray-600 prose-p:leading-relaxed
                  prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                  prose-li:text-gray-600
                  prose-strong:text-primary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* CTA within article */}
              <div className="mt-12 bg-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">Ready to Get a Cash Offer?</h3>
                <p className="text-gray-300 mb-6">
                  Elevate Home Offers buys houses fast in Austin and Central Texas. No fees, no repairs, close in 7 days. Get your free offer today.
                </p>
                <Link
                  href="/get-cash-offer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-amber-500 text-primary font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  Get My Free Cash Offer →
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-neutral rounded-2xl p-6 mb-6">
                  <h3 className="font-bold text-primary mb-4 text-lg">Get a Cash Offer</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Sell your Austin-area home fast. No fees, no repairs, close in 7 days.
                  </p>
                  <Link
                    href="/get-cash-offer"
                    className="block w-full bg-accent hover:bg-amber-500 text-primary font-bold py-3 px-4 rounded-xl text-center transition-colors text-sm"
                  >
                    Free Cash Offer →
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="block w-full mt-3 text-center text-primary font-medium text-sm hover:text-accent transition-colors"
                  >
                    Or call: {siteConfig.phone}
                  </a>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-primary mb-4">More Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                        <h4 className="text-sm font-semibold text-primary group-hover:text-accent transition-colors leading-snug">
                          {p.title}
                        </h4>
                        <time className="text-xs text-gray-400 mt-1 block">{formatDate(p.date)}</time>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 bg-neutral">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">Sell Your Austin Home Fast — Get a Free Cash Offer</h2>
            <p className="text-gray-600 text-lg">No obligation. No fees. We respond within 24 hours.</p>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
