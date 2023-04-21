import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import auth from '../../firebase';
import { useUser } from '@/context/userContext';
import FullPageLoader from '@/components/atoms/FullPageLoader';

export function withProtected(Component: React.ComponentType) {
  return function WithProtected(props: React.PropsWithChildren<any>) {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.replace('/');
      }
    }, [user, router]);

    if (!user) {
      return <FullPageLoader loading />;
    }
    return <Component auth={auth} {...props} />;
  };
}
