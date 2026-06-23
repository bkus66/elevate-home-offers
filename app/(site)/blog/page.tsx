import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/content/blog/posts';

export const metadata: Metadata = {
  title: 'Blog | Cash Home Buying Tips & Austin Real Estate Guides',
  description:
    'Guides and resources for Austin-area homeowners considering selling their house fast for cash. Covering foreclosure, as-is sales, inherited properties, and more.',
  alternates: {
    canonical: 'https://elevatehomeoffers.com/blog',
  },
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndexPage() {
  return (
    <article>
      {/* Hero */}
      <div className="bg-primary py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Resources & Guides</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Elevate Home Offers Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Practical guides for Austin-area homeowners navigating fast home sales, foreclosure, inherited properties, and more.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-neutral rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-accent/10 text-accent text-xs font-medium px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-primary mb-3 hover:text-accent transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time className="text-gray-400 text-sm" dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:underline text-sm"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to Sell Your Austin Home Fast?</h2>
          <p className="text-gray-600 mb-6">
            All the research in the world won&apos;t tell you what your specific home is worth. Get a real cash offer in 24 hours — free and no obligation.
          </p>
          <Link
            href="/get-cash-offer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-amber-500 text-primary font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Get My Free Cash Offer →
          </Link>
        </div>
      </section>
    </article>
  );
}
