import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Training, TrainingDocument } from './training.schema';
import { TrainingDto } from './dto/TrainingDto';

@Injectable()
export class TrainingService {
  constructor(
    @InjectModel(Training.name) private trainingModel: Model<TrainingDocument>,
  ) {}

  async create(user: TrainingDto): Promise<TrainingDocument> {
    return this.trainingModel.create(user);
  }
}
