import { Consultancy } from "../../../Controller/main.js";

const etoEko = new Consultancy();

export function signUp() {
  try {
    console.log(etoEko.getClient("alfredchrisayo@gmail.com"));
  } catch (error) {
    console.log(error);
  }
}
