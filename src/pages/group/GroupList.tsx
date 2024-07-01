import { dummyGroupList } from "../../constant/sampleData";
import type { GroupInfo } from "../../types/dataType";
import GroupItem from "./GroupItem";

const GroupInfo = ({
	setGroup,
	selectedGroup,
}: {
	setGroup: any;
	selectedGroup: GroupInfo | undefined;
}) => {
	return (
		<div>
			{dummyGroupList.map((item) => (
				<GroupItem key={item.id} data={item} setGroup={setGroup} selectedGroup={selectedGroup} />
			))}
		</div>
	);
};

export default GroupInfo;
