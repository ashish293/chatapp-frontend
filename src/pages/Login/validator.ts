const validate = (values: { name: string; email: string; password: string }, isLogin:boolean) => {
    const errors: { name?: string; email?: string; password?: string } = {};
    if (!isLogin && !values.name) {
        errors.name = "Name is required";
    }
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }
    return errors;
}
export {  validate}