import { defineConfig } from 'umi';
export default defineConfig({
  define:{
    "process.env.UMI_ENV": 'sit',
    "OSS_END_POINT": 'https://www.xxx.oss-cn-shanghai.aliyuncs.com',
  }
})

