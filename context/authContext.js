import React, { createContext, useState, useContext } from 'react';

// Crear un contexto para la autenticación
const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const hardcodedUsers = [
    { id: 1, email: 'user1@example.com', password: 'password123' },
    { id: 2, email: 'user2@example.com', password: 'password123' },
];

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const signIn = (email, password) => {
        const user = hardcodedUsers.find(u => u.email === email && u.password === password);
        if (user) {
            setCurrentUser(user);
            return true;
        } else {
            return false;
        }
    }

    // Función para cerrar sesión
    const signOut = () => {
        setCurrentUser(null);
    }

    const value = {
        currentUser,
        signIn,
        signOut
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

