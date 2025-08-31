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
	// Use root path for user GitHub Pages (daliskafroyan.github.io)
	// Change to '/portfolio-site/' if using project pages
	base: '/',
});
