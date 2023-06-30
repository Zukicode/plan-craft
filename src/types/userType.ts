export interface IUser {
	name: string;
	activeSkin: {
		id: number;
		name: string;
		needLevel: number;
		image: string;
		headImage: string;
	};
	currentLevel: number;
	allTasks: number;
	todayTasks: number;
	experience: number;
}
