import * as Crypto from "crypto-js";

const APP_SECRET = "lu.Puny4.uan6..lu.pUny4.ku4sa";

function isJSON(data) {
  try {
    JSON.parse(data);
    return true;
  } catch (err) {
    return false;
  }
}

export function encrypt(data) {
  const object = typeof data == "object" ? JSON.stringify(data) : data;
  return Crypto.AES.encrypt(object, APP_SECRET).toString();
}

export function decrypt(data) {
  const predicate = Crypto.AES.decrypt(data, APP_SECRET).toString(
    Crypto.enc.Utf8
  );
  return isJSON(predicate) ? JSON.parse(predicate) : predicate;
}
