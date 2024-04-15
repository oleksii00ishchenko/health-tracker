export interface Progress {
  [date: string]: {
    bodyComposition: BodyComposition;
    bodyParams: BodyParams;
  };
}

export interface BodyComposition {
  weight: number;
  massIndex: number;
  fat: number;
  muscle: number;
  water: number;
}

export interface BodyParams {
  chest: number;
  waist: number;
  hips: number;
  leftArm: number;
  rightArm: number;
  leftLeg: number;
  rightLeg: number;
  leftCalf: number;
  rightCalf: number;
}
