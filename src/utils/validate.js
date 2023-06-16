const validate = (fields) => {
    let invalidFields = [];
    fields.forEach(field => {
        if(field.required && !field.value) {
            invalidFields.push({id: field.id, message: 'Поле не должно быть пустым'});
            return;
        }
        switch (field.type) {
            case "email" : {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!emailRegex.test(field.value)){
                    invalidFields.push({id: field.id, message: "Введите корректный email"});
                    return;
                }
                break;
            }
            case "phone" : {
                const phoneNumberRegex = /^[\d\s()+-]+$/;
                if(!phoneNumberRegex.test(field.value)){
                    invalidFields.push({id: field.id, message: "Недопустимые символы в номере телефона"})
                    return;
                }
                break;
            }
            default : {
                return;
            }
        }
    });
    return invalidFields;
}

export default validate;