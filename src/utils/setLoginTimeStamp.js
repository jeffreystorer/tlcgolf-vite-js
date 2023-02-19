import { set } from "@/utils"

export default function setLoginTimeStamp() {
  const timeStamp = Date.now()
  set("timeStamp", timeStamp)
}
