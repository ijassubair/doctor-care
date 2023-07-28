export const rgxNum = /\d/;
export const rgxStrictNum = /^\d+$/;
export const rgxEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const rgxLowerCase = /[a-z]+/;
export const rgxUpperCase = /[A-Z]+/;
export const rgxSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
export const rgxPhoneNo =
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
export const rgxPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?/+\-=]{12,32}$/;
export const rgxCharacter = /^[aA-zZ\s]+$/;
