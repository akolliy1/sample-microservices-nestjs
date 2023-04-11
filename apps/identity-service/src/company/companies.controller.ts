import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCompanyDTO } from './dto/create.dto';
import { UpdateCompanyDTO } from './dto/update.dto';
import { CompaniesService } from './companies.service';
import { Company } from './schemas';
import { JwtAuthGuard } from '../auth/authGuards/jwt-auth.guard';

@ApiTags('companies')
@Controller('companies')
export class CompaniesController {
  constructor(private readonly service: CompaniesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(201)
  create(@Body() body: CreateCompanyDTO): Promise<Company> {
    return this.service.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDTO,
  ): Promise<Company> {
    return this.service.update(id, updateCompanyDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userId')
  index(@Param('userId') userId: string): Promise<Company[]> {
    return this.service.fetchAll(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Company> {
    return this.service.deleteById(id);
  }
}
