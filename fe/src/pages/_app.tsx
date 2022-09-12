/* eslint-disable react/no-unknown-property */
import '../styles/globals.css';
import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useTagsStore } from '@/hooks/useTags';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps | any) {
  const { initial } = useTagsStore();

  React.useEffect(() => {
    initial();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Note Taking App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" maximum-scale="1" user-scalable="no" />
        <meta charSet="utf-8"/>
      </Head>
      <QueryClientProvider client={ queryClient }>
        <Component { ...pageProps } />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default MyApp;
