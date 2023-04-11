import { Injectable } from '@nestjs/common';
import { CreateCompanyDTO } from './dto/create.dto';
import { UpdateCompanyDTO } from './dto/update.dto';
import { CompanyRepository } from './repository';
import { Company } from './schemas';

@Injectable()
export class CompaniesService {
  constructor(private readonly repository: CompanyRepository) {}

  async create(data: CreateCompanyDTO): Promise<Company> {
    return this.repository.create(data);
  }

  async update(companyId: string, data: UpdateCompanyDTO): Promise<Company> {
    return this.repository.findOneAndUpdate({ id: companyId }, data);
  }

  async fetchAll(userId: string): Promise<Company[]> {
    return this.repository.find({ userId });
  }

  async deleteById(companyId: string): Promise<Company> {
    return this.repository.deleteById(companyId);
  }
}
