import Image from "next/image";

import { PostCard } from "@/components";

const testPosts = [
  { title: "Reat is great", excerpt: "Learn React" },
  { title: "Reat is ", excerpt: "Learn React" },
];
export default function Home() {
  return (
    <div className="lg:col-span-8 col-span-1 bg-blue-500">
      <p>hey</p>
      <div>Hello world</div>
    </div>
  );
}
