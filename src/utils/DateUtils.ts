export class DateUtils {
  public static formatterYMDByTimeStamp(timeStamp: number): string {
    let date = new Date(timeStamp)
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1): date.getMonth() + 1) + '-'
    let D = (date.getDate() < 10 ? '0' + date.getDate(): date.getDate())
    return Y + M + D
  }

  public static formatterYMDhmByTimeStamp(timeStamp: number): string {
    let date = new Date(timeStamp)
    let YMD = DateUtils.formatterYMDByTimeStamp(timeStamp)
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    return YMD + h + m
  }

  public static getCurrentTimeStamp (): number {
    return new Date().getTime()
  }

  public static compareWithCurrentTimeStamp(dateStamp: number): boolean {
    let isGreaterThan = false
    const nowTime = new Date().getTime()
    if (dateStamp - nowTime > 0) {
      isGreaterThan = true
    }
    return  isGreaterThan
  }

  public static dayToYears (days: number): number {
    return Math.floor(days / 365 * 10) / 10
  }

  public static timeToTimeStamp<T> (time: string): number {
    return new Date(Date.parse(time.replace(/-/g, '/'))).getTime()
  }

  public static timeSecondToHMS (second: number): string {
    let h = Math.floor(second / 3600)
    let m = Math.floor((second % 3600) / 60)
    let s = Math.floor((second % 3600) % 60)
    let strH = h < 10 ? '0' + h : h
    let strM = m < 10 ? '0' + m : m
    let strS = s < 10 ? '0' + s : s

    return strH + ':' + strM + ':' + strS
  }
}
