export const navData = (lang) => [
    {
        name: "Blog",
        path: '/',
    },
    {
        name: lang === "en" ? "Users" : "Pengguna",
        path: "/users",
    }
];