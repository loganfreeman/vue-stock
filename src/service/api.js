import { get } from "./request";
export default {
  entries() {
    return get("https://api.publicapis.org/entries");
  },
};
