export class DependenciesContainer {
  /**
   * components维护组件列表
   * instances维护实例列表
   */
  private components = new Map<string, any>() // key ->  Constructor
  private instances = new Map<string, object>() // key -> Instance

  /**
   * 注册组件
   * @param constructor 被装饰的类的构造函数
   * @param alias 该组件的名字，默认取类名
   */
  register(constructor: Function, alias?: string) {
    let name = alias
    if (!name) {
      name = constructor.name
    }
    if (this.components.has(name)) {
      console.warn('重复注册Component: ' + name)
    }
    this.components.set(name, constructor)
  }

  /**
   * 获取实例，实例是懒加载的单例，第一次获取时创建
   * @param alias 组件名字
   */
  get(alias: string) {
    if (this.instances.has(alias)) {
      return this.instances.get(alias)
    }
    const component = this.components.get(alias)
    if (!component) {
      throw '未注册: ' + alias
    }
    const ins = new component()
    this.instances.set(alias, ins)
    return ins
  }
}

const IocContainer = new DependenciesContainer()

export { IocContainer }
