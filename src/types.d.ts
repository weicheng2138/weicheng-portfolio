type BulletPointContent = {
  isBulletPoint: true;
  title: string;
  bulletPoints: string[];
};

type StringContent = {
  isBulletPoint: false;
  title: string;
  content: string;
};

declare type ProjectItem = {
  id: string;
  title: string;
  tags: string[];
  images: {
    id: number;
    src: string;
  }[];
  contents: (BulletPointContent | StringContent)[];
};
