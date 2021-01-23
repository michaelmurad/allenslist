import { NextApiRequest, NextApiResponse, NextComponentType } from 'next';
import { auth } from 'firebase-admin';

export type Authentication = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: (value: auth.DecodedIdToken | Error) => void
) => Promise<void>;

export interface AppProps {
  Component: NextComponentType;
  pageProps: any;
}

export interface ButtonProps {
  onClick: (e: any) => void;
  label: string;
  disabled?: boolean;
}

export enum Collection {
  items = 'items',
}

export type GetAllCollection = (
  collection: keyof typeof Collection
) => Promise<FaunaItem[]>;

export interface FaunaItem {
  data: Item;
  ts: number;
  ref: any;
}

export interface FaunaQuery {
  data: FaunaItem[];
}

export type Fetcher = (
  url: string,
  method?: string,
  body?: Record<string, unknown>
) => Promise<FetcherReturn>;

export interface FetcherReturn {
  data: any;
  error: string;
}

export interface Item {
  description: string;
  icon: string;
  image: string;
  keywords: string[];
  title: string;
  language: string;
  type: string;
  url: string;
  provider: string;
}

export type Items = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void>;

export interface ItemProps {
  url: string;
  description: string;
  image: string;
  title: string;
}

export type GetItems = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void>;

export type WriteItems = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void>;

export interface LogoutButtonProps {
  handleShowSignin: () => void;
}
export type CorrectProvider = (
  provider: Provider
) => firebase.auth.GoogleAuthProvider | firebase.auth.OAuthProvider;

export type WriteToCollection = (
  collection: keyof typeof Collection,
  data: string
) => Promise<Record<string, unknown>>;

export enum Provider {
  GOOGLE = 'Google',
  MICROSOFT = 'Microsoft',
}

export type RunMiddleWare = (
  req: NextApiRequest,
  res: NextApiResponse,
  middleware: (
    req: NextApiRequest,
    res: NextApiResponse,
    callback: (result: Error | any) => Error | any
  ) => unknown
) => Promise<Error | any>;

export type SigninButtonFunc = ({
  handleShowSignin,
  provider,
}: SigninButtonProps) => React.ReactElement;

export interface SigninButtonProps {
  handleShowSignin: () => void;
  provider: Provider;
}

export interface SigninProps {
  handleShowSignin: () => void;
  isSignedIn: boolean;
}

export interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string;
}
