import global from "./global";
import ObjectHelper from "../helpers/ObjectHelper";

const modules = {
  global,
};

const Constant = {
  modules,
  get(module, property) {
    let value;

    try {
      value = ObjectHelper.find(modules[module], property);
    } catch (error) {
      value = "";
    }

    return value;
  },
};

export default Constant;
