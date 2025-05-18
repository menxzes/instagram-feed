import Image from "next/image";
import { posts } from '@/data/posts'
import PostItem from "@/components/PostItem";

export default function Home() {
  return (
    <main className="max-w-2x1 mx-auto py-8 px-8">
      <h1 className="text-3x1 font-bold mb-6 text-center">Cópia do Instagram</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}
