export interface Role {
  label: string;
  value: string;
}

export const ROLE_USER = 'ROLE_USER';
export const ROLE_MODERATOR = 'ROLE_USER,ROLE_MODERATOR';
export const ROLE_ADMIN = 'ROLE_USER,ROLE_ADMIN';

export const ROLES: Role[] = [
  {
    label: 'User',
    value: ROLE_USER
  },
  {
    label: 'Moderator',
    value: ROLE_MODERATOR,
  },
  {
    label: 'Administrator',
    value: ROLE_ADMIN
  }
];
