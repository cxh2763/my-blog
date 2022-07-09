import request from "./request";

async function getAbout() {
  const resp = await request.get("/api/about");
  return resp;
}

export default getAbout;