import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EducationsController } from './educations.controller';
import { EducationsService } from './educations.service';
import { EducationRepository } from './repository';
import { Education, EducationSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Education.name, schema: EducationSchema },
    ]),
  ],
  controllers: [EducationsController],
  providers: [EducationsService, EducationRepository],
})
export class EducationModule {}
