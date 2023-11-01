export type TDiscountData =
  | {
      parityPrice: string;
      parity: number;
      PRODUCT_PRICE: number;
    }
  | {
      error: string;
    };
