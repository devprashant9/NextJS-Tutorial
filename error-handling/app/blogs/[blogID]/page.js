const Blog = async ({ params }) => {
  const { blogID } = await params;

  // if(blogID % 2 === 0) {
  //   throw new Error("Page Can Be Odd Number Only")
  // }

  if(Math.random() > 0.5) {
    throw new Error("Something Went Wrong")
  }

  return (
    <>
      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
