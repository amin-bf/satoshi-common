import { CustomError } from "./custom-error"

export class EmailNotVerifiedError extends CustomError {
  statusCode: number = 403

  constructor() {
    super("Email Not Verified!")

    Object.setPrototypeOf(this, EmailNotVerifiedError.prototype)
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: "Email Not Verified!" }]
  }
}
