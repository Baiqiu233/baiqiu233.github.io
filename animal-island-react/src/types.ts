export type BlogColor =
  | "default"
  | "app-pink"
  | "purple"
  | "app-blue"
  | "app-yellow"
  | "app-orange"
  | "app-teal"
  | "app-green"
  | "app-red"
  | "lime-green"
  | "yellow-green"
  | "brown"
  | "warm-peach-pink";

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  tag: string;
  color: BlogColor;
  cover: string;
  excerpt: string;
  readTime: string;
  legacyPath: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  takeaways: string[];
};
