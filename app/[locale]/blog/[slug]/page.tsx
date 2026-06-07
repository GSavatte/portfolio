import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Header from '../../../components/Header';
import ArticleBody from "../../../components/ArticleBody";
import DailySummary from "../../../components/DailySummary";
// ... vos autres imports

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]{
    title,
    body,
    "mainImage": mainImage.asset->url,
    publishedAt,
    dailySummary
  }`;
  return await client.fetch(query);
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-10 text-center">
          <img
            src={urlFor(value).width(800).fit('max').auto('format').url()}
            alt={value.alt || 'Image de voyage'}
            className="rounded-xl mx-auto"
          />
          {value.caption && (
            <p className="mt-2 text-sm text-gray-400 italic">{value.caption}</p>
          )}
        </div>
      );
    },
  },
  // Vous pouvez aussi personnaliser les liens, les titres, etc.
};

// 1. On indique à TypeScript que params est une Promesse
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. On "déballe" la promesse avec await avant de lire le slug
  const resolvedParams = await params; 
  const post = await getPost(resolvedParams.slug);

  if (!post) return <div>Article non trouvé...</div>;

  return (
    <>
    <main className="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-cyan-100 text-black font-sans flex flex-col items-center">
      <Header />
      <article className="w-full max-w-5xl bg-white rounded-[2rem] shadow-xl p-8 md:p-14 mt-4 flex flex-col">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 mb-8">
          Posté le {new Date(post.publishedAt).toLocaleDateString('fr-FR')}
        </p>

        {post.mainImage && (
          <div className="relative w-full h-96 mb-8 overflow-hidden rounded-2xl">
            <img src={post.mainImage} alt={post.title} className="object-cover w-full h-full" />
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none">
            {/* ON UTILISE LE NOUVEAU COMPOSANT ICI */}
            <ArticleBody body={post.body} />
        </div>
      </article>
      {post.dailySummary && <DailySummary data={post.dailySummary} />}
      </main>
    </>
  );
}