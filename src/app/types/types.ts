interface Price {
  monthly: number;
  yearly: number;
}

export interface Option {
  image: string;
  title: string;
  price: Price;
}

export interface Addon {
  id: string;
  title: string;
  description: string;
  price: Price;
}
