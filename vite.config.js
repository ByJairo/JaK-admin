import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),],
    //这是一个坑，如果不加这个，vite会报错
    server: {
        proxy: {
            '/api': {
                target: 'https://thenewstep-system.herokuapp.com/',
                changeOrigin: true,
            }
        }
    },
    base:'./'
})
