// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 如果您的 repository 名稱是 'birthday-app'
export default defineConfig({
  plugins: [react()],
  base: '/birthday-app/', // 替換為您的 repository 名稱
});
