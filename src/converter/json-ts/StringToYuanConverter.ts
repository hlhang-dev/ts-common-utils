import {
  JsonConverter,
  JsonCustomConvert
} from 'json2typescript'
@JsonConverter
export class StringToYuanConverter implements JsonCustomConvert<number> {
  serialize (data: number): any {
    return null
  }
  deserialize (data: string): number {
    return Math.floor(Number(data) * 100) / 100
  }
}
