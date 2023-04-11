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

export class UpdateUserDTO {
  profile: Profile;
  address: Address;
}

export class UpdateEmailDTO {
  address: string;
}

export class UpdatePhoneDTO {
  address: string;
}
