import Image from "./image.js";
import Video from "./video.js";

export default class MediaFactory {
  constructor(data) {
    this.createMedia = function(type) {
      let media;
      if (type == "image")
        media = new Image(data);
      else if (type == "video")
        media = new Video(data)
      return media;
    }
  }
 
}