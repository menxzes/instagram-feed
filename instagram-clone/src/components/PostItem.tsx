'use client'

import { useState } from 'react'
import {
    Heart,
    MessageCircle,
    Send,
    Bookmark,
    MoreHorizontal,
} from 'lucide-react'

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
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
            {/* Cabeçalho */}
            <div className='flex items-center justify-between px-4 py-3'>
                <div className='flex items-center gap-2'>
                    <img
                    src={post.avatar}
                    alt={`Avatar de ${post.username}`}
                    className="w-10 h-10 rounded-full object-cover border"
                    />
                    <span className='font-semibold text-sm'>{post.username}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <button className='text-xs text-blue-500 font-semibold hover:underline'>
                        Follow
                    </button>
                    <MoreHorizontal className='w-5 h-5'/>
                </div>
            </div>

            {/* Imagem do post */}
            <div className="mb-3 max-w-md mx-auto">
                <img
                src={post.image}
                alt="Imagem do post"
                className="w-full h-auto object-cover"
                />
            </div>

            {/* Ações */}
            <div className='flex items-center justify-between px-4 py-2'>
                <div className='flex gap-4'>
                    <button onClick={handleLike} className='mb-2'>
                        {liked ? (
                            <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                        ) : (
                            <Heart className="w-6 h-6" />
                        )}
                    </button>
                    <MessageCircle className='w-6 h-6'/>
                    <Send className='w-6 h-6'/>
                </div>
                <Bookmark className='w-6 h-6'/>
            </div>


            {/* Curtidas */}
            <div className='px-4 text-sm font-semibold'>{likes} curtidas</div>
        

            {/* Descrição */}
            <div className='px-4 py-2 text-sm'>
                <span className='font-semibold mr-1'>{post.username}</span>
                {post.description}
            </div>
        </div>
    );
}
