export const listOfMenu = ['inbox', 'today', 'profile', 'awards', 'settings'];

export const firstLetterToUpperCase = (word: string): string => {
	let splitted = word.split('');
	const first = splitted[0].toUpperCase();
	const rest = [...splitted];
	rest.splice(0, 1);
	return [first, ...rest].join('');
};

export const deleteFirstSymbol = (word: string): string => {
	let splitted = word.split('');
	splitted.splice(0, 1);
	return [...splitted].join('');
};
