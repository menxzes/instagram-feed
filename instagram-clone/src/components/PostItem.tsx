'use client'

import { useState } from 'react'
import { Heart, HeartIcon } from 'lucide-react'

interface PostItemProps {
    post: {
        id: number
        username: string
        avatar: string
        image: string
        numberOfLikes: number
        description: string
    }
}

export default function PostItem({ post }: PostItemProps) {
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(post.numberOfLikes);

    const handleLike = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
    };

    
    return (
        <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-md mx-auto mb-6">
        {/* Cabeçalho */}
        <div className="flex items-center gap-2 p-4">
            <img
            src={post.avatar}
            alt={`Avatar de ${post.username}`}
            className="w-10 h-10 rounded-full object-cover border"
            />
            <span className="font-semibold text-gray-800">{post.username}</span>
        </div>

        {/* Imagem do post */}
        <div className="mb-3 max-w-md mx-auto">
            <img
            src={post.image}
            alt="Imagem do post"
            className="w-full rounded-lg object-cover"
            />
        </div>


        {/* Curtidas */}
        <div className="text-sm text-gray-700 mb-1">
            <button onClick={() => setLiked(!liked)} className='mb-2'>
                {liked ? (
                    <Heart className='text=red-500 fill-red-500 w-6 h-6' />
                ) : (
                    <HeartIcon className='text-gray-700 w-6 h-6' />
                )}
            </button>
        </div>
    

        {/* Descrição */}
        <p className="text-sm text-gray-800">
            <span className="font-semibold">{post.username}</span> {post.description}
        </p>
        </div>
    );
}
