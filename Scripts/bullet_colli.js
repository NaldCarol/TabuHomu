var cake: GameObject;
var ghostshoot: GameObject;
 
  
//放在子彈裡的程式碼
function OnCollisionEnter(hit: Collision) {
if(hit.gameObject.tag == "ghost")
{ 
// hit.collider.renderer.material.color = Color.red; 
//hit.collider.renderer.material.color = Color(1,1,0,1); // 改變被碰撞物的顏色
//Destroy(hit.gameObject); // 刪除被撞擊的GameObject
Destroy(gameObject); //刪除GameObject本身

shoot.FPS_Score=shoot.FPS_Score+0.2;

Instantiate(cake, hit.gameObject.transform.position, hit.gameObject.transform.rotation);
Instantiate(ghostshoot, hit.gameObject.transform.position, hit.gameObject.transform.rotation);
}
}