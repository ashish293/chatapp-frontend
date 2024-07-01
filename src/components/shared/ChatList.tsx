import { dummyChatData } from "../../constant/sampleData";
import ChatItem from "./ChatItem";

const ChatList = ({ closeDrawer }: { closeDrawer: () => void }) => {
	return (
		<div>
			{dummyChatData.map((chat, index) => (
				<ChatItem key={index} chat={chat} closeDrawer={closeDrawer} />
			))}
		</div>
	);
};

export default ChatList;
