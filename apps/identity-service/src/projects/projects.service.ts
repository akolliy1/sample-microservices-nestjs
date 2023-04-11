import { Injectable } from '@nestjs/common';
import { CreateProjectDTO } from './dto/create.dto';
import { UpdateProjectDTO } from './dto/update.dto';
import { ProjectRepository } from './repository';
import { Project } from './schemas';

@Injectable()
export class ProjectsService {
  constructor(private readonly repository: ProjectRepository) {}

  async create(data: CreateProjectDTO): Promise<Project> {
    return this.repository.create(data);
  }

  async update(projectId: string, data: UpdateProjectDTO): Promise<Project> {
    return this.repository.findOneAndUpdate({ id: projectId }, data);
  }

  async fetchAll(userId: string): Promise<Project[]> {
    return this.repository.find({ userId });
  }

  async deleteById(projectId: string): Promise<Project> {
    return this.repository.deleteById(projectId);
  }
}
