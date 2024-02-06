declare type ProjectItem = {
  id: number;
  title: string;
  tags: string[];
  images: {
    id: number;
    src: string;
  }[];
};
