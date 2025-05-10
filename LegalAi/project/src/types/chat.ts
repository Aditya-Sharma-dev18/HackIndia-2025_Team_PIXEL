export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
  citation?: {
    title: string;
    section: string;
    link: string;
  };
}