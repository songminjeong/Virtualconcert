var main_p = dashjs.MediaPlayer().create(); /*공갈영상*/ 
var p1 = dashjs.MediaPlayer().create();
var p2 = dashjs.MediaPlayer().create();

main_p.setAutoPlay(true);
p1.setAutoPlay(true);
p2.setAutoPlay(true);
console.log("hello?")
var main_url = "video/ex1/1_out_dash.mpd";
var v1_url="video/v3/3_v_dash.mpd";
var v2_url="video/v2/2_v_dash.mpd";

function change(id) {
    var back = document.querySelector("#back-img")
    var backyerin = document.querySelector("#backyerin")
    back.setAttribute('visible', false)
    backyerin.setAttribute('visible', true)
    console.log(backyerin)
    if (id === "s1") {
        console.log("change!");
        var url = main_p.getSource();
        main_p.attachSource(p1.getSource());
        p1.attachSource(url);
        main_p.initialize();
        p1.initialize();
    }
    else if (id === "s2") {
        console.log("change!");
        var url = main_p.getSource();
        main_p.attachSource(p2.getSource());
        p2.attachSource(url);
        main_p.initialize();
        p2.initialize();
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
            scale.set(0.5, 0.5, 0.5);
        };

        cursor.onmouseenter = function (evt) {
            this.setAttribute('color', 'springgreen');
            var scale = evt.detail.intersectedEl.object3D.scale;
            scale.set(3, 3, 3);
        };

        cursor.onclick = function (evt) {
            console.log(evt.detail.intersectedEl.id);
            change(evt.detail.intersectedEl.id);
        };
        console.log(document.querySelector("#back"))

        var back = document.querySelector("#back-img")
        var backyerin = document.querySelector("#backyerin")
        back.setAttribute('visible', true)
        backyerin.setAttribute('visible', false)

        main_p.initialize(document.querySelector("#back"), main_url);
        p1.initialize(document.querySelector("#sample1"), v1_url);
        p2.initialize(document.querySelector("#sample2"), v2_url);

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