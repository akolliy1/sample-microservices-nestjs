import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExperiencesController } from './experiences.controller';
import { ExperiencesService } from './experiences.service';
import { ExperienceRepository } from './repository';
import { Experience, ExperienceSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Experience.name, schema: ExperienceSchema },
    ]),
  ],
  controllers: [ExperiencesController],
  providers: [ExperiencesService, ExperienceRepository],
})
export class ExperienceModule {}
