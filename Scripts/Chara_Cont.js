//角色移動控制
var WalkSpeed : float = 3.0;
var RunSpeed : float = 3.0;
var JumpSpeed : float = 8.0;
var Gravity : float = 20.0;
var RotateSpeed : float =5.0;
var MoveDirection : Vector3 = Vector3.zero;
function Update()
{
//宣告主角控制器為自身的控制器元件。 
var Viking : CharacterController = GetComponent(CharacterController);
//如果主角在地面時
if (Viking.isGrounded)
{
//主角移動方向的Z軸數值，由輸入設定中的垂直鍵(WS鍵或上下鍵)來進行輸入。
//主角移動方向由自身座標轉換為世界座標(維持旋轉後的控制方向正確)。
//主角移動方向的量乘以行走速度。
MoveDirection = Vector3(0, 0,Input.GetAxis("Vertical"));
MoveDirection = transform.TransformDirection(MoveDirection); //將物件座標轉向成世界座標的移動
MoveDirection *= WalkSpeed;
//以輸入設定中的水平鍵(AD鍵或左右鍵)乘以旋轉速度來旋轉自身的Y軸。
transform.Rotate(0, Input.GetAxis ("Horizontal") * RotateSpeed, 0);
//如果按下跳躍鍵 --> 主角移動方向的Y軸等於跳躍速度。
if (Input.GetButton ("Jump"))
{
MoveDirection.y = JumpSpeed;
}
}
//主角移動方向的Y軸數值，每秒持續減去重力值。主角移動方向的Y軸數值，每秒持續減去重力值. Time.deltaTime能讓每台不同速度FPS的電腦有相同的達行速度
MoveDirection.y -= Gravity * Time.deltaTime;
//每秒持續移動主角 。
Viking.Move(MoveDirection * Time.deltaTime);
}
@script RequireComponent(CharacterController) // 呼叫一個名為 CharacterController的元件

// 操作一個可移動的角色碰撞到一個gameObject時, 此gameObject即會消失
// 底下段程式是放在可以控制角色移動的GameObject裡, 
//被碰撞的gameObject必需要有collider, 而此例被碰撞gameObject的tag名稱為 fish



function OnControllerColliderHit(hit: ControllerColliderHit) {
print("OnControllerColliderHit ON");

if(hit.gameObject.tag == "sek") // 角色碰撞到tag 名稱為fish的 gameObject後, 刪除被碰撞物件
{ 
Destroy(hit.gameObject); //刪除被碰撞物件
}

if(hit.gameObject.tag == "cake") // 角色碰撞到tag 名稱為fish的 gameObject後, 刪除被碰撞物件
{ 
Destroy(hit.gameObject); //刪除被碰撞物件
shoot.currBullet= shoot.currBullet+2;
}

if(hit.gameObject.tag == "ghost") // 角色碰撞到tag 名稱為fish的 gameObject後, 刪除被碰撞物件
{ 
//Destroy(hit.gameObject); //刪除被碰撞物件
shoot.FPS_HP = shoot.FPS_HP-60;

print("Ghost Hit ON");

}



}