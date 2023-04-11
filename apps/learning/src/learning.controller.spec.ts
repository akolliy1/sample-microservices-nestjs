import { Test, TestingModule } from '@nestjs/testing';
import { LearningController } from './learning.controller';
import { LearningService } from './learning.service';

describe('LearningController', () => {
  let workCenterController: LearningController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LearningController],
      providers: [LearningService],
    }).compile();

    workCenterController = app.get<LearningController>(LearningController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(workCenterController.getHello()).toBe('Hello World!');
    });
  });
});
