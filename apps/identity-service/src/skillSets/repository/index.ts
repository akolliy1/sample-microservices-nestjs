import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { SkillSet, SkillSetDocument } from '../schemas';

export class SkillSetRepository {
  constructor(
    @InjectModel(SkillSet.name)
    private skillSetModel: Model<SkillSetDocument>,
  ) {}

  async create(skillSet: SkillSet): Promise<SkillSet> {
    return this.skillSetModel.create(skillSet);
  }

  async findOne(skillSetFilterQuery: FilterQuery<SkillSet>): Promise<SkillSet> {
    return this.skillSetModel.findOne(skillSetFilterQuery);
  }

  async find(skillSetFilterQuery: FilterQuery<SkillSet>): Promise<SkillSet[]> {
    return this.skillSetModel.find(skillSetFilterQuery);
  }

  async deleteById(skillSetId: string): Promise<SkillSet> {
    return this.skillSetModel.findByIdAndDelete(skillSetId);
  }

  async findOneAndUpdate(
    skillSetFilterQuery: FilterQuery<SkillSet>,
    skillSet: Partial<SkillSet>,
  ): Promise<SkillSet> {
    return this.skillSetModel.findOneAndUpdate(skillSetFilterQuery, skillSet);
  }
}
