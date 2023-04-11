export class CreateExperienceDTO {
  userId: string;
  title: string;
  employmentType: string;
  organization: string;
  startDate: number;
  endDate: number;
  isActive: boolean;
  createdBy: string;
}
