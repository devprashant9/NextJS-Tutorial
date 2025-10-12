import React from 'react'

const File = async ({ params }: { params: Promise<{ [key: string]: string }> }) => {
    const resolvedParams = await params;
    const filePath = resolvedParams.filePath || 'unknown';
    console.log(resolvedParams);
    return (
        <div>
            <h2>This is File Page</h2>
            <p>File Path: {filePath}</p>
        </div>
    )
}

export default File;
