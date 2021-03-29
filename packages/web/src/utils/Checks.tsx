export const checkValues = (
    nombre: string,
    apellido: string,
    email: string,
    description: string,
    choose: string
) => {
    if (
        typeof nombre != "string" ||
        typeof apellido != "string" ||
        typeof email != "string" ||
        typeof description != "string" ||
        typeof choose != "string"
    ) {
        return true;
    } else {
        return false;
    }
};

export const emailIsValid = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email) === true) {
        return false;
    } else {
        return true;
    }
};

export const valuesIsValid = (
    nombre: string,
    apellido: string,
    choose: string,
    description: string
) => {
    const regex = /^[a-zA-Z0-9\\']+$/;
    if (
        (regex.test(nombre) !== true ||
            regex.test(apellido) !== true ||
            regex.test(choose) !== true,
        regex.test(description) !== true)
    ) {
        return true;
    }
    return false;
};
