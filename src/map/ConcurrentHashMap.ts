import { Assert } from '../validator/Assert'

export class ConcurrentHashMap<T extends string, V> extends Map {

  private _concurrentHashMap: Map<T, V> = new Map<T, V>()


  private get concurrentHashMap(): Map<T, V> {
    return this._concurrentHashMap
  }

  private set concurrentHashMap(value: Map<T, V>) {
    this._concurrentHashMap = value
  }

  set(key: T, value: V) {
    Assert.hasText(key, 'ConcurrentHashMap not has key')
    Assert.isEmpty(value, 'ConcurrentHashMap not has value')
    this.concurrentHashMap.set(key, value)
    return this
  }

  get(key: T): V {
    return this.concurrentHashMap.get(key) as V
  }

  delete(key: T) {
    return this.concurrentHashMap.delete(key)
  }

  clear() {
    this.concurrentHashMap.clear()
  }
}
