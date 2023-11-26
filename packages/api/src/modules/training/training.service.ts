import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Training, TrainingDocument } from './training.schema';
import { CreateTrainingDto } from './dto/CreateTrainingDto';

@Injectable()
export class TrainingService {
  constructor(
    @InjectModel(Training.name) private trainingModel: Model<TrainingDocument>,
  ) {}

  async create(user: CreateTrainingDto): Promise<TrainingDocument> {
    return this.trainingModel.create(user);
  }
}
