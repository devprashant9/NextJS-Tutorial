"use client"
import React, { useEffect, useState } from 'react';

interface PostType {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Post = () => {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
            const data = await res.json();
            setPosts(data);
        }

        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

export default Post;
