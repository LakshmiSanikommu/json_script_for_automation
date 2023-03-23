const fs = require("fs");

const dt01 = Date.parse(new Date("03/20/2023, 7:30:00"));
const dt02 = Date.parse(new Date("03/20/2023, 8:00:00"));
const dt03 = Date.parse(new Date("03/20/2023, 8:30:00"));
const dt04 = Date.parse(new Date("03/20/2023, 9:00:00"));
const dt05 = Date.parse(new Date("03/20/2023, 9:30:00"));
const dt06 = Date.parse(new Date("03/20/2023, 10:00:00"));
const dt07 = Date.parse(new Date("03/20/2023, 10:30:00"));
const dt08 = Date.parse(new Date("03/20/2023, 11:00:00"));

const dts = [
  "090323",
  "100323",
  "110323",
  "120323",
  "130323",
  "140323",
  "150323",
];
const langs = ["en", "es"];
const country = "es";
const imgNames = ["image1", "image2", "image3"];

const content = JSON.stringify({
  [imgNames[0]]: {
    [langs[0]]: [
      {
        from: dt01,
        to: dt02,
        assetName: `${dts[0]}_${langs[0]}_${country}_${imgNames[0]}`,
      },
      {
        from: dt02,
        to: dt03,
        assetName: `${dts[1]}_${langs[0]}_${country}_${imgNames[0]}`,
      },
      {
        from: dt03,
        to: dt04,
        assetName: `${dts[2]}_${langs[0]}_${country}_${imgNames[0]}`,
      },
      {
        from: dt04,
        to: dt05,
        assetName: `${dts[3]}_${langs[0]}_${country}_${imgNames[0]}`,
      },
      {
        from: dt05,
        to: dt06,
        assetName: `${dts[4]}_${langs[0]}_${country}_${imgNames[0]}`,
      },
      {
        from: dt06,
        to: dt07,
        assetName: `${dts[5]}_${langs[0]}_${country}_${imgNames[0]}`,
      },
      {
        from: dt07,
        to: dt08,
        assetName: `${dts[6]}_${langs[0]}_${country}_${imgNames[0]}`,
      },
    ],
    [langs[1]]: [
      {
        from: dt01,
        to: dt02,
        assetName: `${dts[0]}_${langs[1]}_${country}_${imgNames[0]}`,
      },
      {
        from: dt02,
        to: dt03,
        assetName: `${dts[1]}_${langs[1]}_${country}_${imgNames[0]}`,
      },
      {
        from: dt03,
        to: dt04,
        assetName: `${dts[2]}_${langs[1]}_${country}_${imgNames[0]}`,
      },
      {
        from: dt04,
        to: dt05,
        assetName: `${dts[3]}_${langs[1]}_${country}_${imgNames[0]}`,
      },
      {
        from: dt05,
        to: dt06,
        assetName: `${dts[4]}_${langs[1]}_${country}_${imgNames[0]}`,
      },
      {
        from: dt06,
        to: dt07,
        assetName: `${dts[5]}_${langs[1]}_${country}_${imgNames[0]}`,
      },
      {
        from: dt07,
        to: dt08,
        assetName: `${dts[6]}_${langs[1]}_${country}_${imgNames[0]}`,
      },
    ],
  },
  [imgNames[1]]: {
    [langs[0]]: [
      {
        from: dt01,
        to: dt02,
        assetName: `${dts[0]}_${langs[0]}_${country}_${imgNames[1]}`,
      },
      {
        from: dt02,
        to: dt03,
        assetName: `${dts[1]}_${langs[0]}_${country}_${imgNames[1]}`,
      },
      {
        from: dt03,
        to: dt04,
        assetName: `${dts[2]}_${langs[0]}_${country}_${imgNames[1]}`,
      },
      {
        from: dt04,
        to: dt05,
        assetName: `${dts[3]}_${langs[0]}_${country}_${imgNames[1]}`,
      },
      {
        from: dt05,
        to: dt06,
        assetName: `${dts[4]}_${langs[0]}_${country}_${imgNames[1]}`,
      },
      {
        from: dt06,
        to: dt07,
        assetName: `${dts[5]}_${langs[0]}_${country}_${imgNames[1]}`,
      },
      {
        from: dt07,
        to: dt08,
        assetName: `${dts[6]}_${langs[0]}_${country}_${imgNames[1]}`,
      },
    ],
    [langs[1]]: [
      {
        from: dt01,
        to: dt02,
        assetName: `${dts[0]}_${langs[1]}_${country}_${imgNames[1]}`,
      },
      {
        from: dt02,
        to: dt03,
        assetName: `${dts[1]}_${langs[1]}_${country}_${imgNames[1]}`,
      },
      {
        from: dt03,
        to: dt04,
        assetName: `${dts[2]}_${langs[1]}_${country}_${imgNames[1]}`,
      },
      {
        from: dt04,
        to: dt05,
        assetName: `${dts[3]}_${langs[1]}_${country}_${imgNames[1]}`,
      },
      {
        from: dt05,
        to: dt06,
        assetName: `${dts[4]}_${langs[1]}_${country}_${imgNames[1]}`,
      },
      {
        from: dt06,
        to: dt07,
        assetName: `${dts[5]}_${langs[1]}_${country}_${imgNames[1]}`,
      },
      {
        from: dt07,
        to: dt08,
        assetName: `${dts[6]}_${langs[1]}_${country}_${imgNames[1]}`,
      },
    ],
  },
  [imgNames[2]]: {
    [langs[0]]: [
      {
        from: dt01,
        to: dt02,
        assetName: `${dts[0]}_${langs[0]}_${country}_${imgNames[2]}`,
      },
      {
        from: dt02,
        to: dt03,
        assetName: `${dts[1]}_${langs[0]}_${country}_${imgNames[2]}`,
      },
      {
        from: dt03,
        to: dt04,
        assetName: `${dts[2]}_${langs[0]}_${country}_${imgNames[2]}`,
      },
      {
        from: dt04,
        to: dt05,
        assetName: `${dts[3]}_${langs[0]}_${country}_${imgNames[2]}`,
      },
      {
        from: dt05,
        to: dt06,
        assetName: `${dts[4]}_${langs[0]}_${country}_${imgNames[2]}`,
      },
      {
        from: dt06,
        to: dt07,
        assetName: `${dts[5]}_${langs[0]}_${country}_${imgNames[2]}`,
      },
      {
        from: dt07,
        to: dt08,
        assetName: `${dts[6]}_${langs[0]}_${country}_${imgNames[2]}`,
      },
    ],
    [langs[1]]: [
      {
        from: dt01,
        to: dt02,
        assetName: `${dts[0]}_${langs[1]}_${country}_${imgNames[2]}`,
      },
      {
        from: dt02,
        to: dt03,
        assetName: `${dts[1]}_${langs[1]}_${country}_${imgNames[2]}`,
      },
      {
        from: dt03,
        to: dt04,
        assetName: `${dts[2]}_${langs[1]}_${country}_${imgNames[2]}`,
      },
      {
        from: dt04,
        to: dt05,
        assetName: `${dts[3]}_${langs[1]}_${country}_${imgNames[2]}`,
      },
      {
        from: dt05,
        to: dt06,
        assetName: `${dts[4]}_${langs[1]}_${country}_${imgNames[2]}`,
      },
      {
        from: dt06,
        to: dt07,
        assetName: `${dts[5]}_${langs[1]}_${country}_${imgNames[2]}`,
      },
      {
        from: dt07,
        to: dt08,
        assetName: `${dts[6]}_${langs[1]}_${country}_${imgNames[2]}`,
      },
    ],
  },
});

fs.writeFile("theImagesData.json", content, function (err) {
  if (err) throw err;
  console.log("Saved!");
});
