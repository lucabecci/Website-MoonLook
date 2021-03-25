echo "STARTED WITH DOCKER" 
##Check docker binaries
echo "remove and check docker binaries" 
sudo yum remove docker \
                docker-client \
                docker-client-latest \
                docker-common \
                docker-latest \
                docker-latest-logrotate \
                docker-logrotate \
                docker-engine
##install others for correct docker installation
echo "install utils for docker" 
sudo yum install -y yum-utils
##Config manager
echo "config manager" 
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

##install docker
echo "install docker" 
sudo yum install docker-ce docker-ce-cli containerd.io	
#Verify
echo "verify files" 
yum list docker-ce --showduplicates | sort -r
#Start service
echo "start service" 
sudo systemctl start docker