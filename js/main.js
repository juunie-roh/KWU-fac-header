import * as THREE from 'three';
import { MapControls } from 'three/addons/controls/MapControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';
import * as URL from './url.js';

const buildingDatas = [
  {
    building_code: '04',
    building: '복지관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/BokJi.glb',
    position_x: 120,
    position_y: 0,
    position_z: 10,
    angle: 63,
    scale: 1,
    others: '',
  },
  {
    building_code: '05',
    building: '비마관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/BiMa.glb',
    position_x: 79,
    position_y: 0,
    position_z: -148,
    angle: 23,
    scale: 1,
    others: '',
  },
  {
    building_code: '08',
    building: '새빛관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/SaeBit.glb',
    position_x: 55,
    position_y: 0,
    position_z: -229,
    angle: 74.5,
    scale: 1,
    others: '',
  },
  {
    building_code: '09',
    building: '아이스링크',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/IceRink.glb',
    position_x: 0,
    position_y: 0,
    position_z: 97,
    angle: 123,
    scale: 1,
    others: '',
  },
  {
    building_code: '10',
    building: '연구문화관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/DongHae.glb',
    position_x: 50,
    position_y: 0,
    position_z: 65,
    angle: 159,
    scale: 1,
    others: '',
  },
  {
    building_code: '12',
    building: '옥의관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/OkUi.glb',
    position_x: 162,
    position_y: 0,
    position_z: -72,
    angle: 212,
    scale: 1,
    others: '',
  },
  {
    building_code: '17',
    building: '화도관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/HwaDo.glb',
    position_x: -16,
    position_y: 0,
    position_z: -106,
    angle: -118,
    scale: 1,
    others: '',
  },
  {
    building_code: '03',
    building: '다산재',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/DaSan.glb',
    position_x: 131,
    position_y: 0,
    position_z: -156,
    angle: 42,
    scale: 1,
    others: '',
  },
  {
    building_code: '11',
    building: '연촌재',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/YeonChon.glb',
    position_x: -175,
    position_y: 0,
    position_z: 146,
    angle: 144,
    scale: 1,
    others: '',
  },
  {
    building_code: '14',
    building: '참빛관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/ChamBit.glb',
    position_x: 128,
    position_y: 0,
    position_z: -235,
    angle: -70,
    scale: 1,
    others: '',
  },
  {
    building_code: '15',
    building: '한울관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/HanUl.glb',
    position_x: -37,
    position_y: 0,
    position_z: 104,
    angle: -76,
    scale: 1,
    others: '',
  },
  {
    building_code: '16',
    building: '한천재',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/HanCheon.glb',
    position_x: 8,
    position_y: 0,
    position_z: 65,
    angle: -20,
    scale: 1,
    others: '',
  },
  {
    building_code: '13',
    building: '인터내셔널 하우스',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/InternationalHouse.glb',
    position_x: -204,
    position_y: 0,
    position_z: 165,
    angle: 100,
    scale: 1,
    others: '',
  },
  {
    building_code: '02',
    building: '누리관',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/NuRi.glb',
    position_x: -2,
    position_y: 0,
    position_z: 290,
    angle: -27,
    scale: 1,
    others: '',
  },
  {
    building_code: '01',
    building: '80주년 기념관 & 광운 스퀘어',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/KWSquare.glb',
    position_x: 42,
    position_y: 0,
    position_z: -70,
    angle: -119,
    scale: 1,
    others: '',
  },
  {
    building_code: '06',
    building: '빛솔재 A동',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/BitSolA.glb',
    position_x: -118,
    position_y: 0,
    position_z: 180,
    angle: 15,
    scale: 1,
    others: '',
  },
  {
    building_code: '07',
    building: '빛솔재 B동',
    building_phone_num: '',
    management_team: '',
    management_team_phone_num: '',
    model_path: './models/BitSolB.glb',
    position_x: -107,
    position_y: 0,
    position_z: 129,
    angle: 15,
    scale: 1,
    others: '',
  }
];
let receivedData;

const fixedHelp = document.getElementById( 'fixedHelp' );
const mapMenuBtn = document.getElementById('mapMenuBtn');
const mapMenu = document.getElementById('mapMenu');
const detailsOpenBtn = document.getElementById('detailsOpenBtn');
const detailsCloseBtn = document.getElementById('detailsCloseBtn');
const details = document.getElementById('details');
const categories = document.getElementsByClassName('category');
const subCategories = document.querySelectorAll( 'ul.sub-categories li a' );
const container = document.getElementById( 'mapContainer' );

