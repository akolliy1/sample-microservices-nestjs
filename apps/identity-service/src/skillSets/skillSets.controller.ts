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
import { CreateSkillSetDTO } from './dto/create.dto';
import { UpdateSkillSetDTO } from './dto/update.dto';
import { SkillSetsService } from './skillSets.service';
import { SkillSet } from './schemas';
import { JwtAuthGuard } from '../auth/authGuards/jwt-auth.guard';

@ApiTags('skill-sets')
@Controller('skill-sets')
export class SkillSetsController {
  constructor(private readonly service: SkillSetsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(201)
  create(@Body() body: CreateSkillSetDTO): Promise<SkillSet> {
    return this.service.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSkillSetDto: UpdateSkillSetDTO,
  ): Promise<SkillSet> {
    return this.service.update(id, updateSkillSetDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userId')
  index(@Param('userId') userId: string): Promise<SkillSet[]> {
    return this.service.fetchAll(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<SkillSet> {
    return this.service.deleteById(id);
  }
}
