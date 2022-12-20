import {StringToDateConverter} from "../converter/json-ts/StringToDateConerter";

/**
 * @author  heninghang
 * @package
 * @date  2022/12/20
 */
export class UtilsInit {
    init(conversionToSeconds: number = 0) {
        StringToDateConverter.conversionToSeconds = conversionToSeconds
    }
}