///////////////////////////////
///// THREE.js from here: /////
///////////////////////////////

let width, height, camera, controls, scene, renderer, raycaster, headerHeight;
const pointer = new THREE.Vector2(); // mouse cursor position tracking
let intersects = []; // list to find which building is selected
let INTERSECTED = undefined; // stores which building is selected

const buildings = []; // Loaded Buildings List
const fonts = []; // Loaded Fonts List
// const arrows = [];

// let sphere;
let plane;
let exrCubeRenderTarget;
let exrBackground;
const params = {
  envMap: 'EXR',
  roughness: 0.1,
  metalness: 0.5,
  exposure: 0.5,
  debug: false,
};

init();
noticeInit();
animate();

async function init() {

  // variables
  updateWindowSize();

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xcccccc );
  // scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

  raycaster = new THREE.Raycaster(); // for mouse(pointer) tracking

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( width, height );
  container.appendChild( renderer.domElement ); // where to append

  // renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  // renderer.toneMapping = THREE.ACESFilmicToneMapping;

  camera = new THREE.PerspectiveCamera( 60, width / height, 1, 1000 );// 1000 );
  camera.position.set( 350, 250, 0 ); // ( 400, 200, 0 );

  initControls();
  initWorldFloor();
  initLights();

  // TEST SPHERE
  // const sphereGeo = new THREE.SphereGeometry(5, 32, 32);
  // const sphereMat = new THREE.MeshPhysicalMaterial({
  //   color: 0xffffff,
  //   metalness: 0,
  //   roughness: 0,
  //   ior: 1.5,
  //   envMapIntensity: 1,
  //   reflectivity: 1,
  //   transmission: 1,
  //   specularIntensity: 1,
  //   opacity: 1,
  //   side: THREE.DoubleSide,
  //   transparent: true
  // })
  // const sphereMat2 = new THREE.MeshStandardMaterial({
  //   metalness: params.metalness,
  //   roughness: params.roughness,
  //   envMapIntensity: 1.0
  // })
  // sphere = new THREE.Mesh(sphereGeo, sphereMat2);
  // sphere.position.set(0, 10, 0);
  // sphere.castShadow = true;
  // sphere.receiveShadow = true;
  // scene.add(sphere);

  
  THREE.DefaultLoadingManager.onLoad = () => { pmremGenerator.dispose(); }

  new EXRLoader().load('../textures/sky_1k.exr', texture => {

    texture.mapping = THREE.EquirectangularReflectionMapping;
    exrCubeRenderTarget = pmremGenerator.fromEquirectangular(texture);
    exrBackground = texture;

  });

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  // // Grid Helper
  // const gridHelper = new THREE.GridHelper( 1000, 100 );
  // scene.add( gridHelper );

  // Event Listeners

  window.addEventListener( 'resize', onWindowResize );
  container.addEventListener( 'pointermove', onPointerMove );
  container.addEventListener( 'click', onClick );
  // window.addEventListener( 'dblclick', ( event ) => { // dev, 더블 클릭시 카메라의 위치에서 카메라 방향으로 
  //   let worldDirection = new THREE.Vector3;
  //   let worldPosition = new THREE.Vector3;
  //   const arrow = new THREE.ArrowHelper( camera.getWorldDirection( worldDirection ), camera.getWorldPosition( worldPosition ), 15, 0xff0000 );
  //   scene.add( arrow );
  //   console.log( worldDirection );
  //   console.log( worldPosition );
  // } );

  fixedHelp.addEventListener('click', () => {
  
    if (fixedHelp.classList.contains('active')) {
      fixedHelp.classList.remove('active');
      fixedHelp.removeAttribute('style');
      return;
    }
    fixedHelp.classList.add('active');
    fixedHelp.style.height = fixedHelp.querySelector('ul').clientHeight + 40 + 'px';
    
  });
  
  mapMenuBtn.addEventListener('click', () => {
    
    mapMenuBtn.classList.toggle('active');
    mapMenu.classList.toggle('active');
    
  });

  for (let category of categories) {

    const text = category.querySelector( '.text' );
    text.addEventListener('click', () => {

      const textHeight = text.clientHeight;
      const subCategoriesHeight = category.querySelector( '.sub-categories' ).clientHeight;

      if (category.classList.contains('on')) {
        category.classList.remove( 'on' );
        category.style.height = textHeight + 'px';
        return;
      }

      category.classList.add( 'on' );
      category.style.height = category.clientHeight + subCategoriesHeight + 'px';
      return;

    });

  };

  detailsOpenBtn.addEventListener('click', () => { details.classList.add('active'); });
  detailsCloseBtn.addEventListener('click', () => { details.classList.remove('active'); });

  // GLTF Loader, load models

  const gltfLoader = new GLTFLoader();
  // const datas = await fetch(URL.buildings, { method: 'GET' })
  //                     .then(res => res.json())
  //                     .then(json => { return json; });

  buildingDatas.forEach(data => { createModel(gltfLoader, data); });

}

