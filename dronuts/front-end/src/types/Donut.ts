export default interface Donut {
  id: number;
  name: string;
  price: number;
  description: string;
  available: boolean;
  img_url: string;
  nutrition_info: string[];
};

export const EmptyDonut: Donut = {
  id: -1,
  name: '',
  price: 0.00,
  description: '',
  available: false,
  img_url: '',
  nutrition_info: [],
};
