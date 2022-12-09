import {
  JsonConverter,
  JsonCustomConvert,
} from 'json2typescript'
@JsonConverter
export class ObjectToMapConverter implements JsonCustomConvert<Map<string, string>> {
  serialize (data: Map<string, string>): any {
    return null
  }
  deserialize (data: any): Map<string, string> {
    let objMap: Map<string, string> = new Map<string, string>()
    let _a = Object.keys(data)
    for (let _i = 0; _i < _a.length; _i++) {
      let propertyKey = _a[_i]
      objMap.set(propertyKey,data[propertyKey])
    }
    return objMap
  }
}
