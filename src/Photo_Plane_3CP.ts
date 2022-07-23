

//----------------Frame領域---------------------------------------------------------------------------------------
//-----------------PicFrame1----------------------------------------------------------------------------
const PicFrame1 = new Entity()
PicFrame1.addComponent(new GLTFShape("models/PicFrame_gltf.gltf"))
PicFrame1.addComponent(new Transform({
    position: new Vector3(14.51, 1.75, 6.18),
    rotation: new Quaternion(0, 0.7933534, 0, 0.6087615),
    scale: new Vector3(1.8, 1.3, 1)
}))

//-----------------PicFrame2----------------------------------------------------------------------------
const PicFrame2 = new Entity()
PicFrame2.addComponent(new GLTFShape("models/PicFrame_gltf.gltf"))
PicFrame2.addComponent(new Transform({
    position: new Vector3(7.759, 5.27, 14.2),
    rotation: new Quaternion(0, 0.01745236, 0, -0.9998478),
    scale:     new Vector3(2.129, 1.538, 1.183)
}))

//-----------------PicFrame3----------------------------------------------------------------------------
const PicFrame3 = new Entity()
PicFrame3.addComponent(new GLTFShape("models/PicFrame_gltf.gltf"))
PicFrame3.addComponent(new Transform({
    position: new Vector3(1.420061, 5.539127, 9.480711),
    rotation: new Quaternion(0.005312378, 0.6087383, -0.006923226, -0.7933232),
    scale: new Vector3(1.471, 1.062, 0.817)
}))

//-----------------PicFrame4----------------------------------------------------------------------------
const PicFrame4 = new Entity()
PicFrame4.addComponent(new GLTFShape("models/PicFrame_gltf.gltf"))
PicFrame4.addComponent(new Transform({
    position: new Vector3(2.869, 7.99, 3.065),
    rotation: new Quaternion(0, 0.9238796, 0, -0.3826834),
    scale: new Vector3(1.8, 1.3, 1)
}))

//-----------------PicFrame5----------------------------------------------------------------------------
const PicFrame5 = new Entity()
PicFrame5.addComponent(new GLTFShape("models/PicFrame_gltf.gltf"))
PicFrame5.addComponent(new Transform({
    position: new Vector3(9.276226, 9, 1.177354),
    rotation: new Quaternion(0, 0.9914449, 0, 0.1305263),
    scale: new Vector3(1.471, 1.062, 0.817)
}))

//-----------------PicFrame6----------------------------------------------------------------------------
const PicFrame6 = new Entity()
PicFrame6.addComponent(new GLTFShape("models/PicFrame_gltf.gltf"))
PicFrame6.addComponent(new Transform({
    position: new Vector3(14.24988, 9.200002, 5.938057),
    rotation: new Quaternion(0, 0.7933533, 0, 0.6087614),
    scale: new Vector3(1.8, 1.3, 1)
}))

//-----------------PicFrame7----------------------------------------------------------------------------
const PicFrame7 = new Entity()
PicFrame7.addComponent(new GLTFShape("models/PicFrame_gltf.gltf"))
PicFrame7.addComponent(new Transform({
    position: new Vector3(5.998111, 12.5, 14.35418),
    rotation: new Quaternion(0, 0.1305263, 0, -0.9914449),
    scale: new Vector3(1.471, 1.062, 0.817)
}))

//-----------------PicFrame8----------------------------------------------------------------------------
const PicFrame8 = new Entity()
PicFrame8.addComponent(new GLTFShape("models/PicFrame_gltf.gltf"))
PicFrame8.addComponent(new Transform({
    position: new Vector3(1.203942, 12.45, 9.166093),
    rotation: new Quaternion(0, 0.6087615, 0, -0.7933533),
    scale: new Vector3(1.062, 1.471, 0.817)
}))

//-----------------PicFrame9----------------------------------------------------------------------------
const PicFrame9 = new Entity()
PicFrame9.addComponent(new GLTFShape("models/PicFrame_gltf.gltf"))
PicFrame9.addComponent(new Transform({
    position: new Vector3(9.328388, 16.21, 1.268883),
    rotation: new Quaternion(0, 0.9914449, 0, 0.1305263),
    scale: new Vector3(1.67, 1.205, 0.925)
}))

//-----------------PicFrame10----------------------------------------------------------------------------
const PicFrame10 = new Entity()
PicFrame10.addComponent(new GLTFShape("models/PicFrame_gltf.gltf"))
PicFrame10.addComponent(new Transform({
    position: new Vector3(13.899, 16.26, 6.814),
    rotation: new Quaternion(0, 0.7489557, 0, 0.6626201),
    scale: new Vector3(2.787, 2.014, 1.549)
}))

/*
position: new Vector3(9.328388, 16.21, 1.268883),
    rotation: new Quaternion(0, 0.9914449, 0, 0.1305263),
        scale: new Vector3(1.67, 1.205, 0.925)
*/


