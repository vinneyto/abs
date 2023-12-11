import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pose, PoseSchema } from './pose.schema';
import { PoseService } from './pose.service';
import { PoseController } from './pose.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pose.name, schema: PoseSchema }]),
  ],
  providers: [PoseService],
  controllers: [PoseController],
})
export class PoseModule {}
