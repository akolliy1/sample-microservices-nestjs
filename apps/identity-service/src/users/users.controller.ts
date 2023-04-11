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
import { CreateUserDTO } from './dto/create.dto';
import { UpdateUserDTO } from './dto/update.dto';
import { UsersService } from './users.service';
import { User } from './schemas';
import { JwtAuthGuard } from '../auth/authGuards/jwt-auth.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  @HttpCode(201)
  create(@Body() body: CreateUserDTO): Promise<User> {
    return this.service.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDTO,
  ): Promise<User> {
    return this.service.update(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userId')
  index(@Param('userId') userId: string): Promise<User[]> {
    return this.service.fetchAll(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<User> {
    return this.service.deleteById(id);
  }
}
