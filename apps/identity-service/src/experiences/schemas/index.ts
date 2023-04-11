import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExperienceDocument = Experience & Document;

@Schema()
export class Experience {
  @Prop()
  userId: string;

  @Prop()
  title: string;

  @Prop()
  employmentType: string;

  @Prop()
  organization: string;

  @Prop()
  startDate: number;

  @Prop()
  endDate: number;

  @Prop()
  isActive: boolean;

  @Prop()
  createdBy: string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
