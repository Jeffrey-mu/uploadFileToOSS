
# upload-files-to-oss
- 上传指定文件夹内所有文件到oss

## 使用
-
```ts
type Option = {
  region: string,
  accessKeyId: string,
  accessKeySecret: string,
  bucket: string,
  limit?: number, // 异步任务数量 默认200
}
```
```js
// esm

import uploadFileToOSS from 'upload-files-to-oss'
uploadFileToOSS(
  {
    region: 'xxx',
    accessKeyId: 'xxx',
    accessKeySecret: 'xxx',
    bucket: 'xxx'
  },
  // '文件夹路径'
  '../dist'
)
// ejs
const  uploadFileToOSS = require('upload-files-to-oss')
uploadFileToOSS(
  {
    region: 'xxx',
    accessKeyId: 'xxx',
    accessKeySecret: 'xxx',
    bucket: 'xxx'
  },
  // '文件夹路径'
  '../dist'
)
```
## License

[MIT](./LICENSE) License © 2022 [Jeffrey-mu](https://github.com/Jeffrey-mu)
