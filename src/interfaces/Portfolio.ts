import { MarkdownItem } from './Markdown';

export interface Portfolio extends MarkdownItem {
  coverImage: string;
  screenshot: string;
  technologies: string[];
}
