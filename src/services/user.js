import axios from "axios"

const login = async (email, password) => {

    try {
        const response = await axios.post(
            'https://backend-i5o0.onrender.com/user/login',
            {
                email: email,
                password: password
            }
        )

        console.log("attempting login");

        return response.data;
    } catch (error) {
        return null;
    }

}

const signup = async (email, name, password, age) => {

    try {
        const response = await axios.post(
            'https://backend-i5o0.onrender.com/user',
            {
                email: email,
                name: name,
                password: password,
                age: age
            }
        )
        
        return response.data;
    } catch (error) {
        return null;
    }

}

export {
    login,
    signup
}