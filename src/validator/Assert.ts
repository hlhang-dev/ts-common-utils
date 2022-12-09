import { StringUtils } from '../utils/StringUtils'
import { IllegalArgumentException } from '../exception/IllegalArgumentException'
import { ObjectUtils } from '../utils/ObjectUtils'
import { Utils } from '../utils/Utils'

export abstract class Assert {
  public static hasText<T>(str: T, message: string): void {
    if (StringUtils.isEmpty(str)) {
      throw new IllegalArgumentException(message)
    }
  }

  public static isEmpty<T>(param: T, message: string): void {
    if (!Utils.hasValue(param)) {
      throw new IllegalArgumentException(message)
    }
  }

  public static hasObject<T extends object>(obj: T, message: string): void {
    if (ObjectUtils.isEmpty(obj)) {
      throw new IllegalArgumentException(message)
    }
  }

}
