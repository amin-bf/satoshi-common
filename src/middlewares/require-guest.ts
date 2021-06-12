import { Response, Request, NextFunction } from "express"
import { NotGuestError } from "../errors/not-guest-error"

export const requireGuest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    next()
    return
  }

  throw new NotGuestError()
}
