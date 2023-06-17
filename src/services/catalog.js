import axios from "axios"

const getCatalog = async () => {

    try {
        const response = await axios.get(
            'https://backend-i5o0.onrender.com/catalog',
        )

        console.log("attempting to get items");

        return response.data;
    } catch (error) {
        return null;
    }
}

export {
    getCatalog
}