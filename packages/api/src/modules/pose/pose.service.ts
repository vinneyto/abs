import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Pose, PoseDocument } from './pose.schema';
import { CreatePoseDto } from './dto/CreatePoseDto';

@Injectable()
export class PoseService {
  constructor(@InjectModel(Pose.name) private poseModel: Model<PoseDocument>) {}

  async create(user: CreatePoseDto): Promise<PoseDocument> {
    return this.poseModel.create(user);
  }
}
