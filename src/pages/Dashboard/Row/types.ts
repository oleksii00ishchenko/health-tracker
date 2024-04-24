import { BodyComposition, BodyParams } from 'src/models/progress';

export interface RowProps {
  table: 'bodyComposition' | 'bodyParams';
  rowName: keyof BodyComposition | keyof BodyParams | 'date';
}
