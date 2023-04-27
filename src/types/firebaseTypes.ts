import { UserRank } from '@/constants/user';

export interface Courses {
  id: string;
  title: string;
  thumbnail: string;
  short_description: string;
  description: string[];
  difficulty: number;
  tags: string[];
}

export interface Creator {
  avatar: string;
  description: string;
  channel: string;
  id: string;
  instagram: string;
  name: string;
  world_champ: boolean;
}

export interface Videos {
  creator_id: string;
  name: string;
  video_url: string;
  creator_info?: Creator;
  id: string;
}

export interface CourseContent {
  content: Videos[];
  creators?: Creator[];
}

export interface UserData {
  displayName: string;
  createdAt: string;
  email: string;
  photoURL: string;
  favorites: string[];
  completed: string[];
  rank: UserRank;
}
