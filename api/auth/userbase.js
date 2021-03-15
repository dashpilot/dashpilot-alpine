import fetch from "node-fetch";

const verifyToken = async function(idToken) {

  const response = await fetch('https://v1.userbase.com/v1/admin/auth-tokens/' + idToken, {
    headers: {
      'Authorization': 'Bearer ' + process.env.UB_TOKEN
    }
  });
  const userid = await response.json();

  if (userid.hasOwnProperty('userId')) {
    return userid.userId;
  } else {
    throw 'Invalid token';
  }

}

export default verifyToken;