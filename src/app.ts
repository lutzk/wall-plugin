import { Size } from './models/size'

export class Wall {
  private _id: number = new Date().getTime();
  private _html: string = `
    <div class="wall-plugin-container wall-plugin-id-${this._id}">
      <div class="wall-plugin-background">
        <div class="wall-plugin-image-container"></div>
      </div>
      <div class="wall-plugin-image"></div>
      <div class="wall-plugin-carousel"></div>
    </div>`;
  private _options: any;

  constructor(options) {
    this.onInit(options);
  }

  private async onInit(options) {
    document.body.innerHTML += this._html;
    let el = <HTMLElement> document.querySelector(`.wall-plugin-id-${this._id} .wall-plugin-background`);
    el.style.backgroundImage = `url('${options.rooms[0].img}')`;
    let size = await this.getImageSize(options.rooms[0].img);
    console.log(size);
    // let container = <HTMLElement> document.querySelector(`.wall-plugin-id-${this._id} .wall-plugin-image-container`);
    // let padding = Math.floor((size.getRatio() * 100));
    // el.style.height = `${padding}vw`;
    // size.isWide() ? container.style.width = '100%' : container.style.height = '100%';

    window.onresize = function () {
      let windowSize = new Size(window.innerWidth, window.innerHeight);
      console.log(windowSize);
    }
  }

  private async getImageSize(url: string) : Promise<Size> {
    return new Promise<Size>((resolve, reject) => {
      let img = new Image();
      let size = new Size();
      img.onload = function() {
        size.width = img.width;
        size.height = img.height;

        return resolve(size);
      };
      img.onerror = reject;
      img.src = url;
    });
  }
}
