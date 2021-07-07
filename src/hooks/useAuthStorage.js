import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useAuthStorage = () => {
  const authStorageContext = useContext(AuthStorageContext);
  if (!authStorageContext) {
    throw new Error(
      "Auth Storage must be used within an AuthStorageContext Provider"
    );
  }
  return authStorageContext;
};

export default useAuthStorage;
