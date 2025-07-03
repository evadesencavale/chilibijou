import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { TeamData } from './er-champ-data-model';
import { secondsToHMS } from '../../shared/utils';
import { CommonModule } from '@angular/common';
import * as noUiSlider from 'nouislider';

@Component({
  selector: 'app-er-champ-data',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './er-champ-data.html',
  styleUrl: './er-champ-data.scss',
})
export class ErChampData implements AfterViewInit {
  teams: TeamData[] = [];
  milestones: number[] = [];
  customSegmentTime = new Map<string, number>();
  customSegmentPosition = new Map<string, number>();

  sortField: string = 'position';
  sortDirection: 'asc' | 'desc' = 'asc';
  sortMilestone: number = 0;

  customSegmentValues = [0, 10];

  ngAfterViewInit(): void {
    const slider = document.getElementById('my-slider');
    const valueDisplay = document.getElementById('my-values');
    if (slider) {
      noUiSlider.create(slider, {
        start: this.customSegmentValues,
        connect: true,
        range: {
          '0%': 0,
          '3%': 3,
          '7%': 7,
          '10%': 10,
          '14%': 14,
          '17%': 17,
          '21%': 21,
          '24%': 24,
          '28%': 28,
          '31%': 31,
          '34%': 34,
          '38%': 38,
          '41%': 41,
          '45%': 45,
          '48%': 48,
          '52%': 52,
          '55%': 55,
          '59%': 59,
          '62%': 62,
          '66%': 66,
          '69%': 69,
          '72%': 72,
          '76%': 76,
          '79%': 79,
          '83%': 83,
          '86%': 86,
          '90%': 90,
          '93%': 93,
          '97%': 97,
          '100%': 100,
          min: 0,
          max: 100,
        },
        snap: true,
      });
      (slider as any).noUiSlider.on('update', (values: string[]) => {
        this.customSegmentValues = values.map(Number);
        this.calculateCustomTeamStats();
      });
    }
  }

  constructor(private http: HttpClient) {
    this.http
      .get('assets/erchamp_history_refined.json')
      .subscribe((data: { [key: string]: any }) => {
        this.loadTeams(data);
        this.loadProgression(data);
        this.milestones.sort((a, b) => a - b);
        this.fillMissingTeamProgression();

        this.teams = this.teams.filter(
          (t) => t.getFinalPosition() != null && t.getFinalPosition() != 0
        );
      });
  }

  loadTeams(data: { [key: string]: any }): void {
    const keys = Object.keys(data)
      .map(Number) // convert to numbers
      .sort((a, b) => a - b); // sort numerically

    const lastKey = String(keys[keys.length - 1]); // convert back to string

    const lastSegment = data[lastKey];

    if (lastSegment && typeof lastSegment === 'object') {
      this.teams = Object.keys(lastSegment).map(
        (name) => new TeamData(name.trim())
      );
    }
  }

  loadProgression(data: { [key: string]: any }) {
    for (const timeframe in data) {
      const teams = data[timeframe];
      for (const team in teams) {
        this.updateTeamProgression(
          team,
          Number(timeframe),
          Number(teams[team]['percentage']),
          Number(teams[team]['index']),
          teams[team]['time']
        );
      }
    }
  }

  updateTeamProgression(
    teamName: string,
    time: number,
    percent: number,
    position: number,
    finalTime: string | null
  ) {
    const team = this.teams.find((x) => teamName.trim() === x.getTeamName());
    team?.updateProgression(percent, time, position);
    if (!this.milestones.includes(percent)) {
      this.milestones.push(percent);
    }

    const lowerMilestone =
      this.milestones.indexOf(percent) > 0
        ? this.milestones[this.milestones.indexOf(percent) - 1]
        : -1;
    const upperMilestone =
      this.milestones.indexOf(percent) + 1 < this.milestones.length
        ? this.milestones[this.milestones.indexOf(percent) + 1]
        : -1;
    team?.updateSegments(lowerMilestone, percent, upperMilestone);
    if (finalTime != null && team?.getCompletionTime() === null) {
      team?.setCompletionTime(finalTime);
      team?.setFinalPosition(position);
    }
  }

