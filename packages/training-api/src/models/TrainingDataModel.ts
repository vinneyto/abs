import mongoose, { Document, Schema } from 'mongoose';

interface TrainingSessionDocument extends Document {
  createdAt: Date;
}

const TrainingSessionSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
});

export const TrainingSessionModel = mongoose.model<TrainingSessionDocument>(
  'TrainingSession',
  TrainingSessionSchema,
  'trainingSessions',
);

interface Transform {
  position: { x: number; y: number; z: number };
  quaternion: { x: number; y: number; z: number; w: number };
}

interface Head {
  pitch: Number;
  y: Number;
}

interface TrainingDataDocument extends Document {
  trainingSession: TrainingSessionDocument['_id'];
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
  trainingSession: {
    type: Schema.Types.ObjectId,
    ref: 'TrainingSession',
    required: true,
  },
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
