declare type ProjectItem = {
  id: string;
  title: string;
  tags: string[];
  images: {
    id: number;
    src: string;
  }[];
  contents: {
    title: string;
    content?: string;
    bulletPoints?: string[];
  }[];
};
