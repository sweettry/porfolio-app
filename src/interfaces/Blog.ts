import { MarkdownItem } from './Markdown';

export interface Blog extends MarkdownItem {
  coverImage: string;
  avatar?: string;
  author: string;
}
