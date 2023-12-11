import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsString,
  ValidateNested,
} from 'class-validator';

export class PoseItem {
  @IsArray()
  left: number[];

  @IsArray()
  right: number[];

  @IsArray()
  head: number[];
}

export class CreatePosesBatchDdo {
  @IsString()
  trainingId: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => PoseItem)
  poses: PoseItem[];
}
