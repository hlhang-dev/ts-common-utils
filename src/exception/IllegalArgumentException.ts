import { Exception } from './Exception'

export class IllegalArgumentException extends Exception {

  constructor(message: string) {
    super(message)
  }
}
