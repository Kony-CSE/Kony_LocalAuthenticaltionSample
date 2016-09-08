function addWidgetsfrm1() {
    var button202105425413518 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button202105425413518",
        "isVisible": true,
        "onClick": p2kwiet15892592062299_button202105425413518_onClick_seq0,
        "skin": "btnNormal",
        "text": "isSupported"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button202105425413519 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button202105425413519",
        "isVisible": true,
        "onClick": p2kwiet15892592062299_button202105425413519_onClick_seq0,
        "skin": "btnNormal",
        "text": "Authenticate With Touch ID"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frm1.add(
    button202105425413518, button202105425413519);
};

function frm1Globals() {
    frm1 = new kony.ui.Form2({
        "addWidgets": addWidgetsfrm1,
        "enabledForIdleTimeout": false,
        "id": "frm1",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frm1.info = {
        "kuid": "p2kwiet15892592062299"
    };
};