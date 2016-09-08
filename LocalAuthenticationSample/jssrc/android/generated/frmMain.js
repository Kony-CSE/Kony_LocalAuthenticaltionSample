function addWidgetsfrmMain() {
    frmMain.setDefaultUnit(kony.flex.DP);
    var flxparent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60%",
        "id": "flxparent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxparent.setDefaultUnit(kony.flex.DP);
    var btntoucheck = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "35dp",
        "id": "btntoucheck",
        "isVisible": true,
        "left": 0,
        "onClick": AS_Button_7fecb25b58f64587b41eeb81bb7c8533,
        "skin": "slButtonGlossBlue",
        "text": "isFingerPrint-Supported",
        "top": "0dp",
        "width": "75%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btntouchauth = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "35dp",
        "id": "btntouchauth",
        "isVisible": true,
        "left": 0,
        "onClick": AS_Button_0981c1bcebb24521aad8aedbfa55eeea,
        "skin": "slButtonGlossBlue",
        "text": "Authenticate With Touch ID",
        "top": "1dp",
        "width": "75%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxparent.add(
    btntoucheck, btntouchauth);
    var flxpopup = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "99%",
        "id": "flxpopup",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "onTouchStart": AS_FlexContainer_92536b0066144401bbb1c31599c25f11,
        "skin": "flxpopupskn",
        "width": "99%",
        "zIndex": 3
    }, {}, {});
    flxpopup.setDefaultUnit(kony.flex.DP);
    var flxpopupchild1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "35%",
        "id": "flxpopupchild1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "flxpopupchild1",
        "width": "89%"
    }, {}, {});
    flxpopupchild1.setDefaultUnit(kony.flex.DP);
    var lblpopuptittle = new kony.ui.Label({
        "id": "lblpopuptittle",
        "isVisible": true,
        "left": "3%",
        "skin": "lblsknpopuptittle",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "8%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblpopupdesp = new kony.ui.Label({
        "id": "lblpopupdesp",
        "isVisible": true,
        "left": "3%",
        "skin": "lblsknpopupdesp",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "1%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxpopupchild2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "flxpopupchild2",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxpopupchild2.setDefaultUnit(kony.flex.DP);
    var imgthumb = new kony.ui.Image2({
        "centerY": "50%",
        "height": "45dp",
        "id": "imgthumb",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "45dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblresponsestatusmsg = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblresponsestatusmsg",
        "isVisible": true,
        "left": "5dp",
        "skin": "lblsknpopuptouchresp",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxpopupchild2.add(
    imgthumb, lblresponsestatusmsg);
    var flxpopuphorzchild1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxpopuphorzchild1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxpopuphorzchild1.setDefaultUnit(kony.flex.DP);
    var btnusername = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "btnusername",
        "isVisible": true,
        "left": "35%",
        "onClick": AS_Button_27410e4e841d4b3bbd55c05399fce062,
        "skin": "slButtonGlossBlue",
        "text": "password",
        "width": "33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btncancel = new kony.ui.Button({
        "bottom": "2.00%",
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "btncancel",
        "isVisible": true,
        "left": "1.00%",
        "onClick": AS_Button_55390abc4108469fbe3680462289584e,
        "right": "38%",
        "skin": "slButtonGlossBlue",
        "text": "cancel",
        "width": "29%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxpopuphorzchild1.add(
    btnusername, btncancel);
    flxpopupchild1.add(
    lblpopuptittle, lblpopupdesp, flxpopupchild2, flxpopuphorzchild1);
    flxpopup.add(
    flxpopupchild1);
    var flxpasspopup = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "99%",
        "id": "flxpasspopup",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxpopupskn",
        "width": "99%",
        "zIndex": 3
    }, {}, {});
    flxpasspopup.setDefaultUnit(kony.flex.DP);
    var flxpasspopupchild1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "35%",
        "id": "flxpasspopupchild1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "flxpopupchild1",
        "width": "89%"
    }, {}, {});
    flxpasspopupchild1.setDefaultUnit(kony.flex.DP);
    var flxpasspopupscroll = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxpasspopupscroll",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxpasspopupscroll.setDefaultUnit(kony.flex.DP);
    var flxscrollchild1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "110%",
        "id": "flxscrollchild1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxscrollchild1.setDefaultUnit(kony.flex.DP);
    var lblpasspopuptittle = new kony.ui.Label({
        "id": "lblpasspopuptittle",
        "isVisible": true,
        "left": "3%",
        "skin": "lblsknpopuptittle",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "8%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblpasspopupdesp = new kony.ui.Label({
        "id": "lblpasspopupdesp",
        "isVisible": true,
        "left": "3%",
        "skin": "lblsknpopupdesp",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "1%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtbox = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "17%",
        "id": "txtbox",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "password",
        "secureTextEntry": true,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "1%",
        "width": "98%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var flxpasspopuphorzchild = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "22%",
        "id": "flxpasspopuphorzchild",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0",
        "skin": "slFbox",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxpasspopuphorzchild.setDefaultUnit(kony.flex.DP);
    var btnpasscancel = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "btnpasscancel",
        "isVisible": true,
        "left": "35%",
        "onClick": AS_Button_049c582dd60b49a6a295d4ca596113be,
        "skin": "slButtonGlossBlue",
        "text": "cancel",
        "top": "0",
        "width": "33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnpass = new kony.ui.Button({
        "bottom": "2.00%",
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "btnpass",
        "isVisible": true,
        "left": "1.00%",
        "onClick": AS_Button_3f97964a2aa3487b9e2adc53dca1f747,
        "right": "38%",
        "skin": "slButtonGlossBlue",
        "text": "ok",
        "width": "29%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxpasspopuphorzchild.add(
    btnpasscancel, btnpass);
    flxscrollchild1.add(
    lblpasspopuptittle, lblpasspopupdesp, txtbox, flxpasspopuphorzchild);
    flxpasspopupscroll.add(
    flxscrollchild1);
    flxpasspopupchild1.add(
    flxpasspopupscroll);
    flxpasspopup.add(
    flxpasspopupchild1);
    frmMain.add(
    flxparent, flxpopup, flxpasspopup);
};

function frmMainGlobals() {
    frmMain = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMain,
        "enabledForIdleTimeout": false,
        "id": "frmMain",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "frmbg"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmMain.info = {
        "kuid": "adbdc05137284aae9eb6a361f897a3fa"
    };
};