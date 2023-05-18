import { JsonConverter,JsonCustomConvert } from 'json2typescript'

@JsonConverter
export class StringToNumConverter implements JsonCustomConvert<number> {
  serialize (data: number): any {
    return null
  }
  deserialize (data: string): number {
    return (parseInt(data,10) || 0)
  }
}
