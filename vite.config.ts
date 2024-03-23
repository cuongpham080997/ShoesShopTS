import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const isDev = mode === 'development'
    // process.env = {};

    const url = loadEnv(mode, process.cwd()).VITE_BASE_URL;
    console.log("-------------------");
    console.log(url);
    console.log("-------------------");

    return {
        plugins: [react()],

        esbuild:{
            //Khi build thành product thì sẽ xoá đi các câu lệnh consle và debugger
            drop: isDev ? [] : ['console','debugger']
        },

        // Setup đường dẫn absolute
        resolve: {
            alias: {
                "@": "/src",
                "~": "/public",
                src: "/src",
            },
        },
    };
});
