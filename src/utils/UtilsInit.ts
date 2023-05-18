import { DateUtils } from './DateUtils'

/**
 * @author  heninghang
 * @package
 * @date  2022/12/20
 */
export class UtilsInit {
    protected static _instance: UtilsInit

    public static getInstance() {
        if (!this._instance) {
            this._instance = new UtilsInit()
        }
        return this._instance
    }
    getInstance () {

    }
    public init(conversionToSeconds: number = 1) {
        DateUtils.secondLevel = conversionToSeconds
    }
}
