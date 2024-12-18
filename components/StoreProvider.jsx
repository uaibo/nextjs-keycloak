'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { makeStore, makePersistor } from '@/store/store';
import { useRef } from 'react';

export default function StoreProvider({ children }) {
   const storeRef = useRef();
   const persistorRef = useRef();

   if (!storeRef.current) {
      storeRef.current = makeStore();
      persistorRef.current = makePersistor(storeRef.current);
   }

   return (
      <Provider store={storeRef.current}>
         <PersistGate loading={null} persistor={persistorRef.current}>
            {children}
         </PersistGate>
      </Provider>
   );
}