  fillMissingTeamProgression() {
    for (const milestone of this.milestones) {
      const currentIndex = this.milestones.indexOf(milestone);

      for (const team of this.teams) {
        if (!team.getProgression(milestone)) {
          let nextIndex = 0;

          while (
            this.getNextProgession(
              team,
              this.milestones[currentIndex + nextIndex]
            ) <= 0
          ) {
            nextIndex++;
          }

          const deducedTime =
            this.getPreviousProgession(team, milestone) +
            Math.floor(
              (this.getNextProgession(
                team,
                this.milestones[currentIndex + nextIndex]
              ) -
                this.getPreviousProgession(team, milestone)) /
                (nextIndex + 2)
            );

          this.updateTeamProgression(
            team.getTeamName(),
            deducedTime,
            milestone,
            this.getNextPosition(
              team,
              this.milestones[currentIndex + nextIndex]
            ),
            null
          );
        }

        if (!team.getSegment(milestone)) {
          this.updateTeamProgression(
            team.getTeamName(),
            team.getProgression(milestone) ?? 0,
            milestone,
            team.getPosition(milestone) ?? 0,
            null
          );
        }
      }
    }
  }

  getPreviousProgession(team: TeamData, milestone: number): number {
    const index = this.milestones.indexOf(milestone);
    return index > 0 ? team.getProgression(this.milestones[index - 1]) ?? 0 : 0;
  }

  getNextProgession(team: TeamData, milestone: number): number {
    const index = this.milestones.indexOf(milestone);
    return team.getProgression(this.milestones[index + 1]) ?? 0;
  }

  getNextPosition(team: TeamData, milestone: number): number {
    const index = this.milestones.indexOf(milestone);
    return team.getPosition(this.milestones[index + 1]) ?? 0;
  }

  sortTeams(field: string, milestone: number = 0) {
    if (this.sortField === field && this.sortMilestone === milestone) {
      // toggle sort direction
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.sortMilestone = milestone;

    this.teams.sort((a, b) => {
      let comparisonValue: number;

      switch (field) {
        case 'position':
          comparisonValue =
            (a.getFinalPosition() || 0) - (b.getFinalPosition() || 0);
          break;
        case 'team':
          comparisonValue = a.getTeamName().localeCompare(b.getTeamName());
          break;
        case 'milestoneTime':
          comparisonValue =
            (a.getProgression(this.sortMilestone) || 0) -
            (b.getProgression(this.sortMilestone) || 0);
          break;
        case 'segmentTime':
          comparisonValue =
            (a.getSegment(this.sortMilestone) || 0) -
            (b.getSegment(this.sortMilestone) || 0);

          if (this.sortMilestone === -999) {
            comparisonValue =
              (this.customSegmentPosition.get(a.getTeamName()) ?? 0) -
              (this.customSegmentPosition.get(b.getTeamName()) ?? 0);
          }
          break;
        case 'segmentPosition':
          comparisonValue =
            (a.getPosition(this.sortMilestone) || 0) -
            (b.getPosition(this.sortMilestone) || 0);
          if (this.sortMilestone === -999) {
            comparisonValue =
              (this.customSegmentPosition.get(a.getTeamName()) ?? 0) -
              (this.customSegmentPosition.get(b.getTeamName()) ?? 0);
          }
          break;
        case 'completionTime':
          comparisonValue = (a.getCompletionTime() ?? '').localeCompare(
            b.getCompletionTime() || ''
          );
          break;
        default:
          comparisonValue =
            (a.getFinalPosition() || 0) - (b.getFinalPosition() || 0);
      }

      return (this.sortDirection === 'asc' ? 1 : -1) * comparisonValue;
    });
  }

  calculateCustomTeamStats() {
    this.customSegmentTime.clear();
    this.customSegmentPosition.clear();

    for (const team of this.teams) {
      this.customSegmentTime.set(
        team.getTeamName(),
        (team.getProgression(this.customSegmentValues[1]) ?? 0) -
          (team.getProgression(this.customSegmentValues[0]) ?? 0)
      );
    }

    const orderedByValue = new Map(
      [...this.customSegmentTime.entries()].sort((a, b) => a[1] - b[1])
    );

    for (const team of this.teams) {
      this.customSegmentPosition.set(
        team.getTeamName(),
        Array.from(orderedByValue.keys()).indexOf(team.getTeamName()) + 1
      );
    }
  }

  secondsToHMS(seconds: number | null): string {
    return seconds ? secondsToHMS(seconds) : '';
  }
}
