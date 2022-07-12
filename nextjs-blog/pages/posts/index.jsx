import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-nextjs",
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with SSR",
    date: "202207-12",
  },
  {
    slug: "getting-started-nextjs2",
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with SSR",
    date: "202207-12",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
