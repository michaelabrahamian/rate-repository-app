import { useQuery } from "@apollo/client";
import { AUTHORIZED_USER } from "../graphql/queries";

const useAuthorizedUser = () => {
  const { data, error, loading } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: "network-only",
  });

  return { authorizedUser: data?.authorizedUser, error, loading };
};

export default useAuthorizedUser;
