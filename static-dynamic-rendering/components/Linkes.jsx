import React from 'react'

const Linkes = async () => {
    await new Promise((resolve) => setTimeout(resolve, 6000));
  return (
    <div>
      2K Likes
    </div>
  )
}

export default Linkes