async function noticeInit() {

  const noticeDatas = await fetch(URL.notice, { method: 'GET' })
                            .then(res => res.json()) // if (res.status === 200) { return res.json() } else { error handling }
                            .then(json => { return json; });
  // console.log(noticeDatas);

  // Extract dept names and remove duplicates from raw data
  const depts = [];
  noticeDatas.forEach(data => { depts.push(data.dept); });
  const uniqDepts = [...new Set(depts)];
  // console.log(uniqDepts);

  // create html elements for uniqDepts
  uniqDepts.forEach((dept, index) => {

    const filtered = noticeDatas.filter(data => data.dept === dept);
    createNoticeList(filtered, index);

  });

  // click events
  const noticeLis = document.querySelectorAll('li.notice-list');
  let activateIndex = 0;
  noticeLis.forEach((noticeLi, index) => {

    noticeLi.addEventListener('click', (e) => {

      e.preventDefault();
      let currentActiveNoticeLi = document.querySelector('li.notice-list.active');
      currentActiveNoticeLi.classList.remove('active');
      e.target.parentElement.classList.add('active');
      activateNotice(activateIndex, index);
      activateIndex = index;

    });

  })

}

// window events

function onWindowResize() {
  
  updateWindowSize();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize( width, height );
  
}

function onPointerMove( event ) {

  event.preventDefault();
  let gapX = event.clientX - event.offsetX;
  let gapY = event.clientY - event.offsetY;
  // pointer.set( ( event.clientX / width ) * 2 - 1, - ( event.clientY / height ) * 2 + 1 );
  pointer.set(((event.clientX - gapX) / width) * 2 - 1, - ((event.clientY - gapY) / height) * 2 + 1);
  getIntersects();

}

function onClick( event ) {

  onPointerMove( event ); // get pointer position
  INTERSECTED && INTERSECTED.userData.onClick();

}

// three.js required

function animate() {

  window.requestAnimationFrame( animate );

  // Let the groups generated from `createFont()` face the camera all the time
  fonts.forEach(font => { font.quaternion.copy( camera.quaternion ) });
  controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
  render();

}

function render() {

  let background = scene.background;
  let newEnvMap = exrCubeRenderTarget ? exrCubeRenderTarget.texture : null;

  background = exrBackground;

  buildings.forEach(building => {
    building.traverse(n => {
      
      if (n.isMesh) {
        n.material.envMap = newEnvMap;
        n.material.needsUpdate = true;
        if (n.name === 'Window' || n.name === 'Windows') {
          n.material.roughness = 0.05;
          n.material.metalness = 0.6;
          n.material.reflectivity = 1;
        }
      }

    })
  })
  
  // sphere.material.envMap = newEnvMap;
  // sphere.material.needsUpdate = true;
  plane.material.needsUpdate = true;

  scene.background = background;
  renderer.toneMappingExposure = params.exposure;

  renderer.render(scene, camera);

}

// custom functions

/**
 * 3D 맵의 컨트롤을 설정합니다.
 */
function initControls() {

  controls = new MapControls( camera, renderer.domElement );

  //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05;

  controls.screenSpacePanning = false;

  controls.minDistance = 100;
  controls.maxDistance = 500;

  controls.maxPolarAngle = Math.PI / 2;

}

/**
 * 3D 환경의 바닥을 설정합니다.
 */
function initWorldFloor() {

  const planeSize = 1000; // 2000;
  const planeTexture = new THREE.TextureLoader().load( './images/KakaoMap_KWU.png' );
  plane = new THREE.Mesh(
    new THREE.PlaneGeometry(planeSize, planeSize, 8, 8),
    new THREE.MeshBasicMaterial({ 
      side: THREE.FrontSide, 
      map: planeTexture
    })
  );
  plane.rotateX( Math.PI / ( -2 ) );
  plane.rotateZ( Math.PI / 2 );
  plane.name = 'worldFloor';
  plane.castShadow = false;
  plane.receiveShadow = true;
  scene.add( plane );

}

