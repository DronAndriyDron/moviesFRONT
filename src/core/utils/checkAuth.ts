import { TOKEN } from "./constants";

export const checkAuth = () => !!localStorage.getItem(TOKEN);
