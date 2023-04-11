import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop()
  userId: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  logo: string;

  @Prop()
  addressId: string;

  @Prop()
  isActive: boolean;

  @Prop()
  createdBy: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
