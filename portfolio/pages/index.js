import Head from "next/head";
import Navbar from "../components/navbar";
import Body from "../components/body";
import Projects from "../components/projects";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="text-light app">
      <Navbar />
      <Body />
      <Projects />
      <Footer />
    </div>
  );
}
