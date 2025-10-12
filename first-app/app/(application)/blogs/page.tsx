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

const Blogs = async ({ params }: Props) => {
  const { count } = await params;
  const blogCount = Number(count) || 3; // default 3 if invalid
  console.log(count)



 
  return (
    <div>
      <h2>This is Blogs</h2>
    </div>
  );
};

export default Blogs;
