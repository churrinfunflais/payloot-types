export interface Loyalty {
  client: Client;
  cart?: Cart;
}

export interface Cart {
  id: string;
  total: number;
  redeemCode?: string;
  discounts?: number;
  shipping?: number;
  taxes?: number;
  items: Item[];
  itemsTotal: number;
  shippingData?: Shipping;
  payments?: Payment[];
}

export interface Payment {
  paymentSystem?: string;
  name?: string;
  value: number;
  bin?: string;
  lastDigits?: string;
}

export interface Shipping {
  zipCode?: string;
  city?: string;
  state?: string;
  country?: string;
  street?: string;
  number?: string;
  neighborhood?: string;
  complement?: string;
  reference?: string;
}

export interface Item {
  id: string;
  refId?: string;
  name?: string;
  price: number;
  sellerId?: string;
  quantity: number;
}

export interface Client {
  id?: string;
  email?: string;
  document?: string;
  name?: string;
  lastName?: string;
  phone?: string;
  birthDate?: string;
  ip?: string;
  documentType?: string;
}
export interface Card {
  expiryDate?: Date;
  createTime?: Date;
  total?: number;
  reserved?: number;
  balance?: number;
  active?: boolean;
  id?: string;
  updateTime?: Date;
  issueDate?: Date;
  caption?: string;
  loyalty?: string;
  redeemCode?: string;
  createUser?: User;
  updateUser?: User;
  redeemToken?: string;
  phone?: string;
  email?: string;
  barcode?: string;
}

export interface Balance {
  balance: number;
  reserved: number;
  total: number;
}
export interface Transaction {
  type: TransactionType;
  value: number;
  description?: string;
  redeemCode?: string;
  redeemToken?: string;
  order?: Order;
  createTime?: Date;
  createUser?: User;
  updateTime?: Date;
  updateUser?: User;
  status?: TransactionStatus;
  authorization?: Authorization;
  error?: string;
}

export interface Authorization {
  id: string;
  createTime: Date;
  createUser: User;
}

export const enum TransactionType {
  CREDIT = "credit",
  DEBIT = "debit",
}

export const enum TransactionStatus {
  PENDING = "pending",
  AUTHORIZED = "authorized",
  SETTLED = "settled",
  CANCELLED = "canceled",
  ERROR = "error",
  PARTIALLY_CANCELLED = "partiallyCancelled",
  PARTIALLY_SETTLED = "partiallySettled",
}
export interface Order {
  id: string;
  cart: Cart;
  client: Client;
  shipping?: Shipping;
}

export interface Settlement {
  id?: string;
  value: number;
  status?: TransactionStatus;
  error?: string;
  updateUser?: User;
  updateTime?: Date;
  createUser?: User;
  createTime?: Date;
}

export interface Cancellation {
  id?: string;
  value: number;
  status?: TransactionStatus;
  error?: string;
  updateUser?: User;
  updateTime?: Date;
  createUser?: User;
  createTime?: Date;
}

export interface User {
  uid: string;
  email: string;
}

export const enum CardIdType {
  UUID = "uuid",
  BIN = "bin",
}
