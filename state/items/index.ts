import { atom, selector } from 'recoil';
import { FaunaQueryData, Item } from '@types';

const initialItemState = '[]';

export const itemSelector = selector({
  key: 'itemSelector', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const itemJSON = get(itemState);
    const error = get(itemErrorState);
    const items: FaunaQueryData<Item>[] = JSON.parse(itemJSON);
    return { items, error };
  },
});

export const itemState = atom({
  key: 'itemState', // unique ID (with respect to other atoms/selectors)
  default: initialItemState, // default value (aka initial value)
});

export const itemErrorState = atom({
  key: 'itemErrorState',
  default: '',
});
