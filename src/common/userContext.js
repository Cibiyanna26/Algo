import { useContext ,createContext} from "react";

const userContext = createContext({
    currentUser:"DefaultUser",
});

export default userContext;