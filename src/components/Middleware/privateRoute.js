import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLogged = useSelector((state) => state.loginReducer.isLogged);

  // Si l'utilisateur n'est pas connecté, redirige vers /sign-in
  if (!isLogged) {
    return <Navigate to="/sign-in" />;
  }
  return children;
}