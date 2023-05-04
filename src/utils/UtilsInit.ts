import { DateUtils } from './DateUtils'

/**
 * @author  heninghang
 * @package
 * @date  2022/12/20
 */
export class UtilsInit {
    public static init(conversionToSeconds: number = 1) {
        DateUtils.secondLevel = conversionToSeconds
    }
}
