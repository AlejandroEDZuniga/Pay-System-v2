const { SuperUser } = require("./models");
const { Kiosko } = require("./models");
const superUsers = [
  {
    id: 1,
    name: "Eze Tarsitano",
    email: "etarsitano@itps.one",
    password: "etarsi",
    isadmin: true,
    isresseller: true
  },
  {
    id: 2,
    name: "Ale Zuniga",
    email: "azuniga@itps.one",
    password: "azuniga",
    isadmin: true,
    isresseller: true
  },
];
const kioskoSeed = [
  {
    id: 1,
    name: "Corona",
    email: "corona@corona.com",
    password: "corona",
    isadmin: false,
    isresseller: true
  },
  {
    id: 2,
    name: "Budweiser",
    email: "budweiser@bud.com",
    password: "bud",
    isadmin: false,
    isresseller: true
  },
];

async function runSeed() {
  console.log("------------------\nEmpezando seed...\n------------------");

  // await User.create(userSeed[0]);
  await Promise.all(kioskoSeed.map((kioskos) => Kiosko.create(kioskos)));
  await Promise.all(superUsers.map((users) => SuperUser.create(users)));

  let arrMembers = [];
  for (let i = 0; i < arrMembers.length; i++) {
    arrMembers.push({ memberId: i });
  }
}

runSeed().then(() => {
  console.log("------------------\nSeed Finalizado\n------------------");
});
