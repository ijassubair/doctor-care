import { useSelector } from "react-redux";

const IsLoggedIn = () => {
  const user = useSelector((store) => {
    return store.user || [];
  });

  return user?.loginVerified;
};

const AuthService = { IsLoggedIn };

export default AuthService;