//-----------------PicFrame11----------------------------------------------------------------------------
const PicFrame11 = new Entity()
PicFrame11.addComponent(new GLTFShape("models/PicFrame_gltf.gltf"))
PicFrame11.addComponent(new Transform({
    position: new Vector3(11.50824, 16.5, 12.75937),
    rotation: new Quaternion(0, 0.3338069, 0, 0.9426415),
    scale: new Vector3(3.116, 2.252, 1.732)
}))

//-----------------PicFrame12----------------------------------------------------------------------------
const PicFrame12 = new Entity()
PicFrame12.addComponent(new GLTFShape("models/PicFrame_gltf.gltf"))
PicFrame12.addComponent(new Transform({
    position: new Vector3(2.054274, 16.6, 9.322294),
    rotation: new Quaternion(0, 0.6087615, 0, -0.7933533),
    scale: new Vector3(2.934, 2.119, 1.627)
}))




//----------------Plane領域---------------------------------------------------------------------------------------

//-----------------Plane1---------------------------
const Plane1 = new Entity()
Plane1.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(1.48, 1.48, 1),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane2---------------------------
const Plane2 = new Entity()
Plane2.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(1.48, 1.48, 1),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane3---------------------------
const Plane3 = new Entity()
Plane3.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(1.48, 1.48, 1),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane4---------------------------
const Plane4 = new Entity()
Plane4.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(1.48, 1.48, 1),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))


//-----------------Plane5---------------------------
const Plane5 = new Entity()
Plane5.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(1.48, 1.48, 1),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane6---------------------------
const Plane6 = new Entity()
Plane6.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(1.48, 1.48, 1),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane7---------------------------
const Plane7 = new Entity()
Plane7.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(1.48, 1.48, 1),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))


//-----------------Plane8---------------------------
const Plane8 = new Entity()
Plane8.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(1.48, 1.48, 1),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane9---------------------------
const Plane9 = new Entity()
Plane9.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(1.48, 1.48, 1),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))


//-----------------Plane10---------------------------
const Plane10 = new Entity()
Plane10.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(1.48, 1.48, 1),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane11---------------------------
const Plane11 = new Entity()
Plane11.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(1.48, 1.48, 1),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//-----------------Plane12---------------------------
const Plane12 = new Entity()
Plane12.addComponent(new Transform({
    position: new Vector3(0.005, 0.2, -0.065),
    scale: new Vector3(1.48, 1.48, 1),
    rotation: Quaternion.Euler(0, 0, 179.8),         //rotationはこのままにしておくこと
}))

//----------------ペアレント領域---------------------------------------------------------------------------------------
Plane1.setParent(PicFrame1)
Plane2.setParent(PicFrame2)
Plane3.setParent(PicFrame3)
Plane4.setParent(PicFrame4)
Plane5.setParent(PicFrame5)
Plane6.setParent(PicFrame6)
Plane7.setParent(PicFrame7)
Plane8.setParent(PicFrame8)
Plane9.setParent(PicFrame9)
Plane10.setParent(PicFrame10)
Plane11.setParent(PicFrame11)
Plane12.setParent(PicFrame12)

//----------------エンジン領域---------------------------------------------------------------------------------------
engine.addEntity(PicFrame1)
engine.addEntity(PicFrame2)
engine.addEntity(PicFrame3)
engine.addEntity(PicFrame4)
engine.addEntity(PicFrame5)
engine.addEntity(PicFrame6)
engine.addEntity(PicFrame7)
engine.addEntity(PicFrame8)
engine.addEntity(PicFrame9)
engine.addEntity(PicFrame10)
engine.addEntity(PicFrame11)
engine.addEntity(PicFrame12)



//----------------UV領域---------------------------------------------------------------------------------------

//------ UV__plane1----------
const Plane1_UV = new PlaneShape()
Plane1_UV.uvs = [
    //UV__4面の1番目 LeftUpper
    0, 1,

    0.5, 1,

    0.5, 0.5,

    0, 0.5,

    0, 1,

    0.5, 1,

    0.5, 0.5,

    0, 0.5,
]
Plane1.addComponent(Plane1_UV)

//------ UV__plane2----------
const Plane2_UV = new PlaneShape()
Plane2_UV.uvs = [
    //UV__4面の2番目 RightUpper
    0.5, 1,

    1, 1,

    1, 0.5,

    0.5, 0.5,

    0.5, 1,

    1, 1,

    1, 0.5,

    0.5, 0.5,
]
Plane2.addComponent(Plane2_UV)

//------ UV__plane3----------
const Plane3_UV = new PlaneShape()
Plane3_UV.uvs = [
    //UV__4面の3番目 LeftUnder
    0, 0.5,

    0.5, 0.5,

    0.5, 0,

    0, 0,

    0, 0.5,

    0.5, 0.5,

    0.5, 0,

    0, 0,
]
Plane3.addComponent(Plane3_UV)

//------ UV__plane4----------
const Plane4_UV = new PlaneShape()
Plane4_UV.uvs = [
    //UV__4面の4番目 RightUnder
    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,

    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,
]
Plane4.addComponent(Plane4_UV)

