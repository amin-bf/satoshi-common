import { IUserPayload } from "./middlewares/current-user";

// Errors ...
export * from "./errors/bad-request-error";
export * from "./errors/custom-error";
export * from "./errors/database-connection-error";
export * from "./errors/nats-connection-error";
export * from "./errors/not-authenticated-error";
export * from "./errors/not-guest-error";
export * from "./errors/not-found-error";
export * from "./errors/request-validation-error";
export * from "./errors/email-not-verified-error";

declare global {
  namespace Express {
    interface Request {
      currentUser?: IUserPayload;
      session?: any;
    }
  }
}

// Middlewares
export * from "./middlewares/current-user";
export * from "./middlewares/error-handler";
export * from "./middlewares/request-validation";
export * from "./middlewares/require-auth";
export * from "./middlewares/require-guest";

// Requests
export * from "./requests/base-request";

// Events
export * from "./events";

// Utilities
export * from "./util/password";
