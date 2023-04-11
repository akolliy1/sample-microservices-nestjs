import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { ExperienceModule } from './experiences/experiences.module';
import { EducationModule } from './educations/educations.module';
import { AppController } from './index/app.controller';
import { AppService } from './index/app.service';
import { SkillSetModule } from './skillSets/skillSets.module';
import { UserModule } from './users/users.module';
import { ProjectModule } from './projects/projects.module';
import { CompanyModule } from './company/companies.module';
import { AuthModule } from './auth/auth.module';
import env from './config/env';
import { TokenModule } from './token/token.module';
import { MomentService } from './utils/moment.service';

const rateLimitOpts = {
  ttl: 60,
  limit: 10,
};

@Module({
  imports: [
    ConfigModule.forRoot({ load: [env] }),
    MongooseModule.forRoot('mongodb://localhost:27017/talentgraph'),
    AuthModule,
    TokenModule,
    UserModule,
    CompanyModule,
    ProjectModule,
    ExperienceModule,
    EducationModule,
    SkillSetModule,
    ThrottlerModule.forRoot(rateLimitOpts),
  ],
  controllers: [AppController],
  providers: [AppService, MomentService],
  exports: [MomentService],
})
export class AppModule {}
