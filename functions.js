/**************************************************************************************************************/

/***********************************    ������� ��� ���� "���� �����"    **************************************/

/* 30.09.2017 */
/**************************************************************************************************************/
var ammo_start; // ��������� ���������� �����������
var killCount;
var isStart = false;

function getRand(min, max)  // ��������� ���������� �����
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  

var table = document.getElementById('bitches');  // ������� ������������ �������
	
	document.getElementById('bitches').onclick = function(e) 
	{ // ������ ����������

	var event = e || window.event, // �������� event.target 
      target = event.CurrentTarget || event.srcElement; 
	if( isStart == true)
	{
	if (target.tagName == 'IMG' )
	{ //���������, ������ � ����� ��� ���
		{
		killCount++; // ����� �����
		Shot();  
		PlaySnd('sounds/death.wav'); 
		target.style.backgroundImage = 'url(images/none.png)';
		}
	}
	else
	{
		Shot(); 
	}
	}
	};
  

 function Shot()
 {
	 if (isStart == true)
	 {
			PlaySnd('sounds/shot.mp3'); // ������������� ���� ��������
			ammo_start--; // ������� ������
			infoUpdate(); // ��������� ����������
	 }
	 else
	 {
		 alert("������� ����!");
	 }
 }
 
 function PlaySnd(path)  // ������������ ����� (path) - ���� � �����
 {
	 var snd = new Audio();
	 snd.src = path;
	 snd.autoplay = true;
 }
 
 // ����� ����
 function Start()
 {
	 var S=prompt("������, ��� ��� �����?","");
	 isStart = true; //���� ��������
	 PlaySnd('sounds/reload.mp3'); // �������� ������
	 ammo_start = 40; // ���� ��������� ��������
	 killCount = 0; // �������� ������� ������ ������
	 infoUpdate() // ��������� ����������
	 CreateBums(); // ������� ������
 }
 
 function infoUpdate()
 {
	document.getElementById('killCount').innerHTML = '����� ������:' + killCount; 
	document.getElementById('ammo_count').innerHTML = '����������:' + ammo_start;
    if(ammo_start == 0)
	{
		PlaySnd('sounds/no_ammo.wav');
		isStart = false;
	}
 }
 