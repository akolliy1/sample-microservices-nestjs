import { Test, TestingModule } from '@nestjs/testing';
import { SkillSetsController } from './skillSets.controller';

describe('SkillSetsController', () => {
  let controller: SkillSetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillSetsController],
    }).compile();

    controller = module.get<SkillSetsController>(SkillSetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
