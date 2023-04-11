import { Injectable } from '@nestjs/common';
import { CreateExperienceDTO } from './dto/create.dto';
import { UpdateExperienceDTO } from './dto/update.dto';
import { ExperienceRepository } from './repository';
import { Experience } from './schemas';

@Injectable()
export class ExperiencesService {
  constructor(private readonly repository: ExperienceRepository) {}

  async create(data: CreateExperienceDTO): Promise<Experience> {
    return this.repository.create(data);
  }

  async update(
    experienceId: string,
    data: UpdateExperienceDTO,
  ): Promise<Experience> {
    return this.repository.findOneAndUpdate({ id: experienceId }, data);
  }

  async fetchAll(userId: string): Promise<Experience[]> {
    return this.repository.find({ userId });
  }

  async deleteById(experienceId: string): Promise<Experience> {
    return this.repository.deleteById(experienceId);
  }
}
