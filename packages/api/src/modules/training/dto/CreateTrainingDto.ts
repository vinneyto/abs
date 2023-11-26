import { IsArray } from "class-validator";

export class CreateTrainingDto {
  @IsArray()
  basis: number[];
}
