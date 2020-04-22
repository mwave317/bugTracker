const Validate = (values) => {
    let errors = {};

    if (!values.firstName) {
        errors.firstName = 'First name is required';
    }

    if (!values.lastName) {
        errors.lastName = 'Last name is required';
    }

    if (!values.email) {
        errors.email = 'Email address  is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address does not meet minimum specifications.";
    }

    if (!values.username) {
        errors.username = 'Username is required';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be more than 8 characters';
    } else if (!/[A-Z]/.test(values.password)) {
        errors.password = 'Password must contain one capital letter.';
    }
    else if (!/[0-9]/.test(values.password)) {
        errors.password = 'Password must contain at least one number.';
    }
    // else if (!/[~`!@#$%^&*+=\-[\]\\';,/{}|\\":<>_?]/.test(values.password)) {
    //     errors.password = 'Password must contain one special character';
    // }
    else if (values.password !== values.reenterPassword) {
        errors.password = 'The passwords do not match';
    }

    errors.phone = /(?:(\+?1)?[ -]?)\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/;
    return errors;
}

export default Validate;