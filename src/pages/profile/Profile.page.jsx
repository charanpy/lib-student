import React from 'react';
import { useAuth } from '../../context/auth.context';
import ProfileComponent from '../../components/profile/Profile.component';
import Container from '../../components/shared/container/Container';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  return (
    <Container header='Profile' btnText='LOGOUT' onClick={logout}>
      <ProfileComponent user={user} />
    </Container>
  );
};

export default ProfilePage;
