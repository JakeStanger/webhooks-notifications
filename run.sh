isPlaying=$(cat isPlaying)

if [ $1 == "toggle" ]; then
	if [ $isPlaying == "0" ]; then
		command="play"
		echo 1 > isPlaying
	else
		command="pause"
		echo 0 > isPlaying
	fi
else
	command=$1
fi
TOKEN=F5eCpRV8FTwDxxygSrjz PLAYER=e5hplltdxeytlqawpq1if6rj OPTION=$command node index.js
