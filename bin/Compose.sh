echo("STARTED WITH COMPOSE BUILD")
#Get package
echo("get binary of compose")
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.6/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
#Exect
echo("exec compose bin")
sudo chmod +x /usr/local/bin/docker-compose
#Permissions
echo("set permissions")
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose