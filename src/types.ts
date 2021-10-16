export interface CompanyType {
  name: string;
  logo: string;
}

export interface CardType {
  id: string;
  company: CompanyType;
  jobTags: LabelTypes[];
  title: string;
  timePosted: Date;
  jobType: string;
  location: string;
  keywords: string[];
}

export enum LabelTypes {
  NEW = "NEW",
  FEATURED = "FEATURED",
}
