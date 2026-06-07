import Link from "next/link";
import { client } from "@/lib/sanity";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import NewsletterForm from "../../components/NewsletterForm";

export const revalidate = 60;

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    publishedAt,
    "excerpt": array::join(body[0].children[].text, "") 
  }`;
  return await client.fetch(query);
}

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-cyan-100 text-black font-sans flex flex-col items-center px-6 md:px-8">
        <Header />
      <div className="max-w-6xl mx-auto mb-16">
        <div className="w-full space-y-8">
          <h1 className="text-3xl md:text-5xl font-medium leading-relaxed tracking-wide text-center">
            Mon année à Chicoutimi
          </h1>
          <p className="text-lg md:text-xl font-light mt-8 tracking-wide text-gray-600">
            Ci-dessous, retrouvez une liste des posts que j'ai écrits sur mon année d'échange à l'Université du Québec à Chicoutimi (UQAC). Ce blog est surtout destiné à garder une trace et une chronologie de mes expériences, mais j'espère que cela pourra aussi être utile à d'autres étudiants qui envisagent un échange au Canada ! N'hésitez pas à me contacter si vous avez des questions sur l'UQAC ou la vie à Chicoutimi.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-20">
          {posts.map((post: any) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-zinc-800/20 hover:border-zinc-800 transition-all"
            >
              {/* Image de couverture */}
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src={post.mainImage || "/placeholder.jpg"} 
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs text-zinc-500 uppercase tracking-widest mb-2">
                  {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-400 text-sm line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-6 text-sm font-medium flex items-center">
                  Lire le post
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <NewsletterForm />
      </div>
    </main>
  );
}