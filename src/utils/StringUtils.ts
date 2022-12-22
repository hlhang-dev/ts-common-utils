export class StringUtils {

  public static getRandomStr(): string {
    let chars = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]
    let res = ''
    for (let i = 0; i < 10; i++) {
      let id = Math.ceil(Math.random() * 35)
      res += chars[id]
    }
    return res
  }
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
