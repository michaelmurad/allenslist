import { User } from '@types';
import { atom } from 'recoil';

export const initialUserState: User = {
  displayName: '',
  email: '',
  photoURL: '',
  uid: '',
};

export const userState = atom({
  key: 'userState', // unique ID (with respect to other atoms/selectors)
  default: initialUserState, // default value (aka initial value)
});
