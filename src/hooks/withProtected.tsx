import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import auth from '../../firebase';
import { useUser } from '@/context/userContext';
import PageLoader from '@/components/atoms/PageLoader';
import { NextPage } from 'next';

export function withProtected(Component: React.ComponentType<any>) {
  return function WithProtected(props: React.PropsWithChildren<any>) {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.replace('/');
      }
    }, [user, router]);

    if (!user) {
      return <PageLoader isLoading />;
    }
    return <Component auth={auth} {...props} />;
  };
}
