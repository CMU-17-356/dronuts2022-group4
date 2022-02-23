/* Donut cart interface that stores donut IDs and quantities.
 * Cart also stores the time that the cart was last modified. */

export default interface DonutCart {
  date: Date;
  donuts: Record<number, number>; // Object that has keys of id: quantity
};
