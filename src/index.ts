import OSS from 'ali-oss'
import path from 'path'
import fs from 'fast-glob'
type Option = {
  region: string,
  accessKeyId: string,
  accessKeySecret: string,
  bucket: string
}
export default async function uploadFileToOSS(option: Option, localFileAddress: string) {
  let client = new OSS(
    option
  );
  const docs = fs.sync(localFileAddress + '/**')
  let fileTotal = docs.length;
  docs.forEach(async (file, index) => {
    await client.put(file.split(localFileAddress.split('/').at(-1) as string)[1].slice(1), path.normalize(file));
    console.log(`文件上传中:${fileTotal} /${index + 1}`);
  })
}
