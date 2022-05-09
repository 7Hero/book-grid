interface Price {
  currency: string;
  value: number;
  displayValue: string
}

export default interface IBook {
  ISBN: number;
  title: string;
  author: string;
  summary: string;
  image: string;
  price: Price;
}
