import { About } from "./sections/About";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Quote } from "./sections/Quote";
import TechStack from "./sections/TechStack";

export default function Home() {
  return (
    <div>
      <div className="bg"></div>
      <Header />
      <Hero />
      <About />
      <Quote />
      <TechStack />
      <div className="h-dvh"></div>
    </div>
  );
}
