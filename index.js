let hltb = require('howlongtobeat');
let hltbService = new hltb.HowLongToBeatService();

hltbService.search('Sonic Unleashed').then(result => console.log(result));
