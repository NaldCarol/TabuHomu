var dis:float;//偵測Capsule(玩家本身)與book間距離
var closeDis:float;//距離變數，用於作為開關變數是否開啟判斷用，可由外部自行調整
var isClose:boolean;//開關變數，用於function OnMouseDown是否起作用用
var player:Transform;//玩家本身,用於判斷是誰與book的距離
var book:GameObject;
var guiBookamount:UI.Text;

function Start () {

}

function Update () {
	dis = Vector3.Distance(transform.position,player.position);
	if(dis <= closeDis){
		isClose = true;
	}
	else if(dis > closeDis){
	    isClose = false;
	}
}

 function OnMouseDown(){
 	if(isClose== true){
 		
 		Destroy(book);
 		print("take");
 		GameManager2.book=GameManager2.book+1;
 		guiBookamount.text="x"+GameManager2.book;
 	}
 	
 	else if(isClose== false){
 		
 		print("cannot take");
 	}
 }