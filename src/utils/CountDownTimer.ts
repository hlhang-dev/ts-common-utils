import { StringUtils } from './StringUtils'
import SystemTimerMap from './SystemTimerMap'


export default class CountDownTimer {
    private countdownId: string = StringUtils.getRandomStr()

    private second: number

    private timer?: NodeJS.Timer | undefined

    private readonly callback: (residueDegree: number) => void

    constructor(second: number, callback: (residueDegree: number) => void) {
        this.second = second
        this.callback = callback
    }

    private checkCurrentTimer() {
        let second = 0
        if (SystemTimerMap.has(this.countdownId)) {
            second = SystemTimerMap.get(this.countdownId) as number
            this.second = second
        }
    }

    startCountdown() {
        this.checkCurrentTimer()
        this.timer = setInterval(() => {
            this.second = this.second - 1
            if (this.second <= 0) {
                this.stopCountdown()
            }
            this.callback(this.second)
        }, 1000)
    }

    stopCountdown() {
        clearInterval(this.timer)
        SystemTimerMap.delete(this.countdownId)
    }

    pauseCountdown() {
        if (this.timer) {
            SystemTimerMap.set(this.countdownId, this.second)
            clearInterval(this.timer)
        }
    }
}
