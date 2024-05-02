import { BodyComposition, BodyParams } from 'src/models/progress';

export type UploadFormVlaue = BodyParams & BodyComposition & { date: string };

export interface UploadModalPropds {
  open: boolean;
  closeModal: () => void;
}
