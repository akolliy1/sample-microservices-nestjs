import { Injectable, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/authGuards/jwt-auth.guard';
import { CreateSkillSetDTO } from './dto/create.dto';
import { UpdateSkillSetDTO } from './dto/update.dto';
import { SkillSetRepository } from './repository';
import { SkillSet } from './schemas';

@Injectable()
export class SkillSetsService {
  constructor(private readonly repository: SkillSetRepository) {}

  @UseGuards(JwtAuthGuard)
  async create(data: CreateSkillSetDTO): Promise<SkillSet> {
    return this.repository.create(data);
  }

  @UseGuards(JwtAuthGuard)
  async update(
    experienceId: string,
    data: UpdateSkillSetDTO,
  ): Promise<SkillSet> {
    return this.repository.findOneAndUpdate({ id: experienceId }, data);
  }

  @UseGuards(JwtAuthGuard)
  async fetchAll(userId: string): Promise<SkillSet[]> {
    return this.repository.find({ userId });
  }

  @UseGuards(JwtAuthGuard)
  async deleteById(experienceId: string): Promise<SkillSet> {
    return this.repository.deleteById(experienceId);
  }
}
