import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { Experience, ExperienceDocument } from '../schemas';

export class ExperienceRepository {
  constructor(
    @InjectModel(Experience.name)
    private experienceModel: Model<ExperienceDocument>,
  ) {}

  async create(experience: Experience): Promise<Experience> {
    return this.experienceModel.create(experience);
  }

  async findOne(
    experienceFilterQuery: FilterQuery<Experience>,
  ): Promise<Experience> {
    return this.experienceModel.findOne(experienceFilterQuery);
  }

  async find(
    experienceFilterQuery: FilterQuery<Experience>,
  ): Promise<Experience[]> {
    return this.experienceModel.find(experienceFilterQuery);
  }

  async deleteById(experienceId: string): Promise<Experience> {
    return this.experienceModel.findByIdAndDelete(experienceId);
  }

  async findOneAndUpdate(
    experienceFilterQuery: FilterQuery<Experience>,
    experience: Partial<Experience>,
  ): Promise<Experience> {
    return this.experienceModel.findOneAndUpdate(
      experienceFilterQuery,
      experience,
    );
  }
}
