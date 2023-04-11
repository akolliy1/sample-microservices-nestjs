import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { Project, ProjectDocument } from '../schemas';

export class ProjectRepository {
  constructor(
    @InjectModel(Project.name)
    private projectModel: Model<ProjectDocument>,
  ) {}

  async create(project: Project): Promise<Project> {
    return this.projectModel.create(project);
  }

  async findOne(projectFilterQuery: FilterQuery<Project>): Promise<Project> {
    return this.projectModel.findOne(projectFilterQuery);
  }

  async find(projectFilterQuery: FilterQuery<Project>): Promise<Project[]> {
    return this.projectModel.find(projectFilterQuery);
  }

  async deleteById(projectId: string): Promise<Project> {
    return this.projectModel.findByIdAndDelete(projectId);
  }

  async findOneAndUpdate(
    projectFilterQuery: FilterQuery<Project>,
    project: Partial<Project>,
  ): Promise<Project> {
    return this.projectModel.findOneAndUpdate(projectFilterQuery, project);
  }
}
