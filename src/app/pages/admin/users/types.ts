export interface UserInfo {
	id: number;
	name: string;
	email: string;
	role: string;
	// startDate: Date;
	phone: number;
	farm: string;
}

export interface Employee {
	newEmployee: object;

	name: string;
	email: string;
	role: string;
	// startDate: Date;
	phone: number;
	farm: string;
}

export interface ActionBtn {
	onSubmit: (newEmployee: Employee) => void;
}
