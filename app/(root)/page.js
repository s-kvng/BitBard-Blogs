import { PostCard } from "@/components";
import { getPosts } from "@/services";

export default async function Home({ posts }) {
  posts = (await getPosts()) || [];
  return (
    <div className="lg:col-span-8 col-span-1 bg-blue-500">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
}

// export async function getStaticProps() {
//   posts = (await getPosts()) || [];

//   return {
//     props: { posts },
//   };
// }
