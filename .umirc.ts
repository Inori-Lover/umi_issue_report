import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {},
  hash: true
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
});