/**
 * 3D 빛 환경을 설정합니다.
 */
function initLights() {

  const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0.7);
  hemisphereLight.name = 'hemisphereLight';
  // hemisphereLight.castShadow = true;
  scene.add(hemisphereLight);

  const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.4);
  dirLight1.position.set( 10, 12, 9 );
  dirLight1.target.position.set(0, 0, 0);
  dirLight1.castShadow = true;
  dirLight1.name = 'dirLight1';
  // scene.add( dirLight1 );

  const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
  dirLight2.position.set( 13, 12, -10 );
  dirLight2.target.position.set(0, 0, 0);
  dirLight2.name = 'dirLight2';
  // scene.add( dirLight2 );

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.20);
  ambientLight.name = 'ambientLight';
  scene.add( ambientLight );

}

/**
 * 3D 맵이 차지할 영역의 너비 및 높이를 업데이트 합니다.
 * header 영역이 차지하는 부분과 margin 으로 설정한 10 씩을 제외한 전체화면입니다.
 */
function updateWindowSize() {

  headerHeight = Number(getComputedStyle(document.documentElement).getPropertyValue('--header-height').slice(0, 2));
  width = window.innerWidth - 20;
  height = window.innerHeight - 20 - headerHeight;

}

/**
 * 건물의 모델링을 불러와 `scene`에 추가하고, `buildings` 리스트에 저장 및 `subCategories`의 이벤트 리스너를 설정합니다.
 * 
 * `loader` 를 사용해 `building.modelPath` 에 있는 모델을 불러옵니다.   
 * 모델의 위치, 회전시킬 각도, 크기 조정을 위한 스케일을 설정하여 `scene` 및 `buildings` 리스트에 추가하고, `createFont()` 에 `position` 을 전달합니다.
 * @param { GLTFLoader } loader `GLTFLoader` used in this file.
 * @param { object } data Item stored in `receivedData` list, an object containing informations of each buildings.
 */
function createModel ( loader, data ) {

  // more error handling needed
  if ( !data.model_path ) { console.error( 'model_path not found.' ); return; }
  loader.load( data.model_path, async ( gltf ) => {

    const model = await gltf.scene;
    if ( !model ) {
      // error handling
    }
    model.name = data.building;
    model.position.set( data.position_x, data.position_y, data.position_z );
    model.rotateY( Math.PI / 180 * data.angle );
    model.scale.setScalar( data.scale );

    // const facilities = await fetch(URL.importance + data.building_code)
    //                          .then(res => res.json())
    //                          .then(datas => {

    //                            let result = [];
    //                            datas.forEach(data => { result.push(data); });
    //                            return result;

    //                          });

    model.userData = {

      id: data.building_code,
      building_phone_num: data.building_phone_num,
      management_team: data.management_team,
      management_team_phone_num: data.management_team_phone_num,
      // importance_rooms: facilities,
      others: data.others,

      onPointerOver: function() {
        for ( let child of model.children ) {

          child.currentHex = child.material.emissive.getHex();
          child.material.emissive.setHex( 0xff0000 );
    
        }
      },

      onPointerOut: function() {
        for ( let child of model.children ) {

          child.material.emissive.setHex( 0 );

        }
      },

      onClick: function() {

        controls.target.copy( model.position );
        controls.update();
        // console.log( model.name + ' clicked' );
        // console.log( model.userData.importance_rooms );
        sessionStorage.setItem( 'building_code', model.userData.id );

      }

    }
    
    // removing spaces from the model.name as this font does not support spaces.
    createFont( model.position, model.name.replace( /\s/g, '' ) );
    buildings.push(model);
    scene.add(model);

    // subCategories Event Listener
    subCategories.forEach( ( subCategory ) => {

      const subId = subCategory.getAttribute( 'data-id' );
      if ( subId === model.userData.id ) {

        const target = model;
        // hover event
        subCategory.addEventListener('mouseover', () => { target.userData.onPointerOver(); });
        subCategory.addEventListener('mouseout', () => { target.userData.onPointerOut(); });
        // click event
        subCategory.addEventListener('click', e => { 
          e.preventDefault();
          target.userData.onClick();
          mapMenuBtn.classList.remove('active');
          mapMenu.classList.remove('active');
        });

      }
    });

  }, progress => {
    // console.log((progress.loaded / progress.total * 100).toString() + "% loaded!");
  }, error => {
    console.error( error );
  } );

}

