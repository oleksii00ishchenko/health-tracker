import { BodyComposition, BodyParams } from 'src/models/progress';

export type FieldHeaders<T> = { name: keyof T; label: string }[];

export const compositionFields: FieldHeaders<BodyComposition> = [
  {
    name: 'weight',
    label: 'Weight',
  },
  {
    name: 'massIndex',
    label: 'Mass Index',
  },
  {
    name: 'fat',
    label: 'Fat',
  },
  {
    name: 'muscle',
    label: 'Muscle',
  },
  {
    name: 'water',
    label: 'Water',
  },
];

export const paramsFields: FieldHeaders<BodyParams> = [
  {
    name: 'chest',
    label: 'Chest',
  },
  {
    name: 'waist',
    label: 'Waist',
  },
  {
    name: 'hips',
    label: 'Hips',
  },
  {
    name: 'rightArm',
    label: 'Right Arm',
  },
  {
    name: 'leftArm',
    label: 'Left Arm',
  },
  {
    name: 'rightLeg',
    label: 'Right Leg',
  },
  {
    name: 'leftLeg',
    label: 'Left Leg',
  },
  {
    name: 'rightCalf',
    label: 'Right Calf',
  },
  {
    name: 'leftCalf',
    label: 'Left Calf',
  },
];
