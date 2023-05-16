let scene,camera,renderer,controls,render;
var qwq = document.getElementById("qwq");
var qvq = document.getElementsByClassName("column1")[0];


var init = () => {
    //Scene(场景)
    scene = new THREE.Scene;
    // scene.background = new THREE.Color("#9a9a9a");
    //renderer(渲染器)
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize( window.innerWidth*0.4, window.innerHeight );
    qvq.appendChild(renderer.domElement);

    //网格
    // var grid2=new THREE.GridHelper(10000,100);
    // scene.add(grid2);

    //相机
    const aspect = window.innerWidth*0.4 / window.innerHeight;		//获取窗口的尺寸
    camera = new THREE.PerspectiveCamera(70,aspect,0.01,5000);		//(相机角度,相机成像长宽比,相机最低能见度,相机最高能见度)
    camera.rotation.z = (50/180) * Math.pt;		//摄像机角度
    camera.position.set(2.8, 1.5 , 2.8);		//摄像机位置
    camera.lookAt(0,0,0);
    render = function (){
        renderer.render( scene, camera )
    }

    // 控制器
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render);
    controls.update();
    controls.target=new THREE.Vector3(0,1.5,0);
    function animate() {
        requestAnimationFrame( animate );
        controls.autoRotate=true;		//是否自动旋转
        controls.autoRotateSpeed=1;
        controls.update();
        renderer.render( scene, camera );
    }
    animate();

    //环境光
    ambientLight = new THREE.AmbientLight("#5c5c5c");
    ambientLight.position.set(10,10,10);
    scene.add(ambientLight);

    //点光源
    var point = new THREE.PointLight("#ffffff");
    point.position.set(10,10,10);
    scene.add(point);

    //loader(导入建模)
    const loader = new THREE.GLTFLoader();
    loader.load('/static/model/表具计量.gltf',(result) => {
        scene.add(result.scene);
        result.scene.position.set(0, 0.5, 0);
        // scene.result.scene.scale.set(5,5,5);
        renderer.render(scene,camera);
        // result.position.set(2, 1, 5);
    });

    renderer.render(scene,camera);

}
init();
