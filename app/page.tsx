import Card from "./components/card";

import CalculatorImg from "../public/images/icon-calculator.svg";
import KarmaImg from "../public/images/icon-karma.svg";
import SupervisorImg from "../public/images/icon-supervisor.svg";
import TeamBuilderImg from "../public/images/icon-team-builder.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-200">
      <section className="text-center gap-2 flex flex-col">
        <h1 className="text-gray-400 text-xl">Reliable, efficient delivery</h1>
        <h2 className="text-gray-500 text-xl font-bold">
          Powered by Technology
        </h2>
        <p className="text-gray-500 text-sm font-bold">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </section>
      <section className="flex flex-row justify-center items-center gap-8 pt-10">
        <Card
          title="Supervisor"
          description="Monitors activity to identify project roadblocks"
          imageSrc={SupervisorImg}
          stripColor="hsl(180, 62%, 55%)"
        />
        <section className="flex flex-col gap-8">
          <Card
            title="Team Builder"
            description="Scans our talent network to create the optimal team for your project"
            imageSrc={TeamBuilderImg}
            stripColor="hsl(0, 78%, 62%)"
          />
          <Card
            title="Karma"
            description="Regularly evaluates our talent to ensure quality"
            imageSrc={KarmaImg}
            stripColor="hsl(34, 97%, 64%)"
          />
        </section>
        <Card
          title="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          imageSrc={CalculatorImg}
          stripColor="hsl(212, 86%, 64%)"
        />
      </section>
    </main>
  );
}
