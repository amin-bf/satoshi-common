import { CustomError } from "./custom-error"

export class BadRequestError extends CustomError {
  statusCode: number = 400

  constructor() {
    super("Bad Request!")

    Object.setPrototypeOf(this, BadRequestError.prototype)
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: "Bad Request!" }]
  }
}
