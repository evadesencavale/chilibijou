export class Translation {
	private _letter: string;
	private _code: string;
	private _audioLetter: string;
	private _audioCode: string;  

	get letter(): string {
	  return this._letter;
	}

	get code(): string {
	  return this._code;
	}

	get audioLetter(): string {
	  return this._audioLetter;
	}

	get audioCode(): string {
	  return this._audioCode;
	}  

	constructor(letter: string, code: string, audioLetter: string, audioCode: string) {
    this._letter = letter;
    this._code = code;
    this._audioLetter = audioLetter;
    this._audioCode = audioCode
	}
}