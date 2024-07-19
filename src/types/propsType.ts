import { ChatDataType, GroupInfo } from "./dataType";

interface ChatItemProps {
  chat: ChatDataType;
  closeDrawer: () => void;
}

interface GroupItemProps{
  data: GroupInfo;
  setGroup: any;
  selectedGroup: GroupInfo | undefined;
}

export type { ChatItemProps, GroupItemProps };