import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  // { path: '/', component: '@/pages/index' },
  // ],
  layout: {},
  fastRefresh: {},
  ssr: {
    // devServerRender: false
  }
});
