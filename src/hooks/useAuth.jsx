import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
   const useUtils = useContext(AuthContext);
   return useUtils;
};

export default useAuth;