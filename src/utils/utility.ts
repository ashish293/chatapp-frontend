import { UserData } from "../types/dataType";

type GetLocalUserType = () => UserData | null;

const getLocalUser:GetLocalUserType = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user) as UserData;
  } else {
    return null;
  }
};
const debouncer = (fun:any, delay: number) => {
  
}
export { getLocalUser }