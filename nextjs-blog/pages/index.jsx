import React from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

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

function HomePage() {
  return (
    <React.Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </React.Fragment>
  );
}

export default HomePage;
