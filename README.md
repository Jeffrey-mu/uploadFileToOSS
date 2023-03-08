
# upload-files-to-oss
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
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

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/upload-files-to-oss/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/upload-files-to-oss

[npm-downloads-src]: https://img.shields.io/npm/dm/upload-files-to-oss.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/upload-files-to-oss


