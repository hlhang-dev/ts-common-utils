export class StringUtils {
  public static isEmpty<T>(str: T): boolean {
    return (str && typeof str === 'string' && str.length === 0)
  }

  public static isNotEmpty<T>(str: T): boolean {
    return str && typeof str === 'string' && str.length > 0
  }

  public static isStr<T>(str: T): boolean {
    return (str && typeof str === 'string')
  }

  public static isSame(str: string, secondStr: string) {
    return str === secondStr
  }
}
