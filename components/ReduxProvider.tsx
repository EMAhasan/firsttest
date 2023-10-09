'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';

type Props = {
    children: React.ReactNode;
  };
export function ReduxProviders( { children }: Props ) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}