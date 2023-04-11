import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IAddress, IPeriod, IPhone, IProfile } from '../interfaces';

export type UserDocument = User & Document;

// Nested Schemas
@Schema()
export class Email extends Document {
  @Prop({ required: true })
  address: string;

  @Prop()
  isVerified: boolean;

  @Prop()
  verifiedOn: string;
}

// Sub Schema definition
export const EmailSchema = SchemaFactory.createForClass(Email);

@Schema()
export class Phone extends Document {
  @Prop({ required: true })
  address: string;

  @Prop()
  isVerified: boolean;

  @Prop()
  verifiedOn: string;
}

// Sub Schema definition
export const PhoneSchema = SchemaFactory.createForClass(Phone);

@Schema()
export class Profile extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  otherName: string;

  @Prop()
  imageUrl: string;

  @Prop()
  gender: string;

  @Prop()
  dateOfBirth: number;

  @Prop()
  bio: string;
}

// Sub Schema definition
export const ProfileSchema = SchemaFactory.createForClass(Profile);

@Schema()
class Period extends Document {
  @Prop()
  start?: number;

  @Prop()
  end?: number;
}

// Sub Schema definition
export const PeriodSchema = SchemaFactory.createForClass(Period);

@Schema()
class Address extends Document {
  @Prop()
  use: string;

  @Prop()
  type: string;

  @Prop()
  text?: string;

  @Prop()
  line?: string;

  @Prop()
  city?: string;

  @Prop()
  district?: string;

  @Prop()
  state?: string;

  @Prop()
  postalCode?: string;

  @Prop()
  country?: string;

  @Prop({ type: PeriodSchema })
  period?: IPeriod;
}

// Sub Schema definition
export const AddressSchema = SchemaFactory.createForClass(Address);

// Main/Parent Schema
@Schema()
export class User {
  @Prop({ unique: true })
  username: string;

  @Prop({ type: EmailSchema })
  email: Email;

  @Prop({ type: PhoneSchema })
  phone: IPhone;

  @Prop({ type: ProfileSchema })
  profile: IProfile;

  @Prop({ type: AddressSchema })
  address: IAddress;

  @Prop()
  // ['CORPORATE', 'DEVELOPER']
  type: string;

  @Prop()
  token: string;

  @Prop()
  password_reset_token: string;

  @Prop()
  createdBy: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
