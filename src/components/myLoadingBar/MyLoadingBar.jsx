import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";

export const MyLoadingBar = () => {
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		setProgress(30);
		setTimeout(() => {
			setProgress(60);
		}, 350)
		setTimeout( () => {setProgress(100)}, 500);
	}, []);

	return (
		<LoadingBar
			color="rgb(255, 105, 0)"
			progress={progress}
			onLoaderFinished={() => setProgress(0)}
		/>
	);
};
