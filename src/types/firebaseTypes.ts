import { UserRank } from '@/constants/user';
import { DateTime } from 'luxon';

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
  createdAt: DateTime | string;
  email: string;
  photoURL: string;
  favorites: string[];
  completed: string[];
  rank: UserRank;
  id: string;
}

export type UserNonSensitive = Pick<UserData, 'displayName' | 'photoURL' | 'rank' | 'id'>;

export interface Forum {
  id: string;
  title: string;
  description: string;
}

export interface Topic {
  id: string;
  likes: string[];
  forum_id: string;
  content: any;
  created_at: DateTime | string;
  user_id: string;
  title: string;
  user_profile: UserNonSensitive;
}

export interface Comment {
  id: string;
  content: string;
  created_at: string | DateTime;
  topic_id: string;
  user_id: string;
  user_profile: UserNonSensitive;
}
