import { ITMenuItemInterface } from "../components/Menu";
import http from "./config.service";
 

class MenuService {
  getAll() {
    return http.get<Array<ITMenuItemInterface>>("/menu");
  }

  getAllActive() {
    return http.get<Array<ITMenuItemInterface>>("/menu/active");
  }

  getAllSpecial() {
    return http.get<Array<ITMenuItemInterface>>("/menu/special");
  }
}

export default new MenuService();