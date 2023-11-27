import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PoseDocument = Pose & mongoose.Document;

// const checkSize = (value: any) => Array.isArray(value) && value.length === 16;

@Schema()
export class Pose {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Training',
    required: true,
  })
  trainingId: string;

  @Prop({
    type: [Number],
    required: true,
    // validate: checkSize,
  })
  left: number[];

  @Prop({
    type: [Number],
    required: true,
    // validate: checkSize,
  })
  right: number[];

  @Prop({
    type: [Number],
    required: true,
    // validate: checkSize,
  })
  head: number[];
}

export const PoseSchema = SchemaFactory.createForClass(Pose);
