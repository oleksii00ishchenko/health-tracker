import { BodyComposition, BodyParams } from 'src/models/progress';
import { FieldHeaders } from '../types';

export interface TableHeadersProps {
  fields: FieldHeaders<BodyComposition> | FieldHeaders<BodyParams>;
}
