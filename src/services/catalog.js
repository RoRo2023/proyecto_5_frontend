import axios from "axios"

const getCatalog = async () => {

    try {
        const response = await axios.get(
            'http://localhost:5500/catalog',
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