export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Amelia R.",
    rating: 5,
    date: "2 weeks ago",
    title: "My new holy grail",
    body: "Skin looks lit-from-within after just a week. Bottle is gorgeous on my vanity too.",
  },
  {
    id: "r2",
    author: "Priya S.",
    rating: 4,
    date: "1 month ago",
    title: "Beautiful, lightweight",
    body: "Absorbs quickly and pairs perfectly with my moisturizer. Wish the bottle was bigger!",
  },
  {
    id: "r3",
    author: "Noor K.",
    rating: 5,
    date: "3 months ago",
    title: "Worth every penny",
    body: "Compliments every time I wear it. Sara's BeautyMart never misses.",
  },
];
