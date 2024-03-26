/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { onCall } = require('firebase-functions/v2/https');
const { auth } = require('firebase-admin');
const { initializeApp } = require('firebase-admin/app');

initializeApp();

exports.addAdminRole = onCall(({ data }) => {
  return auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made an admin.`,
      };
    })
    .catch((err) => {
      return err;
    });
});
