import { ITMenuItemInterface } from "../components/Menu";
import http from "./config.service";
 

class MenuService {
  getAll() {
    return http.get<Array<ITMenuItemInterface>>("/menu");
  }
}

export default new MenuService();