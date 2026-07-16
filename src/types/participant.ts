export type Role =
  | "admin"
  | "musician"
  | "soloist"
  | "crew"
  | "staff"
  | "volunteer"
  | "host"
  | "patron";

export interface Participant {
  id: string;

  firstName: string;

  lastName: string;

  email: string;

  phone?: string;

  role: Role[];

  checkedIn: boolean;

  housing?: string;

  emergencyContact?: string;

  emergencyPhone?: string;
}