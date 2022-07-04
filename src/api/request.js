import axios from "axios";
import showMessage from "../views/utils/showMessage";

const ins = axios.create({}); //创建一个axios的实例 
ins.interceptors.response.use((resp) => {
  if (resp.data.code === 0) {
    return resp.data.data;
  }
  showMessage({
    content: resp.data.msg,
    type: "error",
    duration: 1500,
  });
  return null;
})

export default ins;