import mongoose, { Document, Schema } from 'mongoose';

interface Transform {
  position: { x: number; y: number; z: number };
  quaternion: { x: number; y: number; z: number; w: number };
}

interface Head {
  pitch: Number;
  y: Number;
}

interface TrainingDataDocument extends Document {
  bottom: boolean;
  head: Head;
  leftHandCameraLocal: Transform;
  rightHandCameraLocal: Transform;
}

const TransformSchema = new Schema({
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

const HeadSchema = new Schema({
  pitch: { type: Number, required: true },
  y: { type: Number, required: true },
});

const TrainingDataSchema: Schema = new Schema({
  bottom: { type: Boolean, required: true },
  head: HeadSchema,
  leftHandCameraLocal: TransformSchema,
  rightHandCameraLocal: TransformSchema,
});

const TrainingDataModel = mongoose.model<TrainingDataDocument>(
  'TrainingData',
  TrainingDataSchema,
  'trainingData',
);

export { TrainingDataModel };
