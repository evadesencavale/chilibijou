import { LineUpSettings } from './lineup-settings.models';
import { Paddler } from './paddler.models';

export class LineUp {
  b1L: Paddler | undefined;
  b1R: Paddler | undefined;
  b2L: Paddler | undefined;
  b2R: Paddler | undefined;
  b3L: Paddler | undefined;
  b3R: Paddler | undefined;
  b4L: Paddler | undefined;
  b4R: Paddler | undefined;
  b5: Paddler | undefined;

  constructor(
    b1L: Paddler | undefined,
    b1R: Paddler | undefined,
    b2L: Paddler | undefined,
    b2R: Paddler | undefined,
    b3L: Paddler | undefined,
    b3R: Paddler | undefined,
    b4L: Paddler | undefined,
    b4R: Paddler | undefined,
    b5: Paddler | undefined
  ) {
    this.b1L = b1L;
    this.b1R = b1R;
    this.b2L = b2L;
    this.b2R = b2R;
    this.b3L = b3L;
    this.b3R = b3R;
    this.b4L = b4L;
    this.b4R = b4R;
    this.b5 = b5;
  }

  totalL(): number {
    return (
      (this.b1L?.weigth || 0) +
      (this.b2L?.weigth || 0) +
      (this.b3L?.weigth || 0) +
      (this.b4L?.weigth || 0)
    );
  }

  totalR(): number {
    return (
      (this.b1R?.weigth || 0) +
      (this.b2R?.weigth || 0) +
      (this.b3R?.weigth || 0) +
      (this.b4R?.weigth || 0)
    );
  }

  totalLR(): number {
    return this.totalR() - this.totalL();
  }

  totalFB(settings: LineUpSettings): number {
    return (
      ((this.b1L?.weigth || 0) + (this.b1R?.weigth || 0)) * LineUpSettings._b1 +
      ((this.b2L?.weigth || 0) + (this.b2R?.weigth || 0)) * LineUpSettings._b2 +
      ((this.b3L?.weigth || 0) + (this.b3R?.weigth || 0)) * LineUpSettings._b3 +
      ((this.b4L?.weigth || 0) + (this.b4R?.weigth || 0)) * LineUpSettings._b4 +
      (this.b5?.weigth || 0) * LineUpSettings._b5
    );
  }
}
