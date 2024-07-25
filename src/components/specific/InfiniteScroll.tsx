import { useEffect } from "react";

interface Props {
	onReachEnd: (...args: any) => Promise<any>;
	// children: React.ReactNode;
	renderItem: (item: any, index: number) => React.ReactNode;
	// keyExtractor: ({ item, index }: { item: any; index: number }) => string | number;
	style?: React.CSSProperties;
	data?: any[];
	reverse?: boolean;
}
const InfiniteScroll: React.FC<Props> = (props) => {
	const throtle = (func: (...args: any) => Promise<any>) => {
		let pending: boolean = false;
		return (...args: any) => {
			if (pending) {
				return;
			} else {
				pending = true;
				func(...args).finally(() => {
					pending = false;
				});
			}
		};
	};
	const throtledOnReachEnd = throtle(props.onReachEnd);
	useEffect(() => {
		throtledOnReachEnd();
	}, []);

	const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
		console.log(
			e.currentTarget.scrollHeight,
			e.currentTarget.scrollTop,
			e.currentTarget.offsetHeight
		);

		if (
			e.currentTarget.scrollHeight -
				e.currentTarget.offsetHeight -
				Math.abs(e.currentTarget.scrollTop) <
			100
		) {
			throtledOnReachEnd();
		}
	};
	return (
		<div
			style={{
				overflowY: "scroll",
				display: "flex",
				flexDirection: props.reverse ? "column-reverse" : "column",
				...props.style,
			}}
			onScroll={handleScroll}
		>
			{/* {children} */}
			{props.data?.map(props.renderItem)}
		</div>
	);
};

export default InfiniteScroll;
