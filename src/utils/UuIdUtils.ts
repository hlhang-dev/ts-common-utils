import { Lang } from '../Lang'

/**
 * @author  heninghang
 * @package
 * @date  2023/3/10
 */
class UuIdUtils {
    private static _instance: UuIdUtils

    public static getInstance() {
        if (!UuIdUtils._instance) {
            UuIdUtils._instance = new UuIdUtils()
        }

        return UuIdUtils._instance
    }

    public generateUuid(length: number = 32, radix: number = 24) {
        let chars: string[] = Lang.ALL_LETTER.split('')
        let uuid: string[] = [], i
        radix = radix || chars.length
        if (length) {
            // Compact form
            for (i = 0; i < length; i++) {
                uuid[i] = chars[0 | Math.random() * radix]
            }
        } else {
            let r: number
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
            uuid[14] = '4'
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
                }
            }
        }
        return uuid.join('')
    }
}

export {
    UuIdUtils
}
