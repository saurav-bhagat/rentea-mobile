import { useState } from 'react';

const useSnack = () => {
	const [visible, setVisible] = useState(false);
	const [text, setText] = useState('');
	const onDismissSnackBar = () => setVisible(false);
	const onToggleSnackBar = () => setVisible(!visible);

	return {
		visible,
		onToggleSnackBar,
		onDismissSnackBar,
		setVisible,
		text,
		setText,
	};
};

export default useSnack;
