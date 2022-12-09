import {
  JsonConverter,
  JsonCustomConvert
} from 'json2typescript'
@JsonConverter
export class StringToBooleanConverter implements JsonCustomConvert<boolean> {
  serialize (data: boolean): any {
    return null
  }
  deserialize (data: string): boolean {
    return Number(data) === 1
  }
}
