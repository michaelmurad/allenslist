import React from 'react';
import firebase from 'firebase';
import { useRecoilState } from 'recoil';
import { GetServerSideProps } from 'next';

import { userState, initialUserState } from '@state/user';
import { itemErrorState, itemState } from '@state/items';
import { getAllCollection } from '@server/services/getAllCollection';
import { Header } from '@components/header';
import { Items } from '@components/items';
import { Footer } from '@components/footer';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await getAllCollection('items');
    return { props: { itemJSON: JSON.stringify(data), error: null } };
  } catch (error) {
    console.error(error);
    return { props: { itemJSON: null, error: error.message } };
  }
};

const Home = ({
  itemJSON,
  error,
}: {
  itemJSON: string;
  error: string;
}): React.ReactElement => {
  const [{ displayName }, setUser] = useRecoilState(userState);
  const [, setItems] = useRecoilState(itemState);
  const [, setError] = useRecoilState(itemErrorState);
  React.useEffect(() => {
    setItems(itemJSON);
    setError(error);
  }, []);

  firebase.auth().onAuthStateChanged((user) => {
    if (user && user?.displayName !== displayName) {
      const { displayName, email, photoURL, uid } = user;
      setUser({ displayName, email, photoURL, uid });
    }
    if (!user && displayName) {
      setUser(initialUserState);
    }
  });
  return (
    <>
      <Header />
      <main>
        <Items />
      </main>
      <Footer />
    </>
  );
};

export default Home;
