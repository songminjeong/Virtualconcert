var init_v = dash.js.MediaPlayer().create();
var v1_select = dashjs.MediaPlayer().create();
var v3_select = dashjs.MediaPlayer().create();
var v5_select = dashjs.MediaPlayer().create();
var v7_select = dashjs.MediaPlayer().create();
var v8_select = dashjs.MediaPlayer().create();

init_v.serAutoPlay(true);
v1_select.setAutoPlay(true);
v3_select.setAutoPlay(true);
v5_select.setAutoPlay(true);
v7_select.setAutoPlay(true);
v8_select.setAutoPlay(true);

var init_url="video/ex1/1_out_dash.mpd"
var v1_url="video/v1/1_v_dash.mpd";
var v3_url="video/v2/2_v_dash.mpd";
var v5_url="video/v3/3_v_dash.mpd";
var v7_url="video/v4/4_v_dash.mpd";
var v8_url="video/v5/5_v_dash.mpd";

function change(id){
    
    var back = document.querySelector("#skyback")
    var vid_sphere = document.querySelector("#vr_view")
    back.setAttribute('visible', false)
    vid_sphere.setAttribute('visible', true)
    
    if(id === "view1"){
        var viewchange=init_v.getSource();
        init_v.attachSource(v1_select.getSource());
        v1_select.attachSource(viewchange);
        init_v.initialize();
        v1_select.initialize();
    }
    else if(id === "view3"){
        var viewchange=init_v.getSource();
        init_v.attachSource(v3_select.getSource());
        v3_select.attachSource(viewchange);
        init_v.initialize();
        v3_select.initialize();
    }
    else if(id === "view5"){
        var viewchange=init_v.getSource();
        init_v.attachSource(v5_select.getSource());
        v5_select.attachSource(viewchange);
        init_v.initialize();
        v5_select.initialize();
    }
    else if(id === "view7"){
        var viewchange=init_v.getSource();
        init_v.attachSource(v7_select.getSource());
        v7_select.attachSource(viewchange);
        init_v.initialize();
        v7_select.initialize();
    }
    else{
        var viewchange=init_v.getSource();
        init_v.attachSource(v8_select.getSource());
        v8_select.attachSource(viewchange);
        init_v.initialize();
        v8_select.initialize();
    }
}
AFRAME.registerComponent('main',{
    schema:{
        event:{type:'string', default:''},
        message:{type:'string', default:'Hello, World!'},
    },

    init:function(){
        var cursor = document.querySelector("#cursor");

        cursor.onmouseleave=function(evt){
            this.setAttribute('color', 'black');
            var scale=evt.detail.intersectedEl.object3D.scale;
            scale.set(1,1,1);
        };
        cursor.onmouseenter=function(evt){
            this.setAttribute('color','green');
            var scale=evt.detail.intersectedEl.object3D.scale;
            scale.set(2.5, 2.5, 2.5);
        };
        cursor.onclick=function(evt){
            console.log(evt.detail.intersectedEl.id);
            change(evt.detail.intersectedEl.id);
        };
        // skyback.initialize(document.querySelector("#"), main_url);
        var back = document.querySelector("#skyback")
        var vid_sphere = document.querySelector("#vr_view")
        back.setAttribute('visible', false)
        vid_sphere.setAttribute('visible', true)
        
        init_v.initialize(document.querySelector("#init"), init_url) 
        v1_select.initialize(document.querySelector("#view1"), v1_url);
        v3_select.initialize(document.querySelector("#view3"), v3_url);
        v5_select.initialize(document.querySelector("#view5"), v5_url);
        v7_select.initialize(document.querySelector("#view7"), v7_url);
        v8_select.initialize(document.querySelector("#view8"), v8_url);
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