import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { PoseService } from './pose.service';
import { CreatePoseDto, CreatePosesBatchDdo } from './dto';

@Controller('pose')
export class PoseController {
  constructor(private readonly poseService: PoseService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async pose(@Body() poseDto: CreatePoseDto) {
    return this.poseService.create(poseDto);
  }

  @Post('batch')
  @UseGuards(JwtAuthGuard)
  async poseBatch(@Body() poseDto: CreatePosesBatchDdo) {
    return this.poseService.insertMany(poseDto);
  }
}
