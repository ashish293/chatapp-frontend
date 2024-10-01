import Api from "./Api";

interface LoginBody {
  email: string,
  password: string,
}
interface SignupBody extends LoginBody {
  name: string,
  image?: File
}



// type for Response
interface AuthResponse {
  success: boolean,
  message: string,
  token: string,
  user:{
    name: string,
    email: string,
    image?: string
  }
}

type LoginType = (body: LoginBody) => Promise<AuthResponse>;
type SignupType = (body: SignupBody) => Promise<AuthResponse>;

const login:LoginType = async ({ email, password }) => {
  try {
    const res = await Api.post("/user/login", { email, password });
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

const signup:SignupType = async ({ name, email, password, image }: SignupBody) => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if(image){
    formData.append("image", image);
    }
    
    const res = await Api.post("/user/signup", formData);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

const logout = async () => {
  try {
    const res = await Api.post("/user/logout", {});
    if(res.data.success){
      localStorage.clear();
      window.location.href = "/login";
    }
  } catch (error: any) {
    console.log(error);
  }
}

export { login, signup , logout};
