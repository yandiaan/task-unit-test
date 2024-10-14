'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useEffect } from "react";

const useThemeStore = create(
    persist(
        (set) => ({
            theme: 'dark',
            toggleTheme: () => set((state) => {
                const newTheme = state.theme === 'light' ? 'dark' : 'light';
                return { theme: newTheme };
            }),
        }),
        {
            name: 'theme-storage',
            storage: {
                getItem: (name) => {
                    const storedValue = localStorage.getItem(name);
                    return storedValue ? JSON.parse(storedValue) : null;
                },
                setItem: (name, value) => {
                    localStorage.setItem(name, JSON.stringify(value));
                },
                removeItem: (name) => {
                    localStorage.removeItem(name);
                },
            },
        }
    )
);

export const ThemeProvider = ({ children }) => {
    const { theme } = useThemeStore();

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return <>{children}</>;
};

export default useThemeStore;
