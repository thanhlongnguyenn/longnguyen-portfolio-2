import AnimatedContent from "../components/animatedcontent";

export const Header = () => {
  return (
    <section>
      <div className="flex justify-center items-center fixed top-3 w-full z-50">
        <div className="backdrop-blur rounded-full">
          <AnimatedContent
            distance={200}
            direction="horizontal"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <nav className="flex gap-1 p-1 rounded-full bg-white/20 text-[#D6D2BD]">
              <a href="#" className="nav-item">
                Home
              </a>
              <a href="#" className="nav-item">
                About
              </a>
              <a href="#" className="nav-item">
                Projects
              </a>
              <a href="#" className="nav-item">
                Contact
              </a>
            </nav>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};
