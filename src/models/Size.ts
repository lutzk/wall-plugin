export class Size {
  public width: number;
  public height: number;

  public constructor(width?: number, height?: number) {
    this.width = width;
    this.height = height;
  }

  public getRatio(): number {
    return this.height / this.width;
  }

  public isWide(): boolean {
    return this.width > this.height;
  }
}
