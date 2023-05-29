export class DateUtils {
    private static _instance: DateUtils

    public static secondLevel: number = 1

    private static nowDate: Date

    public static getInstance(timeStamp: number = 0) {
        if (!DateUtils._instance) {
            DateUtils._instance = new DateUtils()
        }
        DateUtils.nowDate = new Date()
        DateUtils.nowDate.setTime(timeStamp / DateUtils.secondLevel)
        return DateUtils._instance
    }

    public formatterYMDByTimeStamp(): string {
        let date = DateUtils.nowDate
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
        return Y + M + D
    }

    public formatterYMDhmByTimeStamp(): string {
        let date = DateUtils.nowDate
        let YMD = this.formatterYMDByTimeStamp()
        let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
        let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        return YMD + ' ' + h + m
    }

    public formatterYMDhmsByTimeStamp(): string {
        let date = DateUtils.nowDate
        let YMDhm = this.formatterYMDhmByTimeStamp() + ':'
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        return YMDhm + s
    }

    public getCurrentTimeStamp(): number {
        return new Date().getTime()
    }

    public compareWithCurrentTimeStamp(): boolean {
        let isGreaterThan = false
        const nowTime = new Date().getTime()
        if ((DateUtils.nowDate.getTime()) - nowTime > 0) {
            isGreaterThan = true
        }
        return isGreaterThan
    }

    public dayToYears(days: number): number {
        return Math.floor(days / 365 * 10) / 10
    }

    public timeToTimeStamp<T>(time: string): number {
        return new Date(Date.parse(time.replace(/-/g, '/'))).getTime()
    }

    public timeSecondToHMS(second: number): string {
        let h = Math.floor(second / 3600)
        let m = Math.floor((second % 3600) / 60)
        let s = Math.floor((second % 3600) % 60)
        let strH = h < 10 ? '0' + h : h
        let strM = m < 10 ? '0' + m : m
        let strS = s < 10 ? '0' + s : s

        return strH + ':' + strM + ':' + strS
    }
}
