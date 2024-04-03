export interface standardProps {
	id: number;
	name: string;
}

export interface Standard {
	id: number;
	title: string;
	time: string;
	people: string;
	place: string;
}


export interface UpdateFormProps {
	standard: Standard;
	onCancel: () => void;
	onUpdate: (updatedStandard: Standard) => void;
}