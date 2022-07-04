import request from "./request";
import showMessage from "../views/utils/showMessage";


async function getBanners() {
  const resp = await request.get("/api/banner")
  return resp;
}


export default getBanners; 