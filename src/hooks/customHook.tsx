import { useState } from "react";

const useFileHandler = () => {
	const [file, setFile] = useState<any>(null);
	const [fileUrl, setFileUrl] = useState<string>();

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target?.files?.[0];
		if (file) {
			setFile(file);
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = () => {
				setFileUrl(fileReader.result as string);
			};
		}
	};
	return {
		handleFileChange,
		fileUrl,
		file,
	};
};
export { useFileHandler };
