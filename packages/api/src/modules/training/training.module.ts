import { Module } from '@nestjs/common';
import { TrainingController } from './training.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Training, TrainingSchema } from './training.schema';
import { TrainingService } from './training.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Training.name, schema: TrainingSchema },
    ]),
  ],
  providers: [TrainingService],
  controllers: [TrainingController],
})
export class TrainingModule {}
