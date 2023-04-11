import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillSetsController } from './skillSets.controller';
import { SkillSetsService } from './skillSets.service';
import { SkillSetRepository } from './repository';
import { SkillSet, SkillSetSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SkillSet.name, schema: SkillSetSchema },
    ]),
  ],
  controllers: [SkillSetsController],
  providers: [SkillSetsService, SkillSetRepository],
})
export class SkillSetModule {}
