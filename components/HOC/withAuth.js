import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
    return (props) => {
        if (typeof window !== "undefined") {
            const Router = useRouter();

            const accessToken = localStorage.getItem("access_token");

            if (!accessToken) {
                Router.replace("/login");
                return null;
            }

            return <WrappedComponent {...props} />;
        }
        return null;
    };
};

export default withAuth;