import React from "react";

const EODP = () => {
  return (
    <div className="project-page">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-light">Project Page</h1>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Project Image/Placeholder */}
            <div className="bg-gray-200 h-64 border border-gray-300 flex items-center justify-center">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="border-t border-gray-400 w-full absolute"></div>
                  <div className="border-l border-gray-400 h-full absolute transform rotate-45"></div>
                  <div className="border-l border-gray-400 h-full absolute transform -rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Project Name */}
            <div className="text-orange-500 font-bold text-2xl">
              PROJECT NAME
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-800 text-white p-2 text-sm">
              <p>
                Python, Machine Learning, Data Cleaning, Data Visualization,
                Python
              </p>
            </div>

            {/* Why I Chose This Framework */}
            <div className="space-y-4">
              <h2 className="uppercase text-sm font-mono">
                WHY DID I CHOOSE THIS FRAMEWORK PROJECT SUBHEADINGS?
              </h2>
              <p className="text-sm">
                Project body text Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Etiam a eleifend augue. Morbi turpis molestie,
                mauris est in tristique accumsan, risus leo pellentesque diam,
                et interdum tellus elit non risus. Maecenas eget consectetur
                velit. Sit amet feugiat nulla, scelerisque sit amet nulla.
                Nullam commodo massa, id eleifend nisl, eu feugiat lobortis.
                Praesent mauris purus luctus eget cursus, eu porttitor arcu.
                Nunc sollicitudin nulla accumsan turpis. Morbi convallis
                porttitor vel blandit lorem. Duis convallis porttitor vel
                blandit lorem. Duis convallis porttitor vel blandit lorem.
              </p>
            </div>

            {/* Code Snippet */}
            <div className="space-y-2">
              <h3 className="uppercase text-sm font-mono">
                CODE SNIPPET LOREM IPSUM
              </h3>
              <div className="bg-black text-white p-4 font-mono text-sm">
                <pre>
                  <code>
                    {`const foobar = () => {
  const [selected, setSelected] = useState(false);
  
  useEffect(() => {
    setInterval(() => {
      setSelected(!prev.selected);
    }, 1000);
  }, []);
  
  if (selected) {
    console.log("Selected!");
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Project Image/Placeholder (smaller) */}
            <div className="bg-gray-200 h-48 border border-gray-300 flex items-center justify-center">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="border-t border-gray-400 w-full absolute"></div>
                  <div className="border-l border-gray-400 h-full absolute transform rotate-45"></div>
                  <div className="border-l border-gray-400 h-full absolute transform -rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Project Name */}
            <div className="text-orange-500 font-bold text-2xl">
              PROJECT NAME
            </div>

            {/* Why I Chose This Framework */}
            <div className="space-y-4">
              <h2 className="uppercase text-sm font-mono">
                WHY DID I CHOOSE THIS FRAMEWORK PROJECT SUBHEADINGS?
              </h2>
              <p className="text-sm">
                Project body text Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Etiam a eleifend augue. Morbi turpis molestie,
                mauris est in tristique accumsan, risus leo pellentesque diam,
                et interdum tellus elit non risus. Maecenas eget consectetur
                velit. Sit amet feugiat nulla, scelerisque sit amet nulla.
                Nullam commodo massa, id eleifend nisl, eu feugiat lobortis.
                Praesent mauris purus luctus eget cursus, eu porttitor arcu.
                Nunc sollicitudin nulla accumsan turpis. Morbi convallis
                porttitor vel blandit lorem.
              </p>
            </div>

            {/* Code Snippet */}
            <div className="space-y-2">
              <h3 className="uppercase text-sm font-mono">
                CODE SNIPPET LOREM IPSUM
              </h3>
              <div className="bg-black text-white p-4 font-mono text-sm">
                <pre>
                  <code>
                    {`const foobar = () => {
  const [selected, setSelected] = useState(false);
  
  useEffect(() => {
    setInterval(() => {
      setSelected(!prev.selected);
    }, 1000);
  }, []);
  
  if (selected) {
    console.log("Selected!");
  }
}`}
                  </code>
                </pre>
              </div>
            </div>

            {/* Mockup note */}
            <div className="text-sm text-gray-600 mt-4">
              <p>Mockup for code snippet</p>
              <p className="mt-2">
                Project would have an actual code box that can display code
                syntax as well as live code examples
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EODP;
