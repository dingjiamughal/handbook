// 本地图片转灰度，使用 sharp

const sharp = require('sharp');

sharp('./assets/02.png').grayscale(true).toFile('./assets/02.gray.png');
