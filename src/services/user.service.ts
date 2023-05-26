import http from "./config.service";
 

class UserService {
  singUp() {
    return http.post("/users");
  }
}

export default new UserService();