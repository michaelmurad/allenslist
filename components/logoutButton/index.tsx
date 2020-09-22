import React from 'react';
import firebase from 'firebase';

import { Button } from '@components/button';
import { LogoutButtonProps } from '@types';

export const LogoutButton = ({
  handleShowSignin,
}: LogoutButtonProps): React.ReactElement => (
  <Button
    onClick={() => {
      handleShowSignin();
      firebase.auth().signOut();
    }}
    label="logout"
  />
);
