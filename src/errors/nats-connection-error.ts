import { CustomError } from "./custom-error"

export class NatsConnectionError extends CustomError {
  statusCode: number = 500

  constructor() {
    super("Error connecting Nats!")

    Object.setPrototypeOf(this, NatsConnectionError.prototype)
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: "Error connecting Nats!" }]
  }
}
