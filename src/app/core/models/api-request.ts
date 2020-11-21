export interface CreateUserModelRequest {
  email: string;
  username: string;
  password: string;
  roles: string[];
  enabled: boolean;
}
