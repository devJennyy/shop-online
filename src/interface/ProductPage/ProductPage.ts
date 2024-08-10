export interface IProduct {
    selectedMedia: string;
    selectionMedia: string[];
    shopName: string;
    productName: string;
    itemCurrentPrice: number;
    itemPreviousPrice: number;
    discountPercentage: number;
    itemLeft: number;
    size?: string[];
    colors: string[];
  }
  
  export interface IProductPage {
    hat: IProduct;
    headphone: IProduct;
  }
  