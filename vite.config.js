import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Change this to 5173 (or any free port)
    strictPort: true
  }
});
