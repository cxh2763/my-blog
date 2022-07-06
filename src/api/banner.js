import request from "./request";


async function getBanners() {
  const resp = await request.get("/api/banner")
  return resp;
}


export default getBanners; 