// Homepage light/dark theme constants, shared by the server layout (inline
// script) and the client hook in components/home/use-hp-theme.ts.

export const HP_THEME_KEY = "hp-theme"

/** Runs in <head> before the first paint, so a saved light theme never flashes dark. */
export const hpThemeScript = `try{if(localStorage.getItem("${HP_THEME_KEY}")==="light")document.documentElement.dataset.hpTheme="light"}catch(e){}`
