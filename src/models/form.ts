export enum FieldType {
  email = 'email',
  password = 'password',
  adminRole = 'adminRole',
}

export interface FormValue {
  [FieldType.email]: string;
  [FieldType.password]: string;
  [FieldType.adminRole]: boolean;
}
