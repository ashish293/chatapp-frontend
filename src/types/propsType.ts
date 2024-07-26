import { ChatDataType, GroupInfo, UserData } from "./dataType";

interface ChatItemProps {
  chat: ChatDataType;
  currentUser: UserData | null;
  closeDrawer: () => void;
}

interface GroupItemProps{
  data: GroupInfo;
  setGroup: any;
  selectedGroup: GroupInfo | undefined;
}

export type { ChatItemProps, GroupItemProps };