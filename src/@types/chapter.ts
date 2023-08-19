export const Tags = ['h1', 'h2', 'h3', 'p'];

export type TagName = 'h1' | 'h2' | 'h3' | 'p';

export type Line = {
  tagName: TagName;
  content: string;
};
