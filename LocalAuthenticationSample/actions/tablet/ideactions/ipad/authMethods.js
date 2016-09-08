function isAuthUsingTouchSupported() {
    var status = kony.localAuthentication.getStautusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
    if (status == 5000) {
        kony.ui.Alert({
            message: "AUTHENTICATION BY TOUCHID SUPPORTED",
            alertType: constants.ALERT_TYPE_INFO,
            yesLabel: "Close"
        }, {});
    } else {
        var msg = "TOUCHID AUTHENTICATION RETURNED THE STATUS ::" + status;
        kony.ui.Alert({
            message: status,
            alertType: constants.ALERT_TYPE_INFO,
            yesLabel: "Close"
        }, {});
    }
}
/*
function successCB()
{
			kony.ui.Alert({message: "AUTHENTICATION SUCCESSFULL",
	               alertType: constants.ALERT_TYPE_INFO,
	               yesLabel:"Close"}, 
	               {});
	

}
*/
function statusCB(status, message) {
    if (status == 5000) {
        kony.ui.Alert({
            message: "AUTHENTICATION SUCCESSFULL",
            alertType: constants.ALERT_TYPE_INFO,
            yesLabel: "Close"
        }, {});
    } else {
        var messg = status + message;
        kony.ui.Alert({
            message: messg,
            alertType: constants.ALERT_TYPE_INFO,
            yesLabel: "Close"
        }, {});
    }
}

function authUsingTouchID() {
    var config = {
        "promptMessage": "PLEASE AUTHENTICATE USING YOUR TOUCH ID"
    };
    kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, statusCB, config);
}