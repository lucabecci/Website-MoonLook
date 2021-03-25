install-docker: 
./bin/Docker.sh
install-compose:
./bin/Compose.sh
project:
./bin/Project.sh
run-all:
	make install-docker
	make install-compose
	make project
	echo("All process finished")	