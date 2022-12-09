import { validate, ValidatorOptions } from 'class-validator'
import { ArrayUtils } from '../utils/ArrayUtils'

export class MyValidator {
  private static _instance: MyValidator

  public static getInstance(): MyValidator {
    if (!MyValidator._instance) {
      MyValidator._instance = new MyValidator()
    }
    return MyValidator._instance
  }

  async doValidateJson(data: object, callback: (success: boolean,message?: string) => void,validatorOptions: ValidatorOptions = {stopAtFirstError: true}) {
    let message: string = ''
    let success: boolean = false
    const validationErrors = await validate(data, validatorOptions)
    if (ArrayUtils.isEmpty(validationErrors)) {
      success = true
      message = '校验成功'
    }else {
      const constraints = ArrayUtils.getArrayFirst(validationErrors).constraints
      for (let constraintsKey in constraints) {
        message = constraints[constraintsKey]
        break
      }
      success = false
    }
    callback(success,message)
  }
}
