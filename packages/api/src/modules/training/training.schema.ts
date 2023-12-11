import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrainingDocument = Training & Document;

@Schema()
export class Training {
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: [Number], required: true })
  basis: number[];
}

export const TrainingSchema = SchemaFactory.createForClass(Training);
