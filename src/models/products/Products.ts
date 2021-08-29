export interface IProducts {
  id: string;
  availableForSale: boolean;
  createdAt: string;
  updatedAt: string;
  descriptionHtml: string;
  description: string;
  handle: string;
  productType: string;
  title: string;
  vendor: string;
  publishedAt: string;
  onlineStoreUrl?: null;
  options?: (OptionsEntity)[] | null;
  images?: (ImagesEntity)[] | null;
  variants?: (VariantsEntity)[] | null;
  type: Type;
  hasNextPage: HasNextPageOrHasPreviousPage;
  hasPreviousPage: boolean;
  variableValues: VariableValues;
}
export interface OptionsEntity {
  id: string;
  name: string;
  values?: (ValuesEntity)[] | null;
  type: Type1;
}
export interface ValuesEntity {
  value: number | string;
  type: Type2;
}
export interface Type2 {
  name: string;
  kind: string;
}
export interface Type1 {
  name: string;
  kind: string;
  fieldBaseTypes: FieldBaseTypes;
  implementsNode: boolean;
}
export interface FieldBaseTypes {
  name: string;
  values: string;
}
export interface ImagesEntity {
  id: string;
  src: string;
  altText?: null;
  type: Type3;
  hasNextPage: HasNextPageOrHasPreviousPage | boolean;
  hasPreviousPage: boolean | HasNextPageOrHasPreviousPage;
  variableValues: VariableValues;
}
export interface Type3 {
  name: string;
  kind: string;
  fieldBaseTypes: FieldBaseTypes1;
  implementsNode: boolean;
}
export interface FieldBaseTypes1 {
  altText: string;
  id: string;
  originalSrc: string;
  src: string;
}
export interface HasNextPageOrHasPreviousPage {
  value: boolean;
}
export interface VariableValues {
  first: number;
}
export interface VariantsEntity {
  id: string;
  title: string;
  price: number;
  priceV2: PriceOrCompareAtPriceOrPriceV2OrCompareAtPriceV2;
  presentmentPrices?: (PresentmentPricesEntity)[] | null;
  weight: number;
  available: boolean;
  sku: string;
  compareAtPrice: number;
  compareAtPriceV2: PriceOrCompareAtPriceOrPriceV2OrCompareAtPriceV2;
  image: Image;
  selectedOptions?: (SelectedOptionsEntity)[] | null;
  unitPrice?: null;
  unitPriceMeasurement: UnitPriceMeasurement;
  type: Type4;
  hasNextPage: HasNextPageOrHasPreviousPage | boolean;
  hasPreviousPage: boolean | HasNextPageOrHasPreviousPage;
  variableValues: VariableValues;
}
export interface PriceOrCompareAtPriceOrPriceV2OrCompareAtPriceV2 {
  amount: number;
  currencyCode: string;
  type: Type5;
}
export interface Type5 {
  name: string;
  kind: string;
  fieldBaseTypes: FieldBaseTypes2;
  implementsNode: boolean;
}
export interface FieldBaseTypes2 {
  amount: string;
  currencyCode: string;
}
export interface PresentmentPricesEntity {
  price: PriceOrCompareAtPriceOrPriceV2OrCompareAtPriceV2;
  compareAtPrice: PriceOrCompareAtPriceOrPriceV2OrCompareAtPriceV2;
  type: Type6;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  variableValues: VariableValues;
}
export interface Type6 {
  name: string;
  kind: string;
  fieldBaseTypes: FieldBaseTypes3;
  implementsNode: boolean;
}
export interface FieldBaseTypes3 {
  compareAtPrice: string;
  price: string;
}
export interface Image {
  id: string;
  src: string;
  altText?: null;
  type: Type3;
}
export interface SelectedOptionsEntity {
  name: string;
  value: number | string | number | string | number | string;
  type: Type7;
}
export interface Type7 {
  name: string;
  kind: string;
  fieldBaseTypes: FieldBaseTypes4;
  implementsNode: boolean;
}
export interface FieldBaseTypes4 {
  name: string;
  value: string;
}
export interface UnitPriceMeasurement {
  measuredType?: null;
  quantityUnit?: null;
  quantityValue: number;
  referenceUnit?: null;
  referenceValue: number;
  type: Type8;
}
export interface Type8 {
  name: string;
  kind: string;
  fieldBaseTypes: FieldBaseTypes5;
  implementsNode: boolean;
}
export interface FieldBaseTypes5 {
  measuredType: string;
  quantityUnit: string;
  quantityValue: string;
  referenceUnit: string;
  referenceValue: string;
}
export interface Type4 {
  name: string;
  kind: string;
  fieldBaseTypes: FieldBaseTypes6;
  implementsNode: boolean;
}
export interface FieldBaseTypes6 {
  availableForSale: string;
  compareAtPrice: string;
  compareAtPriceV2: string;
  id: string;
  image: string;
  presentmentPrices: string;
  price: string;
  priceV2: string;
  product: string;
  selectedOptions: string;
  sku: string;
  title: string;
  unitPrice: string;
  unitPriceMeasurement: string;
  weight: string;
}
export interface Type {
  name: string;
  kind: string;
  fieldBaseTypes: FieldBaseTypes7;
  implementsNode: boolean;
}
export interface FieldBaseTypes7 {
  availableForSale: string;
  createdAt: string;
  description: string;
  descriptionHtml: string;
  handle: string;
  id: string;
  images: string;
  onlineStoreUrl: string;
  options: string;
  productType: string;
  publishedAt: string;
  title: string;
  updatedAt: string;
  variants: string;
  vendor: string;
}
