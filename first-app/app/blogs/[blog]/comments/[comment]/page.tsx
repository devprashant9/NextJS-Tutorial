import React from 'react'

const Comment = async({params}: {params: Promise<{[key: string]: string}>}) => {
  const resolvedParams = await params;
  const comment = resolvedParams.comment || 'unknown';
  console.log(resolvedParams);

  return (
    <div>
        <h2>This is Comment Page</h2>
        <p>Comment ID: {comment}</p>
    </div>
  )
}

export default Comment;
