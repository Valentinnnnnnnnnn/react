import LoginForm from "../components/ui/Forms/LoginForm";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

function Login() {
    const {isAuthenticated} = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/tasks" />;
    }

    return (
        <LoginForm />
    );
}

export default Login
