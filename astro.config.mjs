import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightUtils from "@lorenzo_lewis/starlight-utils";

// https://astro.build/config
export default defineConfig({
  site: 'https://onrirr.github.io/',
  base: 'tuvgan',
  integrations: [
    starlight({
      plugins: [
        starlightUtils({
          multiSidebar: {
            switcherStyle: "horizontalList",
          },
        }),
      ],
      title: "Tuvgan Sözlük",
      defaultLocale: "root",
      locales: {
        root: {
          label: "Türkçe",
          direction: "ltr",
          lang: "tr",
        },
        en: {
          label: "English",
          direction: "ltr",
          lang: "en",
        },
      },
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "Dictionary",
          autogenerate: { directory: "./dict/" },
          translations: {
            en: "Dictionary",
            tr: "Sözlük",
            uz: "Lug'at",
          },
        },
      ],
    }),
  ],
});
