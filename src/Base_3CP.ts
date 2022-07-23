
//―――――――――――OBJ ―――――――――――――――――――――――――――――――――――――――――
//―――――――――OBJ_Bill_All―――――――――――――




const Bill_All = new Entity()
Bill_All.addComponent(new GLTFShape("models/Cylinder_DCL_gltf.gltf"))   
Bill_All.addComponent(new Transform({
    position: new Vector3(7.826, 0.02, 7.799),
    rotation: new Quaternion(0, 0, 0.008726535, 0.9999619),
    scale: new Vector3(1, 1, 1)
}))

engine.addEntity(Bill_All)


