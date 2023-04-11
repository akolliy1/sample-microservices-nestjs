export interface IEmail {
  address: string;
  isVerified: boolean;
  verifiedOn: string;
}

export interface IPhone {
  address: string;
  isVerified: boolean;
  verifiedOn: string;
}

export interface IProfile {
  firstName: string;
  lastName: string;
  otherName: string;
  imageUrl: string;
  gender: string;
  dateOfBirth: number;
  bio: string;
}

export interface IPeriod {
  start?: number;
  end?: number;
}

export interface IAddress {
  use: string;
  type: string;
  text?: string;
  line?: string;
  city?: string;
  district?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  period?: IPeriod;
}

export interface IAuth {
  userId: string;
  email: IEmail;
  phone: IPhone;
  profile: IProfile;
  address: IAddress;
  createdBy: string;
}
