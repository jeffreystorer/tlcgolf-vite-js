import { get, set } from "@/utils"

export default function LogoutPage() {
  const ghinNumber = get("ghinNumber")
  const lastName = get("lastName")
  const course = get("course")
  const group = get("group")
  localStorage.clear()
  set("ghinNumber", ghinNumber)
  set("lastName", lastName)
  set("course", course)
  set("group", group)
  document.location = "/"
  return null
}
