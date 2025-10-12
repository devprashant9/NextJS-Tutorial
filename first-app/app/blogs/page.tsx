import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';

interface Props {
  params: Promise<{ count: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { count } = await params;

  return {
    title: `Blogs (${count})`,
    description: `Viewing ${count} blog posts dynamically`,
  };
}

// 2️⃣ The page component
const Blogs = async ({ params }: Props) => {
  const { count } = await params;
  const blogCount = Number(count) || 3; // default 3 if invalid

  // Generate blog list dynamically
  const blogList = Array.from({ length: blogCount }, (_, i) => `Blog ${i + 1}`);

  return (
    <div>
      <h2>This is Blogs</h2>
      {blogList.map((blog) => (
        <p key={blog}>{blog}</p>
      ))}
    </div>
  );
};

export default Blogs;
