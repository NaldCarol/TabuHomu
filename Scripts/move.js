var moveState:int;
var JumpSpeed : float = 8.0;
var MoveDirection : Vector3 = Vector3.zero;

function Start () {

}

function Update () {
    var x:float = Input.GetAxis("Vertical");
    var y:float = Input.GetAxis("Horizontal");

    transform.Translate(y*0.1,0,x*0.1);
    //以上為按鍵移動所需之程式碼
    
    //以下為判斷moveState用 若=1就會往前，=0則停止
    switch(moveState){
        case 1:
            transform.Translate(0,0,0.05);//前移
        break;
        
        case 2:
            transform.Translate(0,0,-0.05);//後移
        break;
        
        case 3:
            transform.Rotate(0,-1,0);//旋轉
        break;
        
        case 4:
            transform.Rotate(0,1,0);//旋轉
        break;
        
        case 5:
            transform.Translate(0,0.5,0); //JUMP
        break;
        
        case 6:
            transform.Translate(-0.05,0,0);
        break;
        
        case 7:
            transform.Translate(0.05,0,0);
        break;
    
    }
    


}

function MoveFoward () {
moveState=1;
}

function MoveBack () {
moveState=2;
}

function TurnRight () {
moveState=3;
}

function TurnLeft () {
moveState=4;
}

function Jump1 () {
moveState=5;
}

function MoveLeft () {
moveState=6;
}

function MoveRight () {
moveState=7;
}

function Stop () {
moveState=0;
}

