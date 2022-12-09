export class BrowserUtils {
    public static isWeiXn (): boolean {
        return navigator.userAgent.indexOf('MicroMessenger') > -1
    }

    public static isPhone (): boolean {
        return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
    }

    public static isPC (): boolean {
        let [ userAgentInfo, Agents ] = [
            navigator.userAgent,
            [ 'Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod' ]
        ]
        let flag = true
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false
                break
            }
        }
        return flag
    }

    public static objToUrlParam(obj?: object, question: boolean = true): string {
        let queryParams = ''
        let count = 0
        if (obj) {
            for (const key of Object.keys(obj)) {
                // @ts-ignore
                const value = obj[key]
                if (value || value === 0) {
                    count++
                    const param = key + '=' + value
                    if (count === 1 && question) {
                        queryParams = '?' + param
                    } else {
                        queryParams = queryParams + '&' + param
                    }
                }
            }
        }
        return queryParams
    }

    public static isIos (): boolean {
        let isIos: boolean = false
        return !!navigator.userAgent.match(/\(i[^]+( U)? CPU.+Mac OS X/)
    }

    public static isAndroid (): boolean {
        return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1
    }


}
