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

export interface MeterModel {
  serial: string;
  connection_type: ConnectionTypeOption;
  storage_system: StorageSystemOption;
  condition: ConditionOption;
  owner: OwnerOption;
  location: string;
  manufacturer: string;
  purchase: string;
  i_max: number;
  i_b: number;
  i_n: number;
  seals: number;
  id: number;
  created_at: string;
  updated_at: string | null;
}

export enum ConnectionTypeOption {
  DIRECTA = 'directa',
  SEMI_DIRECTA = 'semi-directa',
  INDIRECTA = 'indirecta',
}

export enum StorageSystemOption {
  INTERNO = 'interno',
  EXTERNO = 'externo',
}

export enum ConditionOption {
  NUEVO = 'nuevo',
  USADO = 'usado',
}

export enum OwnerOption {
  RF = 'RF',
  OR = 'OR',
}

export type GetMetersResponse = {
  data: {
    items: MeterModel[];
    page: number;
    size: number;
    total: number;
    pages: number;
    next_page: number | null;
    previous_page: number | null;
  };
};

export type GetMeterResponse = {
  data: MeterModel;
};
