import React from 'react';

const Comments = async ({ params }: { params: Promise<{ [key: string]: string }> }) => {
    const resolvedParams = await params;
    const blog = resolvedParams.blog || 'unknown';

    return (
        <div>
            <h2>Comments for Blog: {blog}</h2>
        </div>
    );
};

export default Comments;
