function initializeTemp074e6bcf1fad144() {
    HBox0c24a2118995347 = new kony.ui.Box({
        "id": "HBox0c24a2118995347",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var FlexContainer0d5c28911e2e648 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "220dp",
        "id": "FlexContainer0d5c28911e2e648",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox"
    }, {}, {});
    FlexContainer0d5c28911e2e648.setDefaultUnit(kony.flex.DP);
    FlexContainer0d5c28911e2e648.add();
    HBox0c24a2118995347.add(
    FlexContainer0d5c28911e2e648);
}