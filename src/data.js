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
  // {
  //   task: "Write Integration Tests",
  //   status: STATUS_IN_PROGRESS,
  //   due: null,
  //   chapters: 1,
  // },
  // {
  //   task: "Add Instagram Integration",
  //   status: STATUS_DEPLOYED,
  //   due: null,
  //   chapters: 1,
  // },
  // {
  //   task: "Cleanup Database",
  //   status: null,
  //   due: new Date("2023/02/15"),
  //   chapters: 1,
  // },
  // {
  //   task: "Refactor API Endpoints",
  //   status: STATUS_TESTING,
  //   due: null,
  //   chapters: 1,
  // },
  // {
  //   task: "Add Documentation to API",
  //   status: null,
  //   due: new Date("2023/09/12"),
  //   chapters: 1,
  // },
  // {
  //   task: "Update NPM Packages",
  //   status: STATUS_IN_PROGRESS,
  //   due: null,
  //   chapters: 1,
  // },
  // {
  //   task: "Optimize Database Queries",
  //   status: STATUS_IN_PROGRESS,
  //   due: null,
  //   chapters: 1,
  // },
  // {
  //   task: "Implement User Authentication",
  //   status: STATUS_ON_DECK,
  //   due: new Date("2023/11/08"),
  //   chapters: 1,
  // },
  // {
  //   task: "Design User Interface Mockups",
  //   status: null,
  //   due: new Date("2023/09/30"),
  //   chapters: 1,
  // },
  // {
  //   task: "Fix Cross-Browser Compatibility Issues",
  //   status: STATUS_IN_PROGRESS,
  //   due: null,
  //   chapters: 1,
  // },
  // {
  //   task: "Perform Security Audit",
  //   status: null,
  //   due: new Date("2023/10/22"),
  //   chapters: 1,
  // },
  // {
  //   task: "Create User Onboarding Tutorial",
  //   status: STATUS_ON_DECK,
  //   due: new Date("2023/11/15"),
  //   chapters: 1,
  // },
  // {
  //   task: "Optimize Frontend Performance",
  //   status: STATUS_IN_PROGRESS,
  //   due: null,
  //   chapters: 1,
  // },
  // {
  //   task: "Conduct Code Review",
  //   status: null,
  //   due: new Date("2023/10/05"),
  //   chapters: 1,
  // },
  // {
  //   task: "Implement Continuous Integration",
  //   status: STATUS_ON_DECK,
  //   due: new Date("2023/11/01"),
  //   chapters: 1,
  // },
  // {
  //   task: "Migrate to Cloud Hosting",
  //   status: STATUS_DEPLOYED,
  //   due: null,
  //   chapters: 1,
  // },
  // {
  //   task: "Create User Feedback Survey",
  //   status: null,
  //   due: new Date("2023/09/25"),
  //   chapters: 1,
  // },
  // {
  //   task: "Update User Documentation",
  //   status: STATUS_TESTING,
  //   due: null,
  //   chapters: 1,
  // },
  // {
  //   task: "Bug Fixing and QA Testing",
  //   status: null,
  //   due: new Date("2023/10/10"),
  //   chapters: 1,
  // },
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
