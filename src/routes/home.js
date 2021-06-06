import React from "react";
import HomePage from "components/pages/Home";
import { useScrollToTop } from "hooks/scroll";

const Home = () => {
  useScrollToTop();
  return <HomePage />;
};

export default Home;
