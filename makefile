install-docker: 
	chmod +x bin/Docker.sh
	./bin/Docker.sh
install-compose:
	chmod +x bin/Compose.sh
	./bin/Compose.sh
project:
	chmod +x bin/Project.sh
	./bin/Project.sh
run-all:
	make install-docker
	make install-compose
	make project
	echo "All process finished" 	