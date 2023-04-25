export interface Post {
  slug: string;
  createdAt: string | Date;
  data: Record<string, any>;
  content: string;
  timeToRead: string;
}
