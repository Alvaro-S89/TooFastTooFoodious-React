import useSWR, { mutate } from "swr";
import client from "../utils/axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = ({middleware, url}) => {

    const token = localStorage.getItem('AUTH_TOKEN')
    const navigate = useNavigate()

    const{ data, error, mutate } = useSWR('/api/user', () => 
        client('/api/user', {
            headers: {
            Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw error(error.response.data.errors)
        })
    )

    const register = async (data, setErrors) => {
        try {
            const response = await client.post('/api/register', data)
            localStorage.setItem('AUTH_TOKEN', response.data.token)
            setErrors([])
            await mutate()
        } catch (error) {
            setErrors(Object.values(error.response.data.errors))
        }
    }
    const login = async (data, setErrors ) => {
        try {
            const response = await client.post('/api/login', data)
            localStorage.setItem('AUTH_TOKEN', response.data.token)
            setErrors([])
            await mutate()
        } catch (error) {
            setErrors(Object.values(error.response.data.errors))
        }
    }
    const logout = async () => {
        try {
            await client.post('/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                    }
            })
            localStorage.removeItem('AUTH_TOKEN')
            await mutate(undefined)
        } catch (error) {
            throw error(error.response.data.errors)
        }
    }

    useEffect(() => {
      if(middleware === 'guest' && url && data) {
        navigate(url)
      }
      if(middleware === 'auth' && error) {
        navigate('/auth/login')
      }
    }, [data, error])
    

    return {
        register,
        login,
        logout,
        data,
        error
    }
}