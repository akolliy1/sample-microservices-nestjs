import { Injectable } from '@nestjs/common';
import { CreateEducationDTO } from './dto/create.dto';
import { UpdateEducationDTO } from './dto/update.dto';
import { EducationRepository } from './repository';
import { Education } from './schemas';

@Injectable()
export class EducationsService {
  constructor(private readonly repository: EducationRepository) {}

  async create(data: CreateEducationDTO): Promise<Education> {
    return this.repository.create(data);
  }

  async update(
    educationId: string,
    data: UpdateEducationDTO,
  ): Promise<Education> {
    return this.repository.findOneAndUpdate({ id: educationId }, data);
  }

  async fetchAll(userId: string): Promise<Education[]> {
    return this.repository.find({ userId });
  }

  async deleteById(educationId: string): Promise<Education> {
    return this.repository.deleteById(educationId);
  }
}
