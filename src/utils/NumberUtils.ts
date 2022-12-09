export class NumberUtils {
    public static noRoundingNumberOfOrders (member: string, numberOfDigits: number) {
        let result = '0'
        if (Number(member) && numberOfDigits > 0) { // 简单的做个判断
            numberOfDigits = +numberOfDigits || 2
            member = member + ''
            if (/e/.test(member)) { // 如果是包含e字符的数字直接返回
                result = member
            } else if (!/\./.test(member)) { // 如果没有小数点
                result = member + `.${Array(numberOfDigits + 1).join('0')}`
            } else { // 如果有小数点
                member = member + `${Array(numberOfDigits + 1).join('0')}`
                let reg = new RegExp(`-?\\d*.\\d{0,${numberOfDigits}}`)
                const exec = reg.exec(member)
                if (exec && exec.length > 0) {
                    result = exec[0]
                }
               // result = reg.exec(member)[0] || ''
            }
        }
        return result
    }
}
