export const Tags = ['h1', 'h2', 'h3', 'p', 'li'];

export type TagName = 'p' | 'h1' | 'h2' | 'h3' | 'code' | 'span' | 'li';

export type Line = {
  tagName: TagName;
  content: string;
  includes: Line[];
};

export type Content = {
  id: string;
  title: string;
  order?: number;
  level?: number;
};

/* export type Paragraph = {
  tagName: TagName;
  content: string;
  includes: Paragraph[];
};
 */
