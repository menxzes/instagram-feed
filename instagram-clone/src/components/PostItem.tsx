'use client'

import { useState } from 'react'

interface PostItemProps {
    post: {
        id: number
        username: string
        avatarUrl: string
        imageUrl: string
        numberOfLikes: number
        description: string
    }
}

export default function PostItem({ post }: PostItemProps) {
  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    setLiked(!liked)
  }

  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden'>

        <div className='flex items-center gap-3 px-4 py-3'>
            <img src="{post.avatarUrl}" alt="`${post.username}'s avatar`" className='w-10 h-10 rounded-full' />
            <span className='font-medium'>{post.username}</span>
        </div>

        <img src="{post.imageUrl}" alt="Post" className='w-full h-auto object-cover' />

        <div className='px-4 pt-t pb-1'>
            <button onClick={toggleLike} className='focus:outline-none'>
                {liked ? (
                    <span className='text-red-500 text-2x1'>❤️</span>
                ) : (
                    <span className='text-gray-400 text-2xl'>🤍</span>
                )}
            </button>
            <p className='text-sm font-medium mt-1'>
                {post.numberOfLikes + (liked ? 1 : 0)} curtidas
            </p>
        </div>

        <div className='px-4 pb-3'>
            <p className='text-sm'>
                <span className='font-medium mr-1'>{post.username}</span>
                {post.description}
            </p>
        </div>

    </div>
  )
}
