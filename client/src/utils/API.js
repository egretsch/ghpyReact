import axios from "axios";

export default {
  getGihpy: function (gihpySearchObj) {
    console.log(gihpySearchObj);
    return axios.post("/api/getgihpy", gihpySearchObj);
    
  }

};
