import { createContext } from "@lit-labs/context";

export type Theme = {
    is_dark_theme: boolean;
    toggleTheme: () => void;
};

export const themeContext = createContext<Theme>("themeContext");
