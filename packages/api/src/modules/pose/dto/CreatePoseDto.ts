import { IsArray, IsString } from 'class-validator';

export class CreatePoseDto {
  @IsString()
  trainingId: string;

  @IsArray()
  left: number[];

  @IsArray()
  right: number[];

  @IsArray()
  head: number[];

  constructor(
    trainingId: string,
    left: number[],
    right: number[],
    head: number[],
  ) {
    this.trainingId = trainingId;
    this.left = left;
    this.right = right;
    this.head = head;
  }
}
