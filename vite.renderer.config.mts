// https://vite.dev/guide/troubleshooting#config

import { defineConfig } from 'vite'

// @ts-ignore
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        flowbiteReact(),
    ],
})