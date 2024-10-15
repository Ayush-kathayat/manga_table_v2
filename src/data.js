const STATUS_ON_DECK = { id: 1, name: "On Deck", color: "blue.300" };
const STATUS_IN_PROGRESS = {
  id: 2,
  name: "In Progress",
  color: "yellow.400",
};
const STATUS_TESTING = { id: 3, name: "Testing", color: "pink.300" };
const STATUS_DEPLOYED = { id: 4, name: "Deployed", color: "green.300" };
export const STATUSES = [
  STATUS_ON_DECK,
  STATUS_IN_PROGRESS,
  STATUS_TESTING,
  STATUS_DEPLOYED,
];

const DATA = [
  {
    link: "https://mangareader.to/chainsaw-man-96",
    status: STATUS_ON_DECK,
    due: new Date("2023/10/15"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/onepunch-man-40",
    status: STATUS_IN_PROGRESS,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/jujutsu-kaisen-168",
    status: STATUS_DEPLOYED,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/spy-x-family-86",
    status: null,
    due: new Date("2023/02/15"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/blue-lock-225",
    status: STATUS_TESTING,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/kaiju-no-8-1187",
    status: null,
    due: new Date("2023/09/12"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/wind-breaker-37004",
    status: STATUS_IN_PROGRESS,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/rentagirlfriend-2291",
    status: STATUS_IN_PROGRESS,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/undead-unluck-7025",
    status: STATUS_ON_DECK,
    due: new Date("2023/11/08"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/haikyu-15",
    status: null,
    due: new Date("2023/09/30"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/a-couple-of-cuckoos-6376",
    status: STATUS_IN_PROGRESS,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/komi-cant-communicate-287",
    status: null,
    due: new Date("2023/10/22"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/my-dressup-darling-1185",
    status: STATUS_ON_DECK,
    due: new Date("2023/11/15"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/my-hero-academia-272",
    status: STATUS_IN_PROGRESS,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/zom-100-bucket-list-of-the-dead-2235",
    status: null,
    due: new Date("2023/10/05"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/bungo-stray-dogs-156",
    status: STATUS_ON_DECK,
    due: new Date("2023/11/01"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/dr-stone-388",
    status: STATUS_DEPLOYED,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/demon-slayer-kimetsu-no-yaiba-296",
    status: null,
    due: new Date("2023/09/25"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/solo-leveling-21",
    status: STATUS_TESTING,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/tokyo-revengers-222",
    status: null,
    due: new Date("2023/10/10"),
    chapters: 1,
  },
  // {
  //   task: "Implement Mobile App Support",
  //   status: STATUS_IN_PROGRESS,
  //   due: null,
  //   chapters: 1,
  // },
  // {
  //   task: "Refine User Permission System",
  //   status: null,
  //   due: new Date("2023/09/18"),
  //   chapters: 1,
  // },
];

export default DATA;
