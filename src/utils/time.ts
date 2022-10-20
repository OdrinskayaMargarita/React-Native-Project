export class Time {
	readonly start = new Date();

	getMilliseconds() {
		return new Date().getTime() - this.start.getTime();
	}
}
