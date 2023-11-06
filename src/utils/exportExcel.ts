import dayjs from 'dayjs'
import { utils, writeFile } from 'xlsx'

export type ColumnTypes = {
  title: string
  dataIndex: string
}

export const exportExcel = <T>(data: any[], columns: ColumnTypes[], fileName: string, resourceType: string) => {
  const exportArr = new Array<string[]>()
  exportArr[0] = [...columns.map((v) => v.title)]

  data?.forEach((val: { [key in string]: string }, idx: number) => {
    exportArr[idx + 1] = new Array<string>()

    for (let i = 0; i < columns.length; i += 1) {
      let temp = ''

      if (columns[i].dataIndex === 'useDate') {
        temp = dayjs(val[columns[i].dataIndex]).format('YYYY/M/D')
      } else {
        temp = val[columns[i].dataIndex]
      }

      exportArr[idx + 1][i] = temp
    }
  })
  const wb = utils.book_new()
  const ws = utils.aoa_to_sheet(exportArr)
  utils.book_append_sheet(wb, ws, fileName)
  writeFile(wb, fileName)
}
