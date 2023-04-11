import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { Education, EducationDocument } from '../schemas';

export class EducationRepository {
  constructor(
    @InjectModel(Education.name)
    private educationModel: Model<EducationDocument>,
  ) {}

  async create(education: Education): Promise<Education> {
    return this.educationModel.create(education);
  }

  async findOne(
    educationFilterQuery: FilterQuery<Education>,
  ): Promise<Education> {
    return this.educationModel.findOne(educationFilterQuery);
  }

  async find(
    educationFilterQuery: FilterQuery<Education>,
  ): Promise<Education[]> {
    return this.educationModel.find(educationFilterQuery);
  }

  async deleteById(educationId: string): Promise<Education> {
    return this.educationModel.findByIdAndDelete(educationId);
  }

  async findOneAndUpdate(
    educationFilterQuery: FilterQuery<Education>,
    education: Partial<Education>,
  ): Promise<Education> {
    return this.educationModel.findOneAndUpdate(
      educationFilterQuery,
      education,
    );
  }
}
