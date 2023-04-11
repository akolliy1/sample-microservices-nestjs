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
import { CreateProjectDTO } from './dto/create.dto';
import { UpdateProjectDTO } from './dto/update.dto';
import { ProjectsService } from './projects.service';
import { Project } from './schemas';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly service: ProjectsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(201)
  create(@Body() body: CreateProjectDTO): Promise<Project> {
    return this.service.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDTO,
  ): Promise<Project> {
    return this.service.update(id, updateProjectDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userId')
  index(@Param('userId') userId: string): Promise<Project[]> {
    return this.service.fetchAll(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Project> {
    return this.service.deleteById(id);
  }
}
