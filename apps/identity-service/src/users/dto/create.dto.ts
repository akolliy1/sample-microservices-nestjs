class Email {
  address: string;
  isVerified: boolean;
  verifiedOn: string;
}

class Phone {
  address: string;
  isVerified: boolean;
  verifiedOn: string;
}

class Profile {
  firstName: string;
  lastName: string;
  otherName: string;
  imageUrl: string;
  gender: string;
  dateOfBirth: number;
  bio: string;
}

class IPeriod {
  start?: number;
  end?: number;
}

class Address {
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

export class CreateUserDTO {
  userId: string;
  email: Email;
  phone: Phone;
  profile: Profile;
  address: Address;
  createdBy: string;
}
