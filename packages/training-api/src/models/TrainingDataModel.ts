import mongoose, { Document, Schema } from 'mongoose';

interface Transform {
  position: { x: number; y: number; z: number };
  quaternion: { x: number; y: number; z: number; w: number };
}

interface TrainingDataDocument extends Document {
  bottom: boolean;
  headTransform: Transform;
  leftHandTransform: Transform;
  rightHandTransform: Transform;
}

const TransformSchema: Schema = new Schema({
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    z: { type: Number, required: true },
  },
  quaternion: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    z: { type: Number, required: true },
    w: { type: Number, required: true },
  },
});

const TrainingDataSchema: Schema = new Schema({
  bottom: { type: Boolean, required: true },
  headTransform: TransformSchema,
  leftHandTransform: TransformSchema,
  rightHandTransform: TransformSchema,
});

const TrainingDataModel = mongoose.model<TrainingDataDocument>(
  'TrainingData',
  TrainingDataSchema,
  'trainingData',
);

export { TrainingDataModel };
