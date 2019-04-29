var main_p = dashjs.MediaPlayer().create();  
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
var v1_url="video/v5/5_v_dash.mpd";
var v2_url="video/v3/3_v_dash.mpd";
var v3_url="video/v1/1_v_dash.mpd";
var v4_url="video/v4/4_v_dash.mpd";
var v5_url="video/v2/2_v_dash.mpd";


function change(id) {
    var background = document.querySelector("#background")
    var vr_view = document.querySelector("#vr_view")
    background.setAttribute('visible', false)
    vr_view.setAttribute('visible', true)
    //view change 하면 stage 삭제, 시점 이동
    var view_sphere=document.querySelector("#view_sphere");
    view_sphere.setAttribute('rotation','0 0 0');
    var stage=document.querySelector("#stage");
    stage.setAttribute('visible', false);

    //카메라 값을 선택 view의 좌표값으로 이동
    var viewpoint=document.querySelector("#viewpoint");
    var view_loca=view_sphere.childNodes;
    
  
    if (id === "view1") {   
        console.log("change!");
        main_p.attachSource(v1_url);
        p1.attachSource(v1_url);
        main_p.initialize();
        p1.initialize();
        var v1_posi=view_loca[1].getAttribute('position')
        viewpoint.setAttribute('position', v1_posi);
        vr_view.setAttribute('rotation', '0 70 0')
    }
    else if (id === "view2") {
        console.log("change!");
        main_p.attachSource(v2_url);
        p2.attachSource(v2_url);
        main_p.initialize();
        p2.initialize();
        var v2_posi=view_loca[3].getAttribute('position')
        viewpoint.setAttribute('position', v2_posi);
        vr_view.setAttribute('rotation', '0 0 0')
    }
    else if (id === "view3") {
        console.log("change!");
        main_p.attachSource(v3_url);
        p3.attachSource(v3_url);
        main_p.initialize();
        p3.initialize();
        var v3_posi=view_loca[5].getAttribute('position')
        viewpoint.setAttribute('position', v3_posi);
        vr_view.setAttribute('rotation', '0 -60 0')
        
    }
    else if (id === "view4") {
        console.log("change!");
        main_p.attachSource(v4_url);
        p4.attachSource(v4_url);
        main_p.initialize();
        p4.initialize();
        var v4_posi=view_loca[7].getAttribute('position')
        viewpoint.setAttribute('position', v4_posi);
    }
    else if (id === "view5") {
        console.log("change!");

        main_p.attachSource(v5_url);
        p5.attachSource(v5_url);
        main_p.initialize();
        p5.initialize();
        var v5_posi=view_loca[9].getAttribute('position')
        viewpoint.setAttribute('position', v5_posi);
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
            console.log("ddd");
            var scale = evt.detail.intersectedEl.object3D.scale;
            scale.set(2.5, 2.5, 2.5);
        };

        cursor.onclick = function (evt) {
            console.log(evt.detail.intersectedEl.id);
            change(evt.detail.intersectedEl.id);
            console.log(evt.detail.intersectedEl.position)
            
            

        };

        var background = document.querySelector("#background")
        var vr_view = document.querySelector("#vr_view")
        background.setAttribute('visible', true)
        vr_view.setAttribute('visible', false)

        main_p.initialize(document.querySelector("#init"), main_url);
        p1.initialize(document.querySelector("#view1_v"), v1_url);
        p2.initialize(document.querySelector("#view2_v"), v2_url);
        p3.initialize(document.querySelector("#view3_v"), v3_url);
        p4.initialize(document.querySelector("#view4_v"), v4_url);
        p5.initialize(document.querySelector("#view5_v"), v5_url);
        
        

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