export class CountdownCounter {

  private countdownNumber: number
  private timer!: NodeJS.Timer
  private readonly callback: (residueDegree: number) => void

  constructor (countdownNumber: number, callback: (residueDegree: number) => void) {
    this.countdownNumber = countdownNumber
    this.callback = callback
  }

  startCountdown () {
    this.timer = setInterval(() => {
      this.countdownNumber = this.countdownNumber - 1000
      if (this.countdownNumber <= 0) {
        this.stopCountdown()
      }
      this.callback(this.countdownNumber)
    }, 1000)
  }

  private stopCountdown () {
    clearInterval(this.timer)
  }

  pauseCountdown() {
    clearInterval(this.timer)
  }
}
