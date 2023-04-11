import { Injectable, Logger } from '@nestjs/common';
import * as moment from 'moment';

@Injectable()
export class MomentService {
  private readonly logger = new Logger(MomentService.name);

  moment(): moment.Moment {
    this.logger.log('MomentService');
    return moment();
  }
}
