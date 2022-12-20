import {JsonConverter, JsonCustomConvert,} from 'json2typescript'

@JsonConverter
export class StringToFloatConverter implements JsonCustomConvert<number> {
  serialize (data: number): any {
    return null
  }
  deserialize (data: string): number {
    return parseFloat(data)
  }
}
