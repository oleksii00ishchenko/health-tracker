export enum FieldType {
  email = 'email',
  password = 'password',
}

export interface FormValue {
  [FieldType.email]: string;
  [FieldType.password]: string;
}
