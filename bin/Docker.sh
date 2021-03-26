echo "STARTED WITH DOCKER" 

#Update packages
echo "updating packages..." 
sudo apt update

##install others for correct docker installation
echo "Installing utils..." 
sudo apt install apt-transport-https ca-certificates curl software-properties-common

##Config GPG
echo "Configurating GPG..." 
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

#Repository of docker
echo "Downloading repository of docker..." 
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

#Update
echo "Checking updates..." 
sudo apt update

#Checking repository
echo "Checking repository..." 
apt-cache policy docker-ce

#Install docker
echo "Installing docker..." 
sudo apt install docker-ce

#Check the status
echo "Checking status service"
sudo systemctl status docker

#Set usrmod
echo "Setting usrmod"
sudo usermod -aG docker ubuntu

#Apply usrmod changes
echo "Apply usrmod changes"
su - ubuntu
