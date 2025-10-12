import { notFound } from 'next/navigation';
import React from 'react';

interface BlogProps {
    params?: Promise<{ [key: string]: string }>;
}

export default async function Blog({ params }: BlogProps) {
    const { blog } = params ? await params : { blog: 'unknown' };

    if (isNaN(Number(blog)) || Number(blog) < 1) {
        return notFound();
    }
    return (
        <div>
            <h2>Blog Title {blog}</h2>
            <p>Blog content goes here...</p>
        </div>
    );
}
