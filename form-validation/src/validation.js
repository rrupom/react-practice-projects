export default function validator(values) {
  const error = {};
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (values.name == "") {
    error.name = "Input Name. It is required";
  }
  if (values.email === "" || !emailPattern.test(values.email)) {
    error.email = "Please enter a valid email";
  }

  if (values.password === "" || !passwordPattern.test(values.password)) {
    error.password = "Please enter a valid password";
  }

  if (
    values.confirmPassword === "" ||
    values.password !== values.confirmPassword
  ) {
    error.confirmPassword = "Password does not match";
  }

  return error;
}
