import 'reflect-metadata'
import { IocContainer } from '../DependenciesContainer'

export function Autowired(alias?: string) {
  return function (target: any, propertyName: string) {
    let name = ''
    if (!alias) {
      const classConstructor = Reflect.getMetadata(
          'design:type',
          target,
          propertyName
      )
      name = classConstructor.name
    }
    const instance = IocContainer.get(name || '')
    target[propertyName] = instance
    return instance
  }
}
