export const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

export const validateName = (name) =>{
  

  return name.match(/^[a-zA-Z]+$/);


}

export function calculateImageText(path, lName, fName) {
  if (lName === '') {
    return (fName.substring(0, 2));
  }
  else {
    return (fName.substring(0, 1) + lName.substring(0, 1));
  }
}