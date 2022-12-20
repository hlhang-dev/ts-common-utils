import { JsonConverter,JsonCustomConvert } from 'json2typescript'
import { DateUtils } from '../../utils/DateUtils'

@JsonConverter
export class StringToDateConverter implements JsonCustomConvert<string> {
  public static conversionToSeconds: number = 0
  serialize (data: string): any {
    return null
  }
  deserialize (data: string): string {
    return DateUtils.formatterYMDByTimeStamp(Number(data) * StringToDateConverter.conversionToSeconds)
  }
}