/**
 * 건물 이름 표시를 위한 3D 폰트 생성 함수입니다.   
 * `position` 에 해당하는 위치에서 `THREE.Line` 과 `THREE.Mesh (text)` 을 갖는 `THREE.Group` 을 생성합니다.
 * @param { THREE.Vector3 } position position of the target model
 * @param { string } name name of the target building
 */
async function createFont(position, name) {
  if (!position || !name) { console.error("Creating Font Failed: parmas undefined"); return; } 
  // Drawing Lines:
  const points = [];
  points.push( new THREE.Vector3( 0, 0, 0 ) );
  points.push( new THREE.Vector3( 25, 25, 25 ) ); // ( 50, 50, 50 ) );

  const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints( points ),
    new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 5 } )
  );
  line.position.set( 0, 0, 0 );
  // line.material.depthTest = false; // for renderOrder

  // font loading function
  const loader = new FontLoader();
  await loader.load('./fonts/NanumSquareRound.json', font => {

    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: false,
      side: THREE.FrontSide,
    });

    const message = name;
    const shapes = font.generateShapes(message, 5); // 10 );
    const geometry = new THREE.ShapeGeometry(shapes);

    // make shape ( N.B. edge view not visible )
    const text = new THREE.Mesh( geometry, material );
    text.position.set( 25, 25, 25 );// ( 50, 50, 50 );
    text.material.depthTest = false; // for renderOrder
    group.add( text );

  }); //end load function

  // Create Group:
  const group = new THREE.Group();
  group.add( line );
  // group.add( plane );
  group.position.copy( position );
  fonts.push( group );
  group.renderOrder = 1; // renderOrder (z-index)
  group.name = name + ' Font';
  scene.add( group );

}

/**
 * `pointer` 에서 `camera` 가 바라보는 방향으로 `raycaster` 를 생성해 교차하는 아이템을 가져옵니다.   
 * 
 * `buildings[]` 에서 `raycaster` 와 교차하는 아이템을 확인하여 가장 앞에 있는 것을 `INTERSECTED`로 설정한 후 `onPointerOver()` 를 수행합니다.   
 * 교차하는 아이템이 바뀌거나 사라졌을 때는 기존 아이템의 `onPointerOut()`를 수행합니다.
 */
function getIntersects() {

  raycaster.setFromCamera(pointer, camera);
  intersects = raycaster.intersectObjects(buildings, true);
  if (intersects.length > 0) { 

    if (INTERSECTED) INTERSECTED.userData.onPointerOut();
    INTERSECTED = intersects[0].object.parent;
    INTERSECTED.userData.onPointerOver();
  
  } else { 
    
    if (INTERSECTED) INTERSECTED.userData.onPointerOut();
    INTERSECTED = undefined;
  
  }

}

/**
 * 각 단과대별로 필터링 된 배열을 ul element로 생성합니다.
 * @param {Array} filtered an array of filtered notices
 * @param {Number} index an index number to set default element as active
 */
function createNoticeList(filtered, index) {

  const header = document.querySelector('ul.notice-header-wrap');
  const list = document.querySelector('div.notice-list-wrap');
  const li = document.createElement('li');
  const h3 = document.createElement('h3');

  li.className = 'notice-list';
  if (index === 0) { li.classList.add('active'); } // Set First Element as active 
  h3.innerText = filtered[0].dept;
  li.append(h3);
  header.append(li);

  const ul = document.createElement('ul');
  ul.className = 'notices';
  if (index === 0) { ul.classList.add('active'); }

  filtered.forEach(item => {
    
    const noticesLi = document.createElement('li');
    const a = document.createElement('a');
    const span = document.createElement('span');

    a.href = item.site;
    a.innerText = item.notice;
    span.innerText = item.date;

    noticesLi.append(a);
    noticesLi.append(span);
    ul.append(noticesLi);

  });

  list.append(ul);

}

/**
 * 단과대 별 공지사항들의 내용이 담긴 ul element들 중 `last`를 비활성화하고, `current`를 활성화합니다.
 * @param {Number} last an index of activated noticeUl
 * @param {Number} current the target index of noticeUl to activate
 */
function activateNotice(last, current) {

  const noticesUls = document.querySelectorAll('ul.notices');
  noticesUls[last].classList.remove('active');
  noticesUls[current].classList.add('active');

}