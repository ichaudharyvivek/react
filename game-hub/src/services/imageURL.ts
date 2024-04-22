import noImage from '../assets/noImage.png';

export const getCroppedImageURL = (url: string) => {
  if (!url) return noImage;

  const target = 'media/';
  const index = url.indexOf('media/') + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};
