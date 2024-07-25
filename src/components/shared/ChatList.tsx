import { useGetChatsQuery } from "../../redux/api/chat";
import ChatItem from "./ChatItem";

const ChatList = ({ closeDrawer }: { closeDrawer: () => void }) => {
	const { data, isError, isLoading, error } = useGetChatsQuery();

	return (
		<div>
			{data?.data?.map((chat) => (
				<ChatItem key={chat.id} chat={chat} closeDrawer={closeDrawer} />
			))}
		</div>
	);
};

export default ChatList;
