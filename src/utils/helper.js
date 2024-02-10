export const validateFields = (email, password) => {
  console.log(email, password);
  const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );

  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  console.log(isValidEmail, isValidPassword);

  if (!isValidEmail) {
    return "Enter vaild Email address";
  }
  if (!isValidPassword) {
    return "Enter Valid Password";
  }

  return null;
};