//------ UV__plane5----------
const Plane5_UV = new PlaneShape()
Plane5_UV.uvs = [
    //UV__4面の1番目 LeftUpper
    0, 1,

    0.5, 1,

    0.5, 0.5,

    0, 0.5,

    0, 1,

    0.5, 1,

    0.5, 0.5,

    0, 0.5,
]
Plane5.addComponent(Plane5_UV)

//------ UV__plane6----------
const Plane6_UV = new PlaneShape()
Plane6_UV.uvs = [
    //UV__4面の2番目 RightUpper
    0.5, 1,

    1, 1,

    1, 0.5,

    0.5, 0.5,

    0.5, 1,

    1, 1,

    1, 0.5,

    0.5, 0.5,
]
Plane6.addComponent(Plane6_UV)

//------ UV__plane7----------
const Plane7_UV = new PlaneShape()
Plane7_UV.uvs = [
    //UV__4面の3番目 LeftUnder
    0, 0.5,

    0.5, 0.5,

    0.5, 0,

    0, 0,

    0, 0.5,

    0.5, 0.5,

    0.5, 0,

    0, 0,
]
Plane7.addComponent(Plane7_UV)

//------ UV__plane8----------
const Plane8_UV = new PlaneShape()
Plane8_UV.uvs = [
    //UV__4面の4番目 RightUnder
    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,

    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,
]
Plane8.addComponent(Plane8_UV)

//------ UV__plane9----------
const Plane9_UV = new PlaneShape()
Plane9_UV.uvs = [
    //UV__4面の1番目 LeftUpper
    0, 1,

    0.5, 1,

    0.5, 0.5,

    0, 0.5,

    0, 1,

    0.5, 1,

    0.5, 0.5,

    0, 0.5,
]
Plane9.addComponent(Plane9_UV)

//------ UV__plane10----------
const Plane10_UV = new PlaneShape()
Plane10_UV.uvs = [
    //UV__4面の2番目 RightUpper
    0.5, 1,

    1, 1,

    1, 0.5,

    0.5, 0.5,

    0.5, 1,

    1, 1,

    1, 0.5,

    0.5, 0.5,
]
Plane10.addComponent(Plane10_UV)

//------ UV__plane11----------
const Plane11_UV = new PlaneShape()
Plane11_UV.uvs = [
    //UV__4面の3番目 LeftUnder
    0, 0.5,

    0.5, 0.5,

    0.5, 0,

    0, 0,

    0, 0.5,

    0.5, 0.5,

    0.5, 0,

    0, 0,
]
Plane11.addComponent(Plane11_UV)

//------ UV__plane12----------
const Plane12_UV = new PlaneShape()
Plane12_UV.uvs = [
    //UV__4面の4番目 RightUnder
    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,

    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,
]
Plane12.addComponent(Plane12_UV)



//----------------Onclick領域---------------------------------------------------------------------------------------


Plane1.addComponent(new OnPointerDown((e) => {

    canvas.visible = true                   //ボタンクリックで、canvasを表示する
    text1.visible = true                   //クリックでテキスト1(MEA AQUA説明文)表示
    close_botton.visible = true          //クリックで閉じるボタン表示
},
    {
        hoverText: "Explanation in English",
    }

))

/*
//NFTを入れる場合はここを変更する
Plane1.addComponent(new OnPointerDown((e) => {

    // openExternalURL("https://2423449029wners")


    //NFTを開くにはこちら、ethereum://コントラクト/トークンID　　
    openNFTDialog("ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/54563776266242323944574597059366271481682546366005111285728620076447125471233")

}))

*/


  


//----------------マティ領域---------------------------------------------------------------------------------------
//-------マティ  1～4---------------
const Plane1to4_Mat = new BasicMaterial()

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
const Plane1to4_Tex = new Texture("images/test1.png")
Plane1to4_Mat.texture = Plane1to4_Tex

Plane1.addComponent(Plane1to4_Mat)
Plane2.addComponent(Plane1to4_Mat)
Plane3.addComponent(Plane1to4_Mat)
Plane4.addComponent(Plane1to4_Mat)

//-------マティ  5～8---------------
const Plane5to8_Mat = new BasicMaterial()

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
const Plane5to8_Tex = new Texture("images/test1.png")
Plane5to8_Mat.texture = Plane5to8_Tex

Plane5.addComponent(Plane5to8_Mat)
Plane6.addComponent(Plane5to8_Mat)
Plane7.addComponent(Plane5to8_Mat)
Plane8.addComponent(Plane5to8_Mat)

//-------マティ  9～12---------------
const Plane9to12_Mat = new BasicMaterial()

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
const Plane9to12_Tex = new Texture("images/test1.png")
Plane9to12_Mat.texture = Plane9to12_Tex

Plane9.addComponent(Plane9to12_Mat)
Plane10.addComponent(Plane9to12_Mat)
Plane11.addComponent(Plane9to12_Mat)
Plane12.addComponent(Plane9to12_Mat)




