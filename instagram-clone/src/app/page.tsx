import Image from "next/image";
import { posts } from '@/data/posts'
import PostItem from "@/components/PostItem";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-800 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Cópia do Instagram
      </h1>

      <div className="flex flex-col items-center gap-6">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}
