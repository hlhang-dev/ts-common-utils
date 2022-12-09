import { JsonConverter,JsonCustomConvert } from 'json2typescript'

@JsonConverter
export class NumberToStringConverter implements JsonCustomConvert<string> {
  serialize (data: string): any {
    return null
  }
  deserialize (data: number): string {
    return String(data)
  }
}
