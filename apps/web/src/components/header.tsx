import { ModeToggle } from "./mode-toggle";

export default function Header() {
	return (
	  <div className="bg-white dark:bg-gray-950">
		<div className="grid min-h-0 grid-cols-1 grid-rows-[1fr] justify-center [--gutter-width:20rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">
		  {/* Candy cane - left side */}
		  <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"></div>
  
		  {/* Main header content */}
		  <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
			<div className="flex items-center gap-4">
			  {/* Logo or brand content can go here */}
			</div>
			<div className="flex items-center gap-6">
			  <ModeToggle />
			</div>
		  </div>
  
		  {/* Candy cane - right side */}
		  <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:col-start-3 md:block dark:[--pattern-fg:var(--color-white)]/10"></div>
		</div>
	  </div>
	);
  }
  