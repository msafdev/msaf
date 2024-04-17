import { BundledLanguage } from "shiki";
import Requirements from "@/components/doc/requirement";

export default function Usage() {
  const steps = [
    {
      title: "Install Next and Tailwind",
      description: "Start by creating a new Next.js project.",
      code: "npx create-next-app@latest my-app --typescript --tailwind",
      lang: "shell",
    },
    {
      title: "Run the CLI",
      description: "Run the shadcn-ui CLI to setup the project.",
      code: "npx shadcn-ui@latest init",
      lang: "shell",
    },
    {
      title: "Configure components.json",
      description:
        "You will be asked a few questions to configure. Use CSS variables.",
      code: "1  Do you want to use CSS variables for colors? › no / yes",
      lang: "markdown",
    },
    {
      title: "Customize the theme",
      description: "Copy the theme from shadcn-ui to your project's CSS.",
      code: `@layer base {
  :root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 142.1 76.2% 36.3%;
  --primary-foreground: 355.7 100% 97.3%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 142.1 76.2% 36.3%;
  --radius: 0.5rem;
  }
      
  .dark {
  --background: 20 14.3% 4.1%;
  --foreground: 0 0% 95%;
  --card: 24 9.8% 10%;
  --card-foreground: 0 0% 95%;
  --popover: 0 0% 9%;
  --popover-foreground: 0 0% 95%;
  --primary: 142.1 70.6% 45.3%;
  --primary-foreground: 144.9 80.4% 10%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 0 0% 15%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 12 6.5% 15.1%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 85.7% 97.3%;
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 142.4 71.8% 29.2%;
  }
}`,
      lang: "markdown",
    },
    {
      title: "Add Tailwind Directives",
      description:
        "These are not required, but some of the components have these classNames for styling.",
      code: `@layer components {
  .anim {
    @apply transition-all duration-300 ease-in-out;
  }
}`,
      lang: "markdown",
    },
    {
      title: "Install recurring dependencies.",
      description:
        "Install the dependencies that are oftenly used here. Don't worry, most of them are small in size (e.g. icons).",
      code: `#icons
npm i @radix-ui/react-icons lucide-react react-icons`,
      lang: "shell",
    },
    {
      title: "That's it!",
      description:
        "You can now start adding components to your project. Just paste the components from the documentation and start the development server.",
      code: "npm run dev",
      lang: "shell",
    },
  ];

  return (
    <div className="flex h-full max-w-xl grow flex-col">
      <h1 className="text-2xl font-semibold text-foreground">Usage</h1>
      <p className="mb-6 mt-3 text-sm text-muted-foreground md:text-base">
        This project was made for{" "}
        <span className="font-medium text-foreground">Next</span> and{" "}
        <span className="font-medium text-foreground">Tailwind</span>. Follow
        these steps to use this project:
      </p>
      <div className="flex w-full flex-col">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col pb-6 pl-6 ${
              index === steps.length - 1 ? "" : "border-l"
            }`}
          >
            <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border bg-secondary">
              <p className="text-xs font-medium text-secondary-foreground">
                {index + 1}
              </p>
            </div>
            <h2 className="text-lg font-semibold text-foreground">
              {step.title}
            </h2>
            <p className="mb-4 mt-3 text-sm text-muted-foreground md:text-base">
              {step.description}
            </p>
            <Requirements
              requirements={[step.code]}
              lang={step.lang as BundledLanguage}
            />
          </div>
        ))}
      </div>
      <h2 className="mb-3 text-lg font-semibold text-foreground">Typescript</h2>
      <p className="text-sm text-muted-foreground md:text-base">
        This project was made with TypeScript. You are recommended to use
        TypeScript for better type safety.
      </p>
    </div>
  );
}
