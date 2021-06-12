import { CustomError } from "./custom-error"

export class NotGuestError extends CustomError {
  statusCode: number = 403

  constructor() {
    super("Not Guest!")

    Object.setPrototypeOf(this, NotGuestError.prototype)
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: "Not Guest!" }]
  }
}
