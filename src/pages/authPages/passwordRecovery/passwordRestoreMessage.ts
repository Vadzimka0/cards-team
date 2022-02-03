import { PasswordRestoreData } from 'api/authApi';

export const passwordRestoreMessage = (email: string): PasswordRestoreData => {
  const targetLink = `https://vadzimka0.github.io/cards-team/#/enter-new-password/$token$`; // deploy

  return {
    email,
    from: 'cards-admin <wadik.nhl@gmail.com>',
    message: `<div style="background-color: lightcyan; padding: 15px">
                  Password recovery link: 
                  <a href='${targetLink}'>link</a>
              </div>
              `,
  };
};
