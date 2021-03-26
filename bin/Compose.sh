echo "STARTED WITH COMPOSE BUILD" 

#Get package
echo "Get binary of compose" 
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.6/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

#Permissions
echo "Permissions compose bin" 
sudo chmod +x /usr/local/bin/docker-compose
