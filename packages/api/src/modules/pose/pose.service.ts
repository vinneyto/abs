import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Pose, PoseDocument } from './pose.schema';
import { CreatePoseDto, CreatePosesBatchDdo } from './dto';

@Injectable()
export class PoseService {
  constructor(@InjectModel(Pose.name) private poseModel: Model<PoseDocument>) {}

  async create(pose: CreatePoseDto): Promise<PoseDocument> {
    return this.poseModel.create(pose);
  }

  async insertMany(poses: CreatePosesBatchDdo): Promise<PoseDocument[]> {
    const dtos: CreatePoseDto[] = [];

    for (const pose of poses.poses) {
      dtos.push(
        new CreatePoseDto(poses.trainingId, pose.left, pose.right, pose.head),
      );
    }

    return this.poseModel.insertMany(dtos);
  }
}
