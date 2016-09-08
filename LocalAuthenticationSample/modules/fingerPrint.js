function isFingerPrintSupportedWithDevice() {
    var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
    if (status == 5000) {
        kony.ui.Alert({
            message: "AUTHENTICATION BY TOUCHID SUPPORTED",
            alertType: constants.ALERT_TYPE_INFO,
            yesLabel: "Close"
        }, {});
    } else {
        var msg = "TOUCHID AUTHENTICATION RETURNED THE STATUS ::" + status;
        kony.ui.Alert({
            message: status + "",
            alertType: constants.ALERT_TYPE_INFO,
            yesLabel: "Close"
        }, {});
    }
}

function authUsingFingerPrint() {
    init_popup();
    frmMain.flxpopup.isVisible = true;
    var config = {
        "promptMessage": "PLEASE AUTHENTICATE USING YOUR TOUCH ID"
    };
    kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, fingerPrintStatusCB, config);
}

function init_popup() {
    frmMain.flxpopup.flxpopupchild1.lblpopuptittle.text = "Sign in";
    frmMain.flxpopup.flxpopupchild1.lblpopupdesp.text = "Confirm fingerprint to continue";
    frmMain.flxpopupchild2.lblresponsestatusmsg.text = "Touch sensor";
    frmMain.flxpopupchild2.imgthumb.src = "ic_fp_40px.png";
}

function init_pass_popup() {
    frmMain.flxpasspopup.flxpasspopupchild1.flxpasspopupscroll.flxscrollchild1.lblpasspopuptittle.text = "Sign in";
    frmMain.flxpasspopup.flxpasspopupchild1.flxpasspopupscroll.flxscrollchild1.lblpasspopupdesp.text = "Enter your store password ";
    frmMain.flxpasspopup.flxpasspopupchild1.flxpasspopupscroll.flxscrollchild1.txtbox.setFocus(true);
    frmMain.flxpasspopup.flxpasspopupchild1.flxpasspopupscroll.flxscrollchild1.txtbox.text = "";
}

function cancel_onclick_callback() {
    kony.localAuthentication.cancelAuthentication();
    frmMain.flxpopup.isVisible = false;
}

function usepassword_onclick_callback() {
    kony.localAuthentication.cancelAuthentication();
    init_pass_popup();
    frmMain.flxpopup.isVisible = false;
    frmMain.flxpasspopup.isVisible = true;
}

function passpopup_cancel_onclick_callback() {
    frmMain.flxpasspopup.isVisible = false;
}

function passpopup_ok_onclick_callback() {
    kony.localAuthentication.cancelAuthentication();
    frmMain.flxpasspopup.isVisible = false;
}

function fingerPrintStatusCB(status, message) {
    if (status == 5000) {
        kony.ui.Alert({
            message: "AUTHENTICATION SUCCESSFULL",
            alertType: constants.ALERT_TYPE_INFO,
            yesLabel: "Close"
        }, {});
        frmMain.flxpopup.isVisible = false;
    } else {
        var messg = status + message;
        kony.ui.Alert({
            message: messg,
            alertType: constants.ALERT_TYPE_INFO,
            yesLabel: "Close"
        }, {});
    }
}