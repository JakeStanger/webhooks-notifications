isPaused=$(python ~/plexControl/isPaused.py)

if [ $1 == "toggle" ]; then
	if [ $isPaused == "True" ]; then
		command="play"
		#echo 1 > ~/plexControl/isPlaying
	else
		command="pause"
		#echo 0 > ~/plexControl/isPlaying
	fi
else
	command=$1
fi
TOKEN=F5eCpRV8FTwDxxygSrjz PLAYER=e5hplltdxeytlqawpq1if6rj OPTION=$command node ~/plexControl/index.js
