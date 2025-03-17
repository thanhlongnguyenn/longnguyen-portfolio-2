
import { Timeline } from "../components/timeline";

export const About = () => {
  const data = [
    {
      title: "2025 - Present",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            💼 Landed my first internship as a Software Developer at FPT
            Australasia!
          </p>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            🎓 Expecting my graduation soon!
          </p>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Dove deep into my Computing and Software Systems degree at UniMelb
          </p>
          <div className="mb-8 font-medium">
            <div className="flex gap-2 items-center text-sm md:text-md font-mono">
              My key takeaways:
            </div>
            <div className="flex gap-2 items-center text-sm md:text-md font-mono">
              🔐 Learned that released datasets usually have some noise to
              protect privacy through COMP20008
            </div>
            <div className="flex gap-2 items-center text-sm md:text-md font-mono">
              🧮 Refined my data structures and algorithms through COMP20003 and
              Leetcode questions
            </div>
            <div className="flex gap-2 items-center text-sm md:text-md font-mono">
              ⚖️ Balanced my academic responsibilities with other life
              commitments
            </div>
            <div className="flex gap-2 items-center text-sm md:text-md font-mono pt-2">
            ... and many more!
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-sm font-medium md:text-md font-mono mb-8">
            Started my adulthood at The University of Melbourne
          </p>
          <div className="mb-8 font-medium">
            <div className="flex gap-2 items-center text-sm md:text-md font-mono">
              At a glance:
            </div>
            <div className="flex gap-2 items-center text-sm md:text-md font-mono">
              👨🏻‍💻 Wrote my first line of code in Python and C
            </div>
            <div className="flex gap-2 items-center text-sm md:text-md font-mono">
              🍕 Somehow know how to make 150+ pizza doughs in 1 hour (Thanks,
              Dominos)
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-24 lg:pt-34">
        <h1 className="font-bold text-[30px]">ABOUT ME</h1>
        <h2 className="font-semibold text-lg font-mono text-[#FF611D]">
          CODE.EAT.SLEEP.REPEAT
        </h2>
        <Timeline data={data} />
      </div>
    </div>
  );
};
