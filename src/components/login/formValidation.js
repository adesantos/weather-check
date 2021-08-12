const isUser = RegExp(/^[a-zA-Z0-9._-]+$/i);

export default function formValidation(name, value, schema) {
    const { validate, minLength, maxLength } = schema[name]
    let error = ""

    if (minLength && value.length < minLength) error = `Minimum of ${minLength} characters are required.`
    else if (maxLength && value.length > maxLength) error = `Maximum length of ${maxLength} exceeded!`
    if (!validate) return

    switch (validate) {
        case "username":
            if (!isUser.test(value)) error = "This field accepts only text, numbers and the following special characters \".\" or \"-\" or \"_\""
            break

        case "password":

            if (!value.match(/^(?=.*[a-z])/)) {
                error = "Enter at least one lowercase letter"
            }
            if (!value.match(/^(?=.*[A-Z])/)) {
                error = "Enter at least one uppercase letter"
            }
            if (!value.match(/^(?=.*?[0-9])/)) {
                error = "Enter at least one number"
            }
            if (!value.match(/^(?=.*?[*.!@#$&._?+-])/)) {
                error = "Enter at least one of these specials characters * . ! @ # $ & _ ? + -"
            }

            break

        default:
            break
    }

    return error
}