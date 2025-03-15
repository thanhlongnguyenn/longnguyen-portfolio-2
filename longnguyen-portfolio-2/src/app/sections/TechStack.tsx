import ScrollVelocity from "../components/scrollvelocity";

export default function TechStack() {
  return (
    <ScrollVelocity
      texts={["<Python> <Java> <C> <SQL>", "[AI/ML] [Web Development] [UI/UX] [Data Analysis] [Data Visualisation]"]}
      velocity={80}
      parallaxClassName="parallax"
      scrollerClassName="scroller"
    />
  );
}