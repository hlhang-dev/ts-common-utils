export class Utils {
  public static isBoolean<T>(object: T) {
    return object && typeof object === 'boolean'
  }

  public static isValidPhone (phone: string) {
    return /^1[0-9]{10}$/.test(phone)
  }

  public static hasValue<T>(param: T) {
    let hasValue: boolean
    if (param === undefined || param === null) {
      hasValue = false
    }else if (typeof param === 'string') {
      hasValue = !(param === '')
    } else if (typeof param === 'number') {
      hasValue = isNaN(param)
    } else if (Array.isArray(param)) {
      hasValue = (param.length !== 0)
    } else {
      hasValue = true
    }
    return hasValue
  }
}
