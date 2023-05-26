import http from "./config.service";


class AuthService {
    loginWithGoogle() {
        return http.post("/auth/google/login");
    }

    loginWithEmail() {
        return http.post("/auth/login");
    }

    refreshToken() {
        return http.post("/auth/refresh");
    }

    verifyToken() {
        return http.get("/users/me");
    }

    logOut() {
        return http.delete("/auth/login");
    }
}

export default new AuthService();