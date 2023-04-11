import { Controller, Get, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  health(): string {
    return 'Account service working fine 🚀';
  }

  // Get secure token before making all api calls such as (POST|DELETE|PUT|PATCH), excluding (GET)
  @Get('secure-csrf')
  secureForm(@Request() req): object {
    return { csrfToken: req.csrfToken() };
  }
}
