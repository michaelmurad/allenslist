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

export type GetItems = (
  _req: NextApiRequest,
  res: NextApiResponse
) => Promise<void>;

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
  url: string;
  description: string;
  img: string;
  title: string;
  domain: string;
}

export type Items = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void>;

export interface ItemProps {
  url: string;
  description: string;
  img: string;
}

export type ItemsController = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void>;

export interface LogoutButtonProps {
  handleShowSignin: () => void;
}

export type PostItem = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void>;

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
}: SigninButtonProps) => React.ReactElement;

export interface SigninButtonProps {
  handleShowSignin: () => void;
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
