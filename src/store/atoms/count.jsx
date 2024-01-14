import { atom, selector } from 'recoil'

export const countState = atom({
  key: 'countState',
  default: 0,
})

export const evenSelectors = selector({
  key: 'evenSelectors',
  get: (({ get }) => {
    const counter = get(countState)
    return counter % 2 == 0;
  })
})

