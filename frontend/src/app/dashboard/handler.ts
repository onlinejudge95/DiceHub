import { Session } from 'next-auth';

export const upsertUserProfileData = async (session: Session) => {
  console.log('User is logged in:', session.user);
};
