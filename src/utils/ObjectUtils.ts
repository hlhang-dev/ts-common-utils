import { Utils } from './Utils'

export class ObjectUtils {

  public static isEmpty<T extends object>(obj: T): boolean {
    return ObjectUtils.isObject(obj) && Reflect.ownKeys(obj).length === 0
  }

  public static isObject<T>(obj: T): boolean {
    return obj && obj instanceof Object
  }

  public static isSame() {

  }

  public static appendToFomData<T> (obj: T) {
    const formData = new FormData()
    for (const key in obj) {
      const itemValue = obj[key]
      if (Utils.hasValue(itemValue)) {
        // @ts-ignore
        formData.append(key,<string>itemValue)
      }
    }

    return formData
  }
}
