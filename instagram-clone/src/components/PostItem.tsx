'use client'

import { useState } from 'react'

type Post = {
  id: number
  username: string
  avatarUrl: string
  imageUrl: string
  numberOfLikes: number
  description: string
}

type PostItemProps = {
  post: Post
}

export default function PostItem({ post }: PostItemProps) {
  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    setLiked((prev) => !prev)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center mb-4">
        <img src={post.avatarUrl} alt={post.username} className="w-10 h-10 rounded-full mr-3" />
        <span className="font-semibold">{post.username}</span>
      </div>
      <img src={post.imageUrl} alt="Post" className="w-full rounded-md mb-4" />
      <div className="flex items-center mb-2">
        <button onClick={toggleLike} className="text-red-500 text-2xl mr-2">
          {liked ? '❤️' : '🤍'}
        </button>
        <span>{liked ? post.numberOfLikes + 1 : post.numberOfLikes} curtidas</span>
      </div>
      <p><span className="font-semibold">{post.username}</span> {post.description}</p>
    </div>
  )
}
