"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Blogs() {
  const blogs = [
    {
      title: "What's Possible with AI",
      category: "Featured Article",
      date: "July 12, 2026",
      author: "Samantha Lee",
      description: "An in-depth look at how generative models are breaking boundaries in creativity, coding, and scientific research. What comes next for the intelligent age?",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop",
      slug: "whats-possible-with-ai",
      featured: true
    },
    {
      title: "AI Startup that Scaled Fast",
      category: "Case Study",
      date: "June 28, 2026",
      author: "Doug Gulgowski",
      description: "How one team used open-source LLMs to build a profitable consumer application in just 6 months.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      slug: "ai-startup-scaled-fast"
    },
    {
      title: "Ethics in the AI-First Era",
      category: "Insight",
      date: "June 15, 2026",
      author: "Carlos Mendoza",
      description: "Navigating the complex landscape of data privacy, bias mitigation, and transparent model training.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop",
      slug: "ethics-ai-first-era"
    }
  ];

  return (
    <section id="blogs" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              AI News and <span className="text-brand-blue">Insights</span>
            </h2>
            <p className="text-lg text-[var(--muted)] max-w-xl">
              Stay updated with the latest trends, research, and stories from the leaders shaping our intelligent future.
            </p>
          </motion.div>
          <Link href="/blogs" className="text-brand-blue font-medium hover:underline flex items-center gap-1">
            View All Articles &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Blog */}
          {blogs.filter(b => b.featured).map((blog, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={idx}
            >
              <Link href={`/blogs/${blog.slug}`} className="group relative rounded-3xl overflow-hidden card flex flex-col transition-all glass-pop">
                <div className="relative w-full aspect-video md:aspect-[4/3] bg-zinc-800 overflow-hidden">
                  <Image 
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {blog.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-sm font-medium text-[var(--muted)] mb-3">{blog.date} &bull; By {blog.author}</div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">{blog.title}</h3>
                  <p className="text-[var(--muted)] text-lg mb-6 flex-1">{blog.description}</p>
                  <div className="inline-flex items-center gap-2 font-semibold text-brand-blue">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Other Blogs */}
          <div className="flex flex-col gap-8">
            {blogs.filter(b => !b.featured).map((blog, idx) => (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
              >
                <Link href={`/blogs/${blog.slug}`} className="group flex flex-col sm:flex-row gap-6 card rounded-3xl p-4 transition-all glass-pop">
                  <div className="relative w-full sm:w-48 aspect-video sm:aspect-square flex-shrink-0 bg-zinc-800 rounded-2xl overflow-hidden">
                    <Image 
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-2 left-2 bg-white/10 backdrop-blur text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                      {blog.category}
                    </div>
                  </div>
                  <div className="flex flex-col py-2 sm:py-4">
                    <div className="text-xs font-medium text-[var(--muted)] mb-2">{blog.date}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-blue transition-colors">{blog.title}</h3>
                    <p className="text-sm text-[var(--muted)] line-clamp-2">{blog.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
