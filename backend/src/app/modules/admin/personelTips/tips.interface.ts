import { Document } from 'mongoose';

export const PERSONAL_TIP_CATEGORIES = [
  'Personal Tips',
  'Online Safety',
  'Froud Protection',
  'Personal Meeting',
] as const;

export type PersonalTipCategory = (typeof PERSONAL_TIP_CATEGORIES)[number];

export interface IOnlinePersonalTip extends Document {
  category: PersonalTipCategory;
  image: string;
  title: string;
  subTitle: string;

  displayOrder: number;

  isActive: boolean;
  isDeleted: boolean;

  createdAt: Date;
  updatedAt: Date;
}
