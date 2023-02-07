import i18n from "./i18n";
import { storage } from "./storage";
import { variables } from "./variables";

export const functions = {
    switchMode(vuetify) {
        vuetify.theme.dark = !vuetify.theme.dark;
        storage.push(
            variables.IS_DARK_MODE,
            vuetify.theme.dark.toString()
        );
    },
    isMobile() {
        if (screen.width <= 760) {
            return true;
        }
        else {
            return false;
        }
    },
    switchLanguage(code) {
        var langCode
        switch (code) {
            case variables.TURKISH:
                langCode = variables.TURKISH
                break;
            case variables.ENGLISH:
                langCode = variables.ENGLISH
                break;
            default:
                langCode = variables.TURKISH
                break;
        }
        if (i18n.locale == langCode) {
            return
        }
        i18n.locale = langCode;
        storage.push(
            variables.LANGUAGE,
            i18n.locale.toString()
        );
    },
}