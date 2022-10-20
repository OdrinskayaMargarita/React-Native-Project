export const getTitle = (variantTitle: string) => {
	switch (variantTitle) {
		case 'todo':
			return 'To Do';
		case 'inProgress':
			return 'In Progress';
		case 'done':
			return 'Done';
		case 'backlog':
			return 'Backlog';
		case 'late':
			return 'Late';
		case 'missed':
			return 'Missed';
		case 'went':
			return 'Went';
		case 'going':
			return 'Going';
		case 'notGoing':
			return 'Not Going';
		case 'pending':
			return 'Pending';
		case 'maybe':
			return 'Maybe';
		case 'paid':
			return 'Paid';
		case 'noAnswer':
			return 'No Answer';
		case 'scheduled':
			return 'Scheduled';
		default:
			return 'To Do';
	}
};
