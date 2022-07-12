import ReactMarkdown from "react-markdown";
import PostHeader from "../post-header";
import classes from "./styles.module.css";

const DUMMY_POST = {
  slug: "getting-started-nextjs",
  title: "Getting started with nextjs",
  image: "getting-started-nextjs.png",
  excerpt:
    "Nextjs is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with SSR",
  date: "202207-12",
  content: "# This is the title",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
