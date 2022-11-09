import useApi from "../hooks/useApi"
import axios from "axios"
import { urlGenerator } from "../helpers/helper"
import { USERS } from "../constants"

const getUserURL = () =>
    axios.get(urlGenerator(USERS));

export const useUser = () => {

    let { data, request: getUser, resetData, loading } = useApi(getUserURL);


    const getUsers = () => {
        getUser()
    }
    const resetUsers = () => {
        resetData();
    }

    return { data, getUsers ,resetUsers,loading}

}