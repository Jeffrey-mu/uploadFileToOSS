import OSS from 'ali-oss'
import async from 'async'
import path from 'path'
import fs from 'fast-glob'
import { logger } from './common'
type Option = {
  region: string,
  accessKeyId: string,
  accessKeySecret: string,
  bucket: string,
  limit?: number,
}
export default async function uploadFileToOSS(option: Option, localFileAddress: string ) {
  const { limit = 200 } = option;
  let client = new OSS(
    option
  );
  const docs = fs.sync(localFileAddress + '/**')
  let fileTotal = docs.length;
  async.parallelLimit(
    docs.map((file, index) => {
      return async () => {
        await client.put.bind(null, file.split(localFileAddress.split('/').at(-1) as string)[1].slice(1), path.normalize(file))
        logger.info(`\u6587\u4EF6\u4E0A\u4F20\u4E2D:${fileTotal} /${index + 1}`);
        return true
      };
    })
    , limit, (err: any, results: any) => {
      if (err) {
        logger.warn(`Error: ${err.message}`);
      } else {
        if (results.every((item: boolean) => item))
          logger.fatal(`Results: 文件全部上传成功`);
      }
    })

}
