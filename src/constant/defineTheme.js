import { loader } from "@monaco-editor/react";

const monacoThemes = {
  active4d: "Active4D",
  "all-hallows-eve": "All Hallows Eve",
  amy: "Amy",
  "birds-of-paradise": "Birds of Paradise",
  blackboard: "Blackboard",
  "brilliance-black": "Brilliance Black",
  "brilliance-dull": "Brilliance Dull",
  "chrome-devtools": "Chrome DevTools",
  "clouds-midnight": "Clouds Midnight",
  clouds: "Clouds",
  cobalt: "Cobalt",
  dawn: "Dawn",
  dreamweaver: "Dreamweaver",
  eiffel: "Eiffel",
  "espresso-libre": "Espresso Libre",
  github: "GitHub",
  idle: "IDLE",
  katzenmilch: "Katzenmilch",
  "kuroir-theme": "Kuroir Theme",
  lazy: "LAZY",
  "magicwb--amiga-": "MagicWB (Amiga)",
  "merbivore-soft": "Merbivore Soft",
  merbivore: "Merbivore",
  "monokai-bright": "Monokai Bright",
  monokai: "Monokai",
  "night-owl": "Night Owl",
  "oceanic-next": "Oceanic Next",
  "pastels-on-dark": "Pastels on Dark",
  "slush-and-poppies": "Slush and Poppies",
  "solarized-dark": "Solarized-dark",
  "solarized-light": "Solarized-light",
  spacecadet: "SpaceCadet",
  sunburst: "Sunburst",
  "textmate--mac-classic-": "Textmate (Mac Classic)",
  "tomorrow-night-blue": "Tomorrow-Night-Blue",
  "tomorrow-night-bright": "Tomorrow-Night-Bright",
  "tomorrow-night-eighties": "Tomorrow-Night-Eighties",
  "tomorrow-night": "Tomorrow-Night",
  tomorrow: "Tomorrow",
  twilight: "Twilight",
  "upstream-sunburst": "Upstream Sunburst",
  "vibrant-ink": "Vibrant Ink",
  "xcode-default": "Xcode_default",
  zenburnesque: "Zenburnesque",
  iplastic: "iPlastic",
  idlefingers: "idleFingers",
  krtheme: "krTheme",
  monoindustrial: "monoindustrial",
};

const themePaths = {
  "Active4D": "Active4D.json",
  "All Hallows Eve": "All Hallows Eve.json",
  "Amy": "Amy.json",
  "Birds of Paradise": "Birds of Paradise.json",
  "Blackboard": "Blackboard.json",
  "Brilliance Black": "Brilliance Black.json",
  "Brilliance Dull": "Brilliance Dull.json",
  "Chrome DevTools": "Chrome DevTools.json",
  "Clouds Midnight": "Clouds Midnight.json",
  "Clouds": "Clouds.json",
  "Cobalt": "Cobalt.json",
  "Dawn": "Dawn.json",
  "Dreamweaver": "Dreamweaver.json",
  "Eiffel": "Eiffel.json",
  "Espresso Libre": "Espresso Libre.json",
  "GitHub": "GitHub.json",
  "IDLE": "IDLE.json",
  "Katzenmilch": "Katzenmilch.json",
  "Kuroir Theme": "Kuroir Theme.json",
  "LAZY": "LAZY.json",
  "MagicWB (Amiga)": "MagicWB (Amiga).json",
  "Merbivore Soft": "Merbivore Soft.json",
  "Merbivore": "Merbivore.json",
  "Monokai Bright": "Monokai Bright.json",
  "Monokai": "Monokai.json",
  "Night Owl": "Night Owl.json",
  "Oceanic Next": "Oceanic Next.json",
  "Pastels on Dark": "Pastels on Dark.json",
  "Slush and Poppies": "Slush and Poppies.json",
  "Solarized-dark": "Solarized-dark.json",
  "Solarized-light": "Solarized-light.json",
  "SpaceCadet": "SpaceCadet.json",
  "Sunburst": "Sunburst.json",
  "Textmate (Mac Classic)": "Textmate (Mac Classic).json",
  "Tomorrow-Night-Blue": "Tomorrow-Night-Blue.json",
  "Tomorrow-Night-Bright": "Tomorrow-Night-Bright.json",
  "Tomorrow-Night-Eighties": "Tomorrow-Night-Eighties.json",
  "Tomorrow-Night": "Tomorrow-Night.json",
  "Tomorrow": "Tomorrow.json",
  "Twilight": "Twilight.json",
  "Upstream Sunburst": "Upstream Sunburst.json",
  "Vibrant Ink": "Vibrant Ink.json",
  "Xcode_default": "Xcode_default.json",
  "Zenburnesque": "Zenburnesque.json",
  "iPlastic": "iPlastic.json",
  "idleFingers": "idleFingers.json",
  "krTheme": "krTheme.json",
  "monoindustrial": "monoindustrial.json",
};

const defineTheme = (theme) => {
  return new Promise((resolve, reject) => {
    loader.init().then((monaco) => {
      const themeName = monacoThemes[theme];
      const themePath = themePaths[themeName];

      if (!themePath) {
        reject(new Error(`Theme "${theme}" not found in themePaths.`));
        return;
      }

      import(`monaco-themes/themes/${themePath}`)
        .then((themeData) => {
          monaco.editor.defineTheme(theme, themeData);
          resolve();
        })
        .catch((err) => {
          console.error(`Failed to load theme "${theme}":`, err);
          reject(err);
        });
    }).catch((err) => {
      console.error("Failed to initialize Monaco loader:", err);
      reject(err);
    });
  });
};

export default defineTheme;
