var init_v = dashjs.MediaPlayer().create();
var v1 = dashjs.MediaPlayer().create();
var v3 = dashjs.MediaPlayer().create();
var v5 = dashjs.MediaPlayer().create();
var v7 = dashjs.MediaPlayer().create();
var v8 = dashjs.MediaPlayer().create();

init_v.setAutoPlay(true);
v1.setAutoPlay(true);
v3.setAutoPlay(true);
v5.setAutoPlay(true);
v7.setAutoPlay(true);
v8.setAutoPlay(true);
console.log("hello?")

var init_url="video/ex1/1_out_dash.mpd"
var v1_url="video/v1/1_v_dash.mpd";
var v3_url="video/v2/2_v_dash.mpd";
var v5_url="video/v3/3_v_dash.mpd";
var v7_url="video/v4/4_v_dash.mpd";
var v8_url="video/v5/5_v_dash.mpd";

function change(id){
    var background=document.querySelector("#background")
    var vr_view=document.querySelector("#vr_view")
    background.setAttribute('visible', false)
    vr_view.setAttribute('visible', true)

    if(id=="view1"){
        var url=init_v.getSource();
        init_v.attachSource(v1.getSource());
        v1.attachSource(url);
        init_v.initialize();
        v1.initialize();
    }
    else if(id=="view3"){
        var url=init_v.getSource();
        init_v.attachSource(v3.getSource());
        v3.attachSource(url);
        init_v.initialize();
        v3.initialize();
    }
    else if(id=="view5"){
        var url=init_v.getSource();
        init_v.attachSource(v5.getSource());
        v5.attachSource(url);
        init_v.initialize();
        v5.initialize();
    }
    else if(id=="view7"){
        var url=init_v.getSource();
        init_v.attachSource(v7.getSource());
        v7.attachSource(url);
        init_v.initialize();
        v7.initialize();
    }
    else{
        var url=init_v.getSource();
        init_v.attachSource(v8.getSource());
        v8.attachSource(url);
        init_v.initialize();
        v8.initialize();
    }
}

AFRAME.registerComponent('main', {
    schema: {
        event: {type: 'string', default: ''},
        message: {type: 'string', default: 'Hello, World!'},
    },

    init: function(){
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
        var background=document.querySelector("#background")
        var vr_view=document.querySelector("#vr_view")
        background.setAttribute('visible', true)
        vr_view.setAttribute('visible', false)
        
        init_v.initialize(document.querySelector("#background"), init_url);
        v1.initialize(document.querySelector("#view1"), v1_url);
        v3.initialize(document.querySelector("#view1"), v3_url);
        v5.initialize(document.querySelector("#view1"), v5_url);
        v7.initialize(document.querySelector("#view1"), v7_url);
        v8.initialize(document.querySelector("#view1"), v8_url);
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

})
