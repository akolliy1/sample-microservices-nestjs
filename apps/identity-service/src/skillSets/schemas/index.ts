import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillSetDocument = SkillSet & Document;

@Schema()
export class SkillSet {
  @Prop()
  name: string;

  @Prop()
  logo: string;

  @Prop()
  alias: string;

  @Prop()
  description: string;

  @Prop()
  createdBy: string;
}

export const SkillSetSchema = SchemaFactory.createForClass(SkillSet);
