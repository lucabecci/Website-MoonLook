export const checkValues = (
    nombre: string,
    apellido: string,
    email: string,
    description: string,
    choose: string,
    numero: number
) => {
    if (
        typeof nombre != "string" ||
        typeof apellido != "string" ||
        typeof email != "string" ||
        typeof description != "string" ||
        typeof choose != "string" ||
        typeof numero != "number"
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
