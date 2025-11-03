export class AudioClip {
	private _audioFile: string;
	private _volume: number;

	constructor(audioFile: string, volume: number){
		this._audioFile = audioFile;
		this._volume = volume;
	}

	get audioFile() {
		return this._audioFile;
	}

	get volume() {
		return this._volume;
	}
}