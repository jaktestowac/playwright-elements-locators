// let playwrightConfig = `
// import { defineConfig, devices } from "@playwright/test";

// export default defineConfig({
//   testDir: "./tests",
//   fullyParallel: true,
//   workers: undefined,
//   reporter: "html",
//   use: {
//     baseURL: "http://localhost:3000",
//     trace: "on",
//   },

//   projects: [
//     {
//       name: "chromium",
//       use: { ...devices["Desktop Chrome"] },
//       name2: "chromium2",
//     },
//   ],
// });
// `;

// // const projects = playwrightConfig.match(/projects: \[\s*{[^}]+}\s*\]/g);

// playwrightConfig = playwrightConfig.replace(/\n/g, "");
// playwrightConfig = playwrightConfig.replace(/ +/g, "");

// const projectsIdx =
//   playwrightConfig.indexOf("projects:[") + "projects:[".length - 1;
// const playwrightConfigSubstring = playwrightConfig.substring(projectsIdx);
// let count = 0;
// let endIndex = 0;

// for (let i = 0; i < playwrightConfigSubstring.length; i++) {
//   if (playwrightConfigSubstring[i] === "[") {
//     count++;
//   } else if (playwrightConfigSubstring[i] === "]") {
//     count--;
//     if (count === 0) {
//       endIndex = i;
//       break;
//     }
//   }
// }

// const projects = playwrightConfigSubstring.substring(0, endIndex + 1);
// console.log(projects);

// // let updatedProjects = projects.replace(/{(.*?):/g, '{"$1":');
// // updatedProjects = projects.replace(/\["(.*?)"\]/g, "[$1]");
// // updatedProjects = updatedProjects.replace(/,(.*?):/g, ',"$1":');
// // console.log(updatedProjects);

// const keyValuePairs = projects.match(/[{,}](.*?):(.*?)[{,}](?=,|})/g);
// console.log(keyValuePairs);
