const STATUS_ON_DROPPED = { id: 1, name: "Dropped", color: "red.300" };
const STATUS_IN_PROGRESS = {
  id: 2,
  name: "In Progress",
  color: "yellow.400",
};
const STATUS_ON_HOLD = { id: 3, name: "On Hold", color: "gray.300" };
// const STATUS_NOT_STARTED = { id: 3, name: "Not Started", color: "pink.300" };
const STATUS_FINISHED_READING = { id: 4, name: "Finished", color: "green.300" };
export const STATUSES = [
  STATUS_ON_DROPPED,
  STATUS_IN_PROGRESS,
  STATUS_ON_HOLD,
  STATUS_FINISHED_READING,
];

const DATA = [
  {
    link: "https://mangareader.to/chainsaw-man-96",
    status: STATUS_IN_PROGRESS,
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
    status: STATUS_FINISHED_READING,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/spy-x-family-86",
    status: STATUS_IN_PROGRESS,
    due: new Date("2023/02/15"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/blue-lock-225",
    status: STATUS_IN_PROGRESS,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/kaiju-no-8-1187",
    status: STATUS_IN_PROGRESS,
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
    status: STATUS_ON_DROPPED,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/undead-unluck-7025",
    status: STATUS_ON_DROPPED,
    due: new Date("2023/11/08"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/haikyu-15",
    status: STATUS_ON_HOLD,
    due: new Date("2023/09/30"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/a-couple-of-cuckoos-6376",
    status: STATUS_ON_DROPPED,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/komi-cant-communicate-287",
    status: STATUS_ON_DROPPED,
    due: new Date("2023/10/22"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/my-dressup-darling-1185",
    status: STATUS_ON_DROPPED,
    due: new Date("2023/11/15"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/my-hero-academia-272",
    status: STATUS_FINISHED_READING,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/zom-100-bucket-list-of-the-dead-2235",
    status: STATUS_ON_DROPPED,
    due: new Date("2023/10/05"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/bungo-stray-dogs-156",
    status: STATUS_ON_HOLD,
    due: new Date("2023/11/01"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/dr-stone-388",
    status: STATUS_ON_HOLD,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/demon-slayer-kimetsu-no-yaiba-296",
    status: STATUS_FINISHED_READING,
    due: new Date("2023/09/25"),
    chapters: 1,
  },
  {
    link: "https://mangareader.to/solo-leveling-21",
    status: STATUS_FINISHED_READING,
    due: null,
    chapters: 1,
  },
  {
    link: "https://mangareader.to/tokyo-revengers-222",
    status: STATUS_FINISHED_READING,
    due: new Date("2023/10/10"),
    chapters: 1,
  },
];

export default DATA;
