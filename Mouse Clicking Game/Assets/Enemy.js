
//Inspector Variables.
var numberofclicks	: int=2;
var shapecolor 		: Color[];
var explosion 		: Transform;
var additionalDestructionDelay : float;
//Private Variables.
function Start () {
}
function respawn ()
{
	var rend: Renderer;
	rend=GetComponent.<Renderer>();
	rend.enabled = false;
	randomcolor();
	yield WaitForSeconds (1);
	rend.enabled = true;
}
function Update () {

if(numberofclicks<=0)
{
if(explosion){
			Instantiate(explosion,transform.position,transform.rotation);

}
				var position: Vector3 = Vector3(Random.Range(-5.0, 5.0), Random.Range(-4.0, 4.0),5);
				respawn();
				if(transform.tag == "Enemy")
				{	
					transform.position=position;
					//Debug.Log("Hit DUDE!!");
				}
				else if(transform.tag == "Enemy1")
				{
					transform.position=position;
					//Debug.Log("Hit DUDE!!");
				}
				numberofclicks = 2;
}
}
function randomcolor () 
{
	var newcolor = Random.Range(0,shapecolor.length);
	var rend: Renderer;
	rend=GetComponent.<Renderer>();
	rend.material.color = shapecolor[newcolor];
}










