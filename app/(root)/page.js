import { PostCard, RightSideBar } from "@/components";
import { getPosts } from "@/services";

export default async function Home({ posts }) {
  posts = (await getPosts()) || [];
  console.log(posts);
  return (
    <>
      <div className="lg:col-span-8 col-span-1 ">
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>
      <RightSideBar />
    </>
  );
}

// export async function getStaticProps() {
//   posts = (await getPosts()) || [];

//   return {
//     props: { posts },
//   };
// }
