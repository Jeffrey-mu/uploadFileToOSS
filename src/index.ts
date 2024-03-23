import path from 'node:path'
import OSS from 'ali-oss'
import async from 'async'
import fg from 'fast-glob'
import { consola } from 'consola'
interface Option {
  region: string
  accessKeyId: string
  accessKeySecret: string
  bucket: string
  limit?: number
}

export default async function uploadFileToOSS(option: Option, localFileAddress: string) {
  consola.info('Using fast-glob ali-oss consola')
  const startTime = +new Date()
  const { limit = 200 } = option
  consola.start('初始化client...')
  const client = new OSS(option)
  const files = fg.sync(`${localFileAddress}/**`)
  consola.info(`一共${files.length}个文件`)
  async.parallelLimit(
    files.map((file) => {
      return async () => {
        try {
          const result = await client.put(file.split(localFileAddress.split('/').at(-1) as string)[1].slice(1), path.normalize(file))
          if (result.res.status === 200) {
            consola.success(`${file}上传成功！`)
            return true
          }
          else {
            consola.error(`${file}上传失败！`)
            return false
          }
        }
        catch (error) {
          consola.error(error)
          return false
        }
      }
    })
    , limit, (err: any, results: any) => {
      if (err)
        consola.warn(`Error: ${err.message}`)
      if (results.every((item: boolean) => item)) {
        const endTime = +new Date()
        consola.success(`文件全部上传成功，耗时：${endTime - startTime}ms`)
      }
    })
}
