import dynamic from 'next/dynamic';

import { LogoutButtonProps, SigninButtonProps, SigninProps } from '@types';

const DynamicLogoutButton = dynamic(
  async (): Promise<React.FunctionComponent<LogoutButtonProps>> => {
    const { LogoutButton } = await import('../logoutButton');
    return LogoutButton;
  }
);

const DynamicSigninButton = dynamic(
  async (): Promise<React.FunctionComponent<SigninButtonProps>> => {
    const { SigninButton } = await import('../signinButton');
    return SigninButton;
  }
);

export const Signin = ({
  handleShowSignin,
  isSignedIn,
}: SigninProps): React.ReactElement => {
  const showSignedIn = isSignedIn ? (
    <DynamicLogoutButton handleShowSignin={handleShowSignin} />
  ) : (
    <DynamicSigninButton handleShowSignin={handleShowSignin} />
  );

  return showSignedIn;
};
