import axios from "axios";

//  fornt end path access

export default {
  getGihpy: function (gihpySearchObj) {
    console.log(gihpySearchObj);
    return axios.post("/api/getgihpy", gihpySearchObj);
    
  }

};
