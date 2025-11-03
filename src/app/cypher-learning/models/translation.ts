export class Translation {
	private _letter: string;
	private _code: string;
	private _audioLetter: string;
	private _audioCode: string;  
	private _letterVolume = 1;  	
	private _codeVolume = 1;  	

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

	get letterVolume(): number {
	  return this._letterVolume;
	}  
		
	get codeVolume(): number {
	  return this._codeVolume;
	}  	

	constructor(letter: string, code: string, audioLetter: string, audioCode: string, codeVolume = 1) {
    this._letter = letter;
    this._code = code;
    this._audioLetter = audioLetter;
    this._audioCode = audioCode;
	this._codeVolume = codeVolume;
	}
}