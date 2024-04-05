export interface Progress {
  [date: string]: {
    weight: number;
    massIndex: number;
    fat: number;
    muscle: number;
    water: number;
    bodyParams: {
      chest: number;
      waist: number;
      hips: number;
      leftArm: number;
      rightArm: number;
      leftLeg: number;
      rightLeg: number;
      leftCalf: number;
      rightCalf: number;
    };
  };
}
