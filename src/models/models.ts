export enum StorageKeys {
  USER = 'user',
  LOGGED_IN = 'loggedIn',
}

export interface SignUpModel extends LoginModel {
  name: string;
}

export interface LoginModel {
  username: string;
  password: string;
}
