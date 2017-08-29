import { Size } from "../models/size";

export class ImageHelper {
    public async getImageSizeByUrl(url: string): Promise<Size> {
        return new Promise<Size>((resolve, reject) => {
            let img = new Image();
            let size = new Size();
            img.onload = function () {
                size.width = img.width;
                size.height = img.height;

                return resolve(size);
            };
            img.onerror = reject;
            img.src = url;
        });
    }
}