function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5X99sqlI5LA":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgsongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

