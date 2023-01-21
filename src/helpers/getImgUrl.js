export const getImgUrl = (fileName) => {
  const imgUrl = new URL(`../assets/image/${fileName}`, import.meta.url).href;
  return imgUrl;
};
