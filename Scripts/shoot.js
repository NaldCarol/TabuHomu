// 射子彈的程式碼, 此程式要放在一個新增的Script裡，然後再放在膠囊的GameObject裡。
var FirePoint : Transform; //設定射撃點的transform 
var Bullet : Rigidbody; //要被射出的bullet,其物件型態要為rigidbody 
var BulletCnt : int = 30; //可射擊的Bullet總數量
var BulletSpeed : float = 10;
static var currBullet : int; //目前bullet的數量
static var cloneData : Rigidbody;
//var object1 : Transform;

var guiBulletNum:UI.Text;
var guiBlood:UI.Image;
var guiScore:UI.Text;

static var FPS_Score:float;
static var FPS_HP:int;

function Start() {
currBullet=BulletCnt;
FPS_Score= 0;
FPS_HP=180;
}

function Update () {
if(Input.GetButtonDown("Fire2")){
if(currBullet>0) {
//複製有rigidbody的遊戲物件bullet, 依據目前FinrePoint(即攝影機)的位置與旋轉角度 
// FirePoint.position + Vector3(0,1,0) 則是讓bullet發射的起始點在高度上增加
var clone : Rigidbody = Instantiate(Bullet, FirePoint.position + Vector3(0,1,0), FirePoint.rotation);
//給予複製的bullet有往前移動的逮度 
clone.velocity = transform.TransformDirection (Vector3.forward * BulletSpeed*1);
currBullet -= 1;
}
}
guiBulletNum.text="Bullet Left: "+currBullet;
guiBlood.rectTransform.sizeDelta= Vector2(FPS_HP, 30);
guiScore.text="x"+FPS_Score;

if(FPS_HP<=0){
        Application.LoadLevel("gameover");
}
}