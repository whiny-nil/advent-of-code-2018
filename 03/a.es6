const importHelper = require('../libs/inputHelper.es6')

// Parse a claim in this format: '#123 @ 3,2: 5x4'
// claimID = #123, [x,y] = 3,2, width x height = 5x4
const parseClaim = (claim) => {
  let id = '';
  let x = 0, y = 0, width = 0, height = 0;
  let info;

  [id, info] = claim.split('@').map((el) => el.trim());
  id = id.slice(1);

  info = info.split(':').map((el) => el.trim());
  [x,y] = info[0].split(',').map((el) => parseInt(el));
  [width, height] = info[1].split('x').map((el) => parseInt(el));

  return {id, x, y, width, height};
}

const findOverlapArea = (claims) => {
  const map = [];
  let overlapArea = 0;
  claims.forEach((claim) => {
    const mapData = parseClaim(claim);
    for (let w = 0; w < mapData.width; w++) {
      for (let h = 0; h < mapData.height; h++) {
        const x = mapData.x + w;
        const y = mapData.y + h;
        if (map[x] == undefined) map[x] = [];
        if (map[x][y] == undefined) {
          map[x][y] = 1;
        } else if (map[x][y] == 1) {
          map[x][y]++;
          overlapArea++;
        } else {
          map[x][y]++;
        }
      }
    }
  });

  return overlapArea;
};

const testInput = [
  "#1 @ 1,3: 4x4",
  "#2 @ 3,1: 4x4",
  "#3 @ 5,5: 2x2"
];
const officialInput = importHelper.getLines(__dirname + '/input');

console.log(findOverlapArea(testInput), 4);
console.log(findOverlapArea(officialInput));
