var main_p = dashjs.MediaPlayer().create(); /*공갈영상*/ 
var p1 = dashjs.MediaPlayer().create();
var p2 = dashjs.MediaPlayer().create();
var p3 = dashjs.MediaPlayer().create();
var p4 = dashjs.MediaPlayer().create();
var p5 = dashjs.MediaPlayer().create();


main_p.setAutoPlay(true);
p1.setAutoPlay(true);
p2.setAutoPlay(true);
p3.setAutoPlay(true);
p4.setAutoPlay(true);
p5.setAutoPlay(true);

console.log("hello?")
var main_url = "video/ex1/1_out_dash.mpd";
var v1_url="video/v1/1_v_dash.mpd";
var v2_url="video/v2/2_v_dash.mpd";
var v3_url="video/v3/3_v_dash.mpd";
var v4_url="video/v4/4_v_dash.mpd";
var v5_url="video/v5/5_v_dash.mpd";

function change(id) {
    var background = document.querySelector("#background")
    var vr_view = document.querySelector("#vr_view")
    background.setAttribute('visible', false)
    vr_view.setAttribute('visible', true)
    console.log(backyerin)
    if (id === "view1") {
        console.log("change!");
        var url = main_p.getSource();
        main_p.attachSource(p1.getSource());
        p1.attachSource(url);
        main_p.initialize();
        p1.initialize();
    }
    else if (id === "view2") {
        console.log("change!");
        var url = main_p.getSource();
        main_p.attachSource(p2.getSource());
        p2.attachSource(url);
        main_p.initialize();
        p2.initialize();
    }
    else if (id === "view3") {
        console.log("change!");
        var url = main_p.getSource();
        main_p.attachSource(p3.getSource());
        p3.attachSource(url);
        main_p.initialize();
        p3.initialize();
    }
    else if (id === "view4") {
        console.log("change!");
        var url = main_p.getSource();
        main_p.attachSource(p4.getSource());
        p4.attachSource(url);
        main_p.initialize();
        p4.initialize();
    }
    else if (id === "view5") {
        console.log("change!");
        var url = main_p.getSource();
        main_p.attachSource(p5.getSource());
        p5.attachSource(url);
        main_p.initialize();
        p5.initialize();
    }
}

AFRAME.registerComponent('main', {
    schema: {
        event: {type: 'string', default: ''},
        message: {type: 'string', default: 'Hello, World!'},
    },

    init: function () {
        // Do something when component first attached.

        var cursor = document.querySelector("#cursor");

        cursor.onmouseleave = function (evt) {
            this.setAttribute('color', 'black');
            var scale = evt.detail.intersectedEl.object3D.scale;
            scale.set(1, 1, 1);
        };

        cursor.onmouseenter = function (evt) {
            this.setAttribute('color', 'springgreen');
            var scale = evt.detail.intersectedEl.object3D.scale;
            scale.set(2.5, 2.5, 2.5);
        };

        cursor.onclick = function (evt) {
            console.log(evt.detail.intersectedEl.id);
            change(evt.detail.intersectedEl.id);
        };
        console.log(document.querySelector("#init"))

        var background = document.querySelector("#background")
        var vr_view = document.querySelector("#vr_view")
        background.setAttribute('visible', true)
        vr_view.setAttribute('visible', false)

        main_p.initialize(document.querySelector("#init"), main_url);
        p1.initialize(document.querySelector("#view1_v"), v1_url);
        p2.initialize(document.querySelector("#view2_v"), v2_url);
        p3.initialize(document.querySelector("#view3_v"), v1_url);
        p4.initialize(document.querySelector("#view4_v"), v2_url);
        p5.initialize(document.querySelector("#view5_v"), v1_url);

        // p1.setBandwidthSafetyFactor(0.1);
        // p2.setBandwidthSafetyFactor(0.1);
        // p3.setBandwidthSafetyFactor(0.1);


    },

    update: function () {
        // Do something when component's data is updated.
    },

    remove: function () {
        // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
    }
});