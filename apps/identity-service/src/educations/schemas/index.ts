import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EducationDocument = Education & Document;

@Schema()
export class Education {
  @Prop()
  userId: string;

  @Prop()
  name: string;

  @Prop()
  degree: string;

  @Prop()
  fieldOfStudy: string;

  @Prop()
  startDate: number;

  @Prop()
  endDate: number;

  @Prop()
  isActive: boolean;

  @Prop()
  createdBy: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
