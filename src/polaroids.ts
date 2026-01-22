export type Polroid = {
  img: string;
  top: number;
  left: number;
  index: number;
  rotate: number;
  caption: string;
};

// Helper function to get image path with base URL
const getImagePath = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  // Remove leading slash from path if present, then combine with baseUrl
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
};

// Customize Polaroids location, src and z-index

export const Polaroids: Polroid[] = [
  {
    img: getImagePath('/example-1.webp'),
    top: -2,
    left: 1,
    index: 1,
    rotate: -6,
    caption: 'Light Love',
  },
  {
    img: getImagePath('/example-2.webp'),
    top: 30,
    left: -1,
    index: 3,
    rotate: 6,
    caption: 'Skin routine :)',
  },
  {
    img: getImagePath('/example-3.webp'),
    top: 60,
    left: 1,
    index: 1,
    rotate: -6,
    caption: 'Brussels trip',
  },
  {
    img: getImagePath('/example-4.webp'),
    top: -4,
    left: 17,
    index: 5,
    rotate: 6,
    caption: 'Rome',
  },
  {
    img: getImagePath('/example-5.webp'),
    top: 30,
    left: 15,
    index: 4,
    rotate: -6,
    caption: 'Mysterious',
  },
  {
    img: getImagePath('/example-6.webp'),
    top: 60,
    left: 17,
    index: 3,
    rotate: 6,
    caption: 'First picture together',
  },
  {
    img: getImagePath('/example-7.webp'),
    top: -2,
    left: 32,
    index: 3,
    rotate: -6,
    caption: 'Walk with me?',
  },
  {
    img: getImagePath('/example-8.webp'),
    top: 30,
    left: 32,
    index: 1,
    rotate: -6,
    caption: 'Shopping together',
  },
  {
    img: getImagePath('/example-9.webp'),
    top: 66,
    left: 32,
    index: 1,
    rotate: -6,
    caption: 'Goooffyy',
  },
  {
    img: getImagePath('/example-10.webp'),
    top: 1,
    left: 48,
    index: 8,
    rotate: 6,
    caption: 'Princeseta',
  },
  {
    img: getImagePath('/example-11.webp'),
    top: 30,
    left: 49,
    index: 1,
    rotate: 6,
    caption: 'Double dates',
  },
  {
    img: getImagePath('/example-12.webp'),
    top: 60,
    left: 49,
    index: 10,
    rotate: 6,
    caption: 'Formula 1',
  },
  {
    img: getImagePath('/example-13.webp'),
    top: -2,
    left: 65,
    index: 6,
    rotate: -6,
    caption: 'Greece',
  },
  {
    img: getImagePath('/example-14.webp'),
    top: 30,
    left: 67,
    index: 6,
    rotate: -6,
    caption: 'Sorry about this one :)',
  },
  {
    img: getImagePath('/example-15.webp'),
    top: 62,
    left: 67,
    index: 6,
    rotate: 6,
    caption: 'My cutie',
  },
  {
    img: getImagePath('/example-16.webp'),
    top: -2,
    left: 80,
    index: 10,
    rotate: -6,
    caption: 'Beautiful girl',
  },
  {
    img: getImagePath('/example-17.webp'),
    top: 30,
    left: 84,
    index: 2,
    rotate: 6,
    caption: 'Denmark and Jora',
  },
  {
    img: getImagePath('/example-18.webp'),
    top: 60,
    left: 82,
    index: 9,
    rotate: -6,
    caption: 'Rome but now together',
  },
];
