let db = require("./models");

db.Clan.create({
  name: "LA Hotdog Club",
  location: "LA",
  blurb: "We enjoy eating hotdogs in LA. Sue us.",
  isPublic: true
});
db.Clan.create({
  name: "SGV Beer Crawl",
  location: "San Gabriel",
  blurb: "Alcolholics Anonymous can shove it.",
  isPublic: true
});
db.Clan.create({
  name: "WINOS",
  location: "Beverly Hill",
  blurb: "Drink till we die.",
  isPublic: true
});
db.Clan.create({
  name: "Spicy Food Cool Kids",
  location: "San Gabriel",
  blurb: "We like spicy food.",
  isPublic: true
});
db.Clan.create({
  name: "Boba Bros",
  location: "LA",
  blurb: "We like boba, in more ways than one.",
  isPublic: true
});
db.Clan.create({
  name: "dine'n douche",
  location: "Alhambra",
  blurb: "I'm not sure why we named ourselves this.",
  isPublic: true
});
db.Clan.create({
  name: "KKK Kitchen Club",
  location: "Kingston",
  blurb: "For racist assholes only.",
  isPublic: false
});
db.User.create({
  username: "dummy",
  password: "dummy"
});
db.Membership.create({
  clanId: 2,
  userId: 1,
  isMember: true
});
db.Membership.create({
  clanId: 6,
  userId: 1
});
db.Membership.create({
  clanId: 8,
  userId: 1,
  isMember: true,
  isAdmin: true
});
db.Membership.create({
  clanId: 10,
  userId: 1
});
