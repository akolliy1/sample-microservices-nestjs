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
import { JwtAuthGuard } from '../auth/authGuards/jwt-auth.guard';
import { CreateEducationDTO } from './dto/create.dto';
import { UpdateEducationDTO } from './dto/update.dto';
import { EducationsService } from './educations.service';
import { Education } from './schemas';

@ApiTags('educations')
@Controller('educations')
export class EducationsController {
  constructor(private readonly service: EducationsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(201)
  create(@Body() body: CreateEducationDTO): Promise<Education> {
    return this.service.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEducationDto: UpdateEducationDTO,
  ): Promise<Education> {
    return this.service.update(id, updateEducationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userId')
  index(@Param('userId') userId: string): Promise<Education[]> {
    return this.service.fetchAll(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Education> {
    return this.service.deleteById(id);
  }
}
