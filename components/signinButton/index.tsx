import firebase from 'firebase';

import styles from '@styles/components/SigninButton.module.css';
import { SigninButtonFunc } from '@types';

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const SigninButton: SigninButtonFunc = ({ handleShowSignin }) => {
  const signinUser = async () => {
    try {
      await firebase.auth().signInWithPopup(googleProvider);
      handleShowSignin();
    } catch (error) {
      alert(error.message);
    }
  };
  return <button className={styles.signinButton} onClick={signinUser} />;
};
