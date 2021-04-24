import * as Parser from "ua-parser-js"
let userAgent;
export default function isMobile(req) {
    if (req) {
        userAgent = Parser(req.headers['user-agent'] || '');
    } else {
        userAgent = new Parser().getResult();
    }

    return userAgent.device.type === 'mobile'
}