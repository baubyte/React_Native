import { useEffect, useRef, useState } from "react";
import axios from "axios";
import type { RequestResponseUserListResponse, User } from "../interfaces";

const loadUserList = async (page: number = 1) => {
    try {
        const { data } = await axios.get<RequestResponseUserListResponse>('https://reqres.in/api/users', {
            params: {
                page,
            },
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1',
            },
        });
        return data.data; // Retorna la lista de usuarios
    } catch (error) {
        console.error('Error fetching user list:', error);
        return [];
    }
}
export const useUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const currentPage = useRef(1);

    useEffect(() => {
        loadUserList(currentPage.current)
            .then(setUsers)
            .catch(error => {
                console.error('Error fetching user list:', error);
            });
    }, []);
    const nextPage = async () => {
        currentPage.current += 1;
        const newUsers = await loadUserList(currentPage.current);
        if (newUsers.length > 0) {
            setUsers(newUsers);
            return; // Salir si hay nuevos usuarios
        }
        currentPage.current -= 1; // Revertir si no hay más usuarios

    }
    const previousPage = async () => {
        if (currentPage.current > 1) {
            currentPage.current -= 1;
            const newUsers = await loadUserList(currentPage.current);
            setUsers(newUsers);
        }
    }
    return {
        // Properties
        users,
        // Methods
        nextPage,
        previousPage
    }
}
