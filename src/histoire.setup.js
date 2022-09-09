import { defineSetupVue3 } from "histoire";

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  app.config.globalProperties.$hello = "hello";
});
