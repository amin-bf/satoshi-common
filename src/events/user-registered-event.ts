import { Subjects } from "./subjects";

export interface IUserRegisteredEvent {
  subject: Subjects.UserRegistered;
  data: {
    id: string;
    name: string;
    age: number;
    score: number;
  };
}
