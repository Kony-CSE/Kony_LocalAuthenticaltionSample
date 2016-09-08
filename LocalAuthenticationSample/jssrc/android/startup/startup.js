//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "LocalAuth",
    appName: "LocalAuth",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.112",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "LocalAuth",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "http://10.10.25.64:8080/LocalAuth/MWServlet",
    secureurl: "http://10.10.25.64:8080/LocalAuth/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeTemp074e6bcf1fad144();
    frm1Globals();
    frmMainGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmMain.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;