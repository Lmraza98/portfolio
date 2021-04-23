import {
    isDesktop,
    isMobile,
    isTablet,
    isChrome,
    isFirefox,
    isSafari,
    isOpera,
    isIE,
    isEdge,
    isYandex,
    isChromium
} from "react-device-detect";
let browserInfo = {
    chrome: isChrome,
    firefox: isFirefox,
    safari: isSafari,
    opera: isOpera,
    ie: isIE,
    edge: isEdge,
    yandex: isYandex,
    chromium: isChromium
}
const deviceInfo = {
    view:
    {
        desktop: isDesktop ? isDesktop : false,
        mobile: isMobile ? isMobile : false,
        tablet: isTablet ? isTablet : false,
        other: ( (desktop !== false) || (mobile !== false) || (tablet !== false) ? false: true)
    }
}

export { browserInfo, deviceInfo }