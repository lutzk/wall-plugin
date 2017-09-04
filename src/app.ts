import { Size } from './models/size';
import { ImageHelper } from './infrastructure/ImageHelper';

export class Wall {
  private _id: number = new Date().getTime();
  private _html: string = `
    <div class="wall-plugin-container wall-plugin-id-${this._id}">
      <img class="wall-plugin-background-image" src="" />
      <div class="wall-plugin-background-container"></div>
    </div>`;
  private _options: any;
  private _container: HTMLElement;
  private _backgroundImageElement: HTMLElement;
  private _backgroundContainerElement: HTMLElement;

  constructor(options) {
    this.onInit(options);
  }

  public close() {
    this._container.style.display = 'none';
  }

  private async onInit(options) {
    document.body.innerHTML += this._html;
    this._container = <HTMLElement>document.querySelector(`.wall-plugin-id-${this._id}`);
    this._backgroundImageElement = <HTMLElement>this._container.querySelector('.wall-plugin-background-image');
    this._backgroundContainerElement = <HTMLElement>this._container.querySelector('.wall-plugin-background-container');

    await this.setBackground(options.rooms[0]);

    // We need to wait until background "room" image is loaded until we can put background container on top of it
    var imageHelper = new ImageHelper();
    await imageHelper.getImageSizeByUrl(options.rooms[0].img);
    this.setBackgroundContainerSize();

    window.onresize = async () => {
      this.setBackgroundContainerSize();
    }
  }

  private async setBackgroundContainerSize(): Promise<void> {
    let imageElementSize = new Size(this._backgroundImageElement.clientWidth, this._backgroundImageElement.clientHeight);
    this._backgroundContainerElement.style.width = `${imageElementSize.width}px`;
    this._backgroundContainerElement.style.height = `${imageElementSize.height}px`;
  }

  private async setBackground(room): Promise<void> {
    this._backgroundImageElement.setAttribute('src', room.img);
    this.setBackgroundContainerSize();
  }
}
