import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop()
  userId: string;

  @Prop()
  name: string;

  @Prop()
  logo: string;

  @Prop()
  companyId: string;

  @Prop()
  addressId: string;

  @Prop()
  createdBy: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
