import { JsonConverter,JsonCustomConvert } from 'json2typescript'
import { DateUtils } from '../../utils/DateUtils'

@JsonConverter
export class StringToDateConverter implements JsonCustomConvert<string> {
  serialize (data: string): any {
    return null
  }
  deserialize (data: string): string {
    return DateUtils.startTimeYMDh(Number(data) * 1000)
  }
}
