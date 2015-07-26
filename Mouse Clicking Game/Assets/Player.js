//Player Script

//Inspector Variables.
var respawntime		: float=5;
var raydistance : float=100.0;
//Private Variables.

function Start () {

}

function Update ()
{
	//use mouse button to select on Go in the Screen
		if(Input.GetMouseButtonDown(0))
		{
			//Debug.Log("Pressed left click.");
			var hit :RaycastHit;
			var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			
			if(Physics.Raycast(ray,hit,raydistance))
			{
				var position: Vector3 = Vector3(Random.Range(-5.0, 5.0), Random.Range(-4.0, 4.0),5);
				if(hit.transform.tag == "Enemy")
				{	
					//hit.transform.position=position;
					//Debug.Log("Hit DUDE!!");
					var enemyscript = hit.transform.GetComponent(Enemy);
					enemyscript.numberofclicks -= 1;
					
				}
				else if(hit.transform.tag == "Enemy1")
				{
					//hit.transform.position=position;
					//Debug.Log("Hit DUDE!!");
					var enemyscript1 = hit.transform.GetComponent(Enemy);
					enemyscript1.numberofclicks-=2;
				}
				else
				{
					Debug.Log("Miss");
				}
			}
		}
}