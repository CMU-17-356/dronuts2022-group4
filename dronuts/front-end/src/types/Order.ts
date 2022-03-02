export default interface Order {
  id: number;
  customer: number;
  address: string;
  status: string;
  purchase_date: Date;
  items: number[][];
};

export const EmptyOrder: Order = {
  id: -1,
  customer: -1,
  address: '',
  status: 'Submitted',
  purchase_date: new Date(),
  items: [],
};
