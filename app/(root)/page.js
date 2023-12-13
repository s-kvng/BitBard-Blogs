import Image from "next/image";

import { PostCard } from "@/components";

const posts = [
  { title: "Reat is great", excerpt: "Learn React" },
  { title: "Tailwind is great ", excerpt: "Learn Tailwind" },
];
export default function Home() {
  return (
    <div className="lg:col-span-8 col-span-1 bg-blue-500">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
}
