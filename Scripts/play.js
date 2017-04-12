
function Start () {

}

function Update () {

}

public function PlayGame () {

   Application.LoadLevel("floor01");
   
   }
   
public function BackToMenu () {

   Application.LoadLevel("Start");
   
   }
   
public function ExitGame () {

   Application.Quit();
   
   }