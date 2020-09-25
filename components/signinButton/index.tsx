import firebase from 'firebase';

import styles from '@styles/components/SigninButton.module.css';
import { SigninButtonFunc, Provider, CorrectProvider } from '@types';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const microsoftProvider = new firebase.auth.OAuthProvider('microsoft.com');

const correctProvider: CorrectProvider = (provider) => {
  switch (provider) {
    case Provider.GOOGLE:
      return googleProvider;
    case Provider.MICROSOFT:
      return microsoftProvider;
  }
};

export const SigninButton: SigninButtonFunc = ({
  handleShowSignin,
  provider,
}) => {
  const signinUser = async () => {
    try {
      await firebase.auth().signInWithPopup(correctProvider(provider));
      handleShowSignin();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <button className={styles[provider.toLowerCase()]} onClick={signinUser} />
  );
};
