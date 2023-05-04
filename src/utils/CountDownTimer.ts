import SystemTimerMap from './SystemTimerMap'
import { UuIdUtils } from './UuIdUtils'


export class CountDownTimer {
    private readonly countdownId: string = ''

    private second: number

    private timer?: NodeJS.Timer | undefined

    private readonly callback: (residueDegree: number) => void

    private readonly onEndCallback?: (id: string) => void

    constructor(second: number, callback: (residueDegree: number) => void,onEndCallback?:(id: string) => void,countdownId?: string) {
        this.second = second
        this.callback = callback
        this.countdownId = countdownId || UuIdUtils.getInstance().generateUuid(64)
        if (onEndCallback) {
            this.onEndCallback = onEndCallback
        }
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
                if (this.onEndCallback) {
                    this.onEndCallback(this.countdownId)
                }
                this.stopCountdown()
            }
            this.callback(this.second)
        }, 1000)
    }

    stopCountdown() {
        if (this.timer) {
            clearInterval(this.timer)
            SystemTimerMap.delete(this.countdownId)
        }
    }

    pauseCountdown() {
        if (this.timer) {
            SystemTimerMap.set(this.countdownId, this.second)
            clearInterval(this.timer)
        }
    }
}
