import { Progress } from 'src/models/progress';
import { UploadFormVlaue } from './types';

export const createProgressTemplate = (data: UploadFormVlaue) => {
  const {
    date,
    fat,
    muscle,
    water,
    weight,
    massIndex,
    chest,
    waist,
    hips,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
    leftCalf,
    rightCalf,
  } = data;
  const progress: Progress = {
    [date]: {
      bodyComposition: {
        fat,
        muscle,
        water,
        weight,
        massIndex,
      },
      bodyParams: {
        chest,
        waist,
        hips,
        leftArm,
        rightArm,
        leftLeg,
        rightLeg,
        leftCalf,
        rightCalf,
      },
    },
  };

  return progress;
};
