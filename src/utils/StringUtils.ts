import {UserSexEnum} from "../definition/UserSex";

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
    return (typeof str === 'string' && str.length === 0)
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

  public static isCorrectMobilePhoneFormat (phone: string) {
    return /^1[0-9]{10}$/.test(phone)

  }

  public static isIdCard(idCard: string) {
    let isIdCard = false
    const IdCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (IdCardReg.test(idCard)) {
      isIdCard = true
    }
    return isIdCard
  }

  public static getBirthdayIdCard(idCard: string) {
    return idCard.substring(6, 10) + '-' + idCard.substring(10, 12) + '-' + idCard.substring(12, 14)
  }

  public static getSexByIdCard(idCard: string) {
    let sexEnum = UserSexEnum.UNKNOWN
    if (parseInt(idCard.substr(16, 1)) % 2 === 1) {
      sexEnum = UserSexEnum.MAN
    } else {
      sexEnum = UserSexEnum.WOMAN
    }
    return sexEnum
  }

  public static getAgeByIdCard(idCard: string) {
    const ageDate = new Date()
    const month = ageDate.getMonth() + 1
    const day = ageDate.getDate()
    let age = ageDate.getFullYear() - Number(idCard.substring(6, 10)) - 1
    if (Number(idCard.substring(10, 12)) < month || Number(idCard.substring(10, 12)) === month && Number(idCard.substring(12, 14)) <= day) {
      age++
    }
    if (age <= 0) {
      age = 1
    }
    return age
  }
}
