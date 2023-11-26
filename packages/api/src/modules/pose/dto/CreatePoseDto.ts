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
}
