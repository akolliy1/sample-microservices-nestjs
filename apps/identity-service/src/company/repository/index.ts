import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { Company, CompanyDocument } from '../schemas';

export class CompanyRepository {
  constructor(
    @InjectModel(Company.name)
    private companyModel: Model<CompanyDocument>,
  ) {}

  async create(company: Company): Promise<Company> {
    return this.companyModel.create(company);
  }

  async findOne(companyFilterQuery: FilterQuery<Company>): Promise<Company> {
    return this.companyModel.findOne(companyFilterQuery);
  }

  async find(companyFilterQuery: FilterQuery<Company>): Promise<Company[]> {
    return this.companyModel.find(companyFilterQuery);
  }

  async deleteById(companyId: string): Promise<Company> {
    return this.companyModel.findByIdAndDelete(companyId);
  }

  async findOneAndUpdate(
    companyFilterQuery: FilterQuery<Company>,
    company: Partial<Company>,
  ): Promise<Company> {
    return this.companyModel.findOneAndUpdate(companyFilterQuery, company);
  }
}
