import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		tailwindcss() as any,
		...(reactRouter() as any),
		tsconfigPaths() as any,
	],
	// Base path for GitHub Pages project (portfolio-site repository)
	base: '/portfolio-site/',
});
