const validation = (userData, errors, setErrors) => {
    if(!userData.username){
        setErrors({...errors, username: 'Por favor completa este campo'});
    }else if(userData.username.length > 35){
        setErrors({...errors, username: 'El usuario no puede tener más de 35 caracteres'});
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)){
        setErrors({...errors, username: 'El usuario no es válido'});
    }

    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(userData.password)){
        setErrors({...errors, password: ''})
    }else{
        setErrors({...errors, password: 'La password es inválida'})
    }
}

export default validation;