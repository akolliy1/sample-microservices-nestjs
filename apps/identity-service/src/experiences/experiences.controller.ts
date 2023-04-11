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
import { CreateExperienceDTO } from './dto/create.dto';
import { UpdateExperienceDTO } from './dto/update.dto';
import { ExperiencesService } from './experiences.service';
import { Experience } from './schemas';

@ApiTags('experiences')
@Controller('experiences')
export class ExperiencesController {
  constructor(private readonly service: ExperiencesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(201)
  create(@Body() body: CreateExperienceDTO): Promise<Experience> {
    return this.service.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExperienceDto: UpdateExperienceDTO,
  ): Promise<Experience> {
    return this.service.update(id, updateExperienceDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userId')
  index(@Param('userId') userId: string): Promise<Experience[]> {
    return this.service.fetchAll(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Experience> {
    return this.service.deleteById(id);
  }
}
