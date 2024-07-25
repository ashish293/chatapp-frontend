import { io } from "socket.io-client";
import Cookies from 'universal-cookie';


const cookie = new Cookies()

const token = cookie.get("chat-token")

const socket = io("localhost:9000", {auth: {token}})

export default socket