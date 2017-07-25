export class Wall {
  private _id: number = new Date().getTime();
  private _html: string = `
    <div class="wall-plugin-container wall-plugin-id-${this._id}">
      <h1>What's Up!?</h1>
    </div>`;

  constructor(options) {
    console.log(options);
    document.body.innerHTML += this._html;
  }

  public sayHello(name: string): void {
    console.log(`Hello ${name}!`);
  }
}
