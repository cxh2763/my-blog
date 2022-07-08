import request from "./request";

export default async function getSetting() {
  return await request.get("/api/setting");
}
