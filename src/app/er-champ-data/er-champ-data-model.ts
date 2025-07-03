export class TeamData {
  private teamName: string;
  public progression = new Map<number, number>().set(0, 0);
  private segments = new Map<number, number>().set(0, 0);
  private positions = new Map<number, number>().set(0, 0);

  private segmentPositions = new Map<number, number>().set(0, 0);
  private behind1stPlace = new Map<number, number>().set(0, 0);
  private behind10thPlace = new Map<number, number>().set(0, 0);

  private completionTime: string | null = null;
  private finalPosition: number = 0;

  constructor(team: string) {
    this.teamName = team;
  }

  public getTeamName(): string {
    return this.teamName;
  }

  public getProgression(percent: number): number | null {
    return this.progression.get(percent) ?? null;
  }

  public getSegment(percent: number): number | null {
    return this.segments.get(percent) ?? null;
  }

  public getPosition(percent: number): number | null {
    return this.positions.get(percent) ?? null;
  }

  public getSegmentPosition(percent: number): number | null {
    return this.segmentPositions.get(percent) ?? null;
  }

  public setSegmentPosition(percent: number, time: number): void {
    this.segmentPositions.set(percent, time);
  }

  public getBehind1stPlace(percent: number): number | null {
    return this.behind1stPlace.get(percent) ?? null;
  }

  public setBehind1stPlace(percent: number, time: number): void {
    this.behind1stPlace.set(percent, time);
  }

  public getBehind10thPlace(percent: number): number | null {
    return this.behind10thPlace.get(percent) ?? null;
  }

  public setBehind10thPlace(percent: number, time: number): void {
    this.behind10thPlace.set(percent, time);
  }

  public getCompletionTime(): string | null {
    return this.completionTime;
  }

  public setCompletionTime(time: string) {
    this.completionTime = time;
  }

  public getFinalPosition(): number | null {
    return this.finalPosition;
  }

  public setFinalPosition(position: number) {
    this.finalPosition = position;
  }

  public updateProgression(percentage: number, time: number, position: number) {
    if (!this.progression.has(percentage)) {
      this.progression.set(percentage, time);
    }
    if (!this.positions.has(percentage)) {
      this.positions.set(percentage, position);
    }
  }

  public updateSegments(lower: number, current: number, upper: number) {
    if (lower === -1) {
      this.segments.set(current, this.progression.get(current) ?? 0);
    } else if (this.progression.has(current) && this.progression.has(lower)) {
      const value =
        (this.progression.get(current) ?? 0) -
        (this.progression.get(lower) ?? 0);
      if (value > 0) this.segments.set(current, value);
    }

    if (upper === -1) {
      //Do nothing
    } else if (this.progression.has(current) && this.progression.has(upper)) {
      const value =
        (this.progression.get(upper) ?? 0) -
        (this.progression.get(current) ?? 0);
      if (value > 0) this.segments.set(upper, value);
    }
  }
}
