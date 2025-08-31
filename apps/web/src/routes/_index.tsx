import GridContainer from "@/components/grid-container";
import  Header  from "@/components/header";
import { Projects } from "@/components/projects";
import { WorkExperience } from "@/components/work-experience";
import { WORK_EXPERIENCE } from "@/data/experience";

// import {
//   MinimalCard,
//   MinimalCardDescription,
//   MinimalCardImage,
//   MinimalCardTitle,
// } from "@/components/ui/minimal-card"

// export function MinimalCardDemo() {
//   const cards = [
//     {
//       title: "Sick title",
//       description:
//         "How to design with gestures and motion that feel intuitive and natural.",
//       src: "https://pbs.twimg.com/media/GgMiuRpa4AAoW2y?format=jpg&name=medium",
//     },
//     {
//       title: "Sick title",
//       description:
//         "How to design with gestures and motion that feel intuitive and natural.",
//       src: "https://pbs.twimg.com/media/GgHZJN0aoAA__92?format=jpg&name=medium",
//     },
//     {
//       title: "Sick title",
//       description:
//         "How to design with gestures and motion that feel intuitive and natural.",
//       src: "https://pbs.twimg.com/media/GgCPjsQacAAWvm3?format=jpg&name=medium",
//     },
//   ]
//   return (
//     <div className="w-full">
//       <div className="flex flex-col justify-center rounded-lg p-4">
//         <div className="grid grid-cols-2 gap-4">
//           {cards.map((card, index) => (
//             <MinimalCard className="w-full" key={index}>
//               <MinimalCardImage
//                 className="h-[320px]"
//                 src={card.src}
//                 alt={card.title}
//               />
//               <MinimalCardTitle>{card.title}</MinimalCardTitle>
//               <MinimalCardDescription className="mt-2">
//                 {card.description}
//               </MinimalCardDescription>
//             </MinimalCard>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


// export const Route = createFileRoute("/")({
//   component: HomeComponent,
// });

export default function HomeComponent() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <div className="fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10">
        <Header />
      </div>

      <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:20rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">
        {/* Candy cane - left side */}
        <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"></div>

        {/* Main content area */}
        <div className="grid gap-24 pb-24 text-gray-950 sm:gap-40 md:pb-40 dark:text-white">
          <section>
            <GridContainer lines="bottom">
              <div className="flex items-center gap-4">
                <div className="border-r p-2">
                  <img
                    src="/avatar.jpg"
                    alt="Avatar"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-0">
                  <h1 className="font-mono text-2xl font-bold">
                    Firsta Royan D.
                  </h1>
                  <h5 className="font-mono">
                    Software Engineer
                  </h5>
                </div>
              </div>
            </GridContainer>
            <div className="p-4">
			{/* <p className="mt-6 font-mono text-sm text-muted-foreground"> */}
              <p className="text-sm text-muted-foreground font-mono">
                Hello Internet! I'm Roy, a software engineer in Jakarta with 4+ years of professional full‑stack experience (frontend frameworks, backend services, and deployment workflows). thrive on rapidly learning emerging technologies and am currently focused on infrastructure and self‑hosting initiatives.
              </p>

            </div>
            {/* <GridContainer className="flex items-center gap-4 p-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </GridContainer> */}
			<GridContainer lines="top">
            {/* <div className="w-full h-4 hidden border border-y-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"></div> */}
            <div className="w-full h-4 hidden bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"></div>
            </GridContainer>
			<GridContainer className="px-4">
              <h2 className="text-3xl font-semibold">Experience</h2>
            </GridContainer>
            <WorkExperience experiences={WORK_EXPERIENCE} />
            <div className="w-full h-4 hidden bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"></div>
            <GridContainer className="px-4">
              <h2 className="text-3xl font-semibold">Projects</h2>
            </GridContainer>
            <Projects />
            {/* <GridContainer lines="top">
            <div className=" w-full h-4 hidden bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"></div>
            </GridContainer> */}
            {/* <GridContainer className="px-4">
              <h2 className="text-3xl font-semibold">Blog</h2>
            </GridContainer> */}
            {/* <MinimalCardDemo /> */}
          </section>
        </div>

        {/* Candy cane */}
        <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:col-start-3 md:block dark:[--pattern-fg:var(--color-white)]/10"></div>

        {/* Footer */}
        <footer className="col-start-1 row-start-3 grid md:col-start-2">
          <div className="border-t border-black/5 dark:border-white/10 px-4 py-8 md:px-6 lg:px-8">
            <p className="text-center text-sm text-muted-foreground font-mono">
              Inspired by the{" "}
              <a 
                href="https://tailwindcss.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Tailwind CSS website
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
