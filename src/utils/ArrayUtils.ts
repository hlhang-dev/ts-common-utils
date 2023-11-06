import { Assert }                 from '../validator/Assert'
import { Matcher }                from '../inteface/Matcher'
import { BaseObjectArrayMatcher } from '../inteface/BaseObjectArrayMatcher'

export class ArrayUtils {
    public static isEmpty<T>(arr: T[]) {
        return ArrayUtils.isArray(arr) && arr.length === 0
    }

    public static isArray<T>(arr: T[]) {
        return Array.isArray(arr)
    }

    public static getArrayFirst<T>(arr: T[]) {
        return arr[0]
    }

    public static isNotEmpty<T>(arr: T[]) {
        return ArrayUtils.isArray(arr) && arr.length > 0
    }

    public static matchIndex<T>(matcher: Matcher<T>, arr: T[], beginIndexInclude: number = 0) {
        let index = -1
        Assert.isEmpty(matcher, 'Matcher must be not null !')
        if (ArrayUtils.isNotEmpty(arr)) {
            for (let i = beginIndexInclude; i < arr.length; i++) {
                if (matcher.match(arr[i])) {
                    index = i
                    break
                }
            }
        }
        return index
    }

    public static getReachBottomPagingList<T>(page: number, oldPageList: T[], newPageList: T[]) {
        let pagingList: T[]
        if (page === 1) {
            pagingList = newPageList
        } else {
            pagingList = [...oldPageList, ...newPageList]
        }
        return pagingList
    }

    public static matchFind<T>(matcher: Matcher<T>, arr: T[], beginIndexInclude: number = 0): T | null {
        let item: T | null = null
        Assert.isEmpty(matcher, 'Matcher must be not null !')
        if (ArrayUtils.isNotEmpty(arr)) {
            for (let i = beginIndexInclude; i < arr.length; i++) {
                if (matcher.match(arr[i])) {
                    item = arr[i]
                    break
                }
            }
        }
        return item
    }

    public static isSameLength<T, V>(arr: T[], arr2: V[]) {
        return arr.length === arr2.length
    }


    public static delElByIndex<T>(arr: Array<T>, index: number) {
        const sliced = arr.slice(index + 1)
        arr.length = index
        arr.push.apply(arr, sliced)
    }

    public static getItemIndexById<T extends BaseObjectArrayMatcher>(arr: Array<T>, id: string) {
        let index = -1
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i]
            if (item.id === id) {
                index = i
                break
            }
        }
        return index
    }

    public static getItemById<T extends BaseObjectArrayMatcher>(arr: Array<T>, id: string, classReference: {
        new(): T
    }) {
        let newItem = new classReference()
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i]
            if (id === item.id) {
                newItem = item
                break
            }
        }
        return newItem
    }

    public static deleteItemById<T extends BaseObjectArrayMatcher>(arr: Array<T>, id: string) {
        const index = this.getItemIndexById(arr, id)
        this.delElByIndex(arr, index)
    }

    public static manualPaging<T>(arr: Array<T>, limit: number = 10) {
        let newArr: Array<Array<T>> = []
        for (let i = 0; i < arr.length; i += limit) {
            newArr.push(arr.slice(i, i + limit))
        }
        return newArr
    }

    public static sortByTimestamp<T extends object>(property: string, isRise: boolean) {
        return function (currentArrayItem: T, changeArrayItem: T) {
            // @ts-ignore
            const currentArrayProperty = <any>currentArrayItem[property]
            // @ts-ignore
            const changeArrayProperty = <any>changeArrayItem[property]
            if (isRise) {
                return currentArrayProperty - changeArrayProperty
            } else {
                return changeArrayProperty - currentArrayProperty
            }
        }
    }

    public static cutArrayByCount<T>(arr: T[], size: number = 10) {
        const newArr: Array<Array<T>> = []
        let arrLength = arr.length
        let num = size
        let index = 0
        for (let i = 0; i < arrLength; i++) {
            if (i % num === 0 && i !== 0) {
                newArr.push(arr.slice(index, i))
                index = i
            }

            if ((i + 1) === arrLength) {
                newArr.push(arr.slice(index, (i + 1)))
            }
        }
        return newArr
    }

    public static getRandomIndexInArray<T>(arr: T[]): number {
        let index = -1
        if (arr.length !== 0) {
            index = Math.floor(Math.random() * arr.length)
        }
        return index
    }
}
