import { ChatData, GroupInfo } from "./dataType";

interface ChatItemProps {
  chat: ChatData;
  closeDrawer: () => void;
}

interface GroupItemProps{
  data: GroupInfo;
  setGroup: any;
  selectedGroup: GroupInfo | undefined;
}

export type { ChatItemProps, GroupItemProps };