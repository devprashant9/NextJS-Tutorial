import Link from "next/link";

const Blogs = () => {
  console.log("Blogs Page");
  // if(blogID % 2 === 0) {
  //   throw new Error("Page Can Be Odd Number Only")
  // }

  // if (Math.random() > 0.5) {
  //   throw new Error("Something Went Wrong")
  // }
  return (
    <>
      <div>
        <h1>Welcome to Our Blog</h1>
        <ol className="blog-links">
          <li>
            <Link href="/blogs/1">Blog 1</Link>
          </li>
          <li>
            <Link href="/blogs/2">Blog 2</Link>
          </li>
          <li>
            <Link href="/blogs/3">Blog 3</Link>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Blogs;
