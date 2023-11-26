import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PoseDocument = Pose & mongoose.Document;

export class Transform {
  @Prop({
    type: [Number],
    required: true,
    validate: (value: any) => Array.isArray(value) && value.length === 16,
  })
  transform: number[];
}

@Schema()
export class Pose {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Training',
    required: true,
  })
  trainingId: mongoose.Schema.Types.ObjectId;

  @Prop({ type: Transform, required: true })
  left: Transform;

  @Prop({ type: Transform, required: true })
  right: Transform;

  @Prop({ type: Transform, required: true })
  head: Transform;
}

export const PoseSchema = SchemaFactory.createForClass(Pose);
