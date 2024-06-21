export const getImages = () => {
  const images = require.context("../../../assets", false);
  const imageList = images
    .keys()
    .map((item) => item.replace("./", "../../../../assets/"));

  var collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base",
  });

  return imageList.sort(collator.compare);
};
