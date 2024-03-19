build docker
`docker build .`

list docker image
`docker image ls`

delete docker image
`docker image rm [image id]`

build with repository name
`docker build -t [image name] .`

run the image and give it name
`docker run -d --name [name] [image name]`

check process run container
`docker ps `

kill run process and force it
`docker rm [name] -f`

run and forward the port
`docker run -p [port outside]:[port inside] -d --name [name] [image name]`

interactive mode
`docker exec -it [name] bash`

sync file with volume
`docker run -v [pathtofolderonlocation (%cd%, ${pwd}, $(pwd))]:[pathtofolderoncontainer] -p [port outside]:[port inside] -d --name [name] [image name]`

show logs on run
`docker logs [name]`

anonymous volume hack
`docker run -v [pathtofolderonlocation (%cd%, ${pwd}, $(pwd))]:[pathtofolderoncontainer] -v /app/node_modules -p [port outside]:[port inside] -d --name [name] [image name]`

Read-Only bind mount
`docker run -v [pathtofolderonlocation (%cd%, ${pwd}, $(pwd))]:[pathtofolderoncontainer]:ro -v /app/node_modules -p [port outside]:[port inside] -d --name [name] [image name]`

overwrite enviroment variable when run
`docker run -v [pathtofolderonlocation (%cd%, ${pwd}, $(pwd))]:[pathtofolderoncontainer]:ro -v /app/node_modules --env [key=value] -p [port outside]:[port inside] -d --name [name] [image name]`

check enviroment variable on run
`docker exec -it [name] bash`
`printenv`

load .env file
`docker run -v [pathtofolderonlocation (%cd%, ${pwd}, $(pwd))]:[pathtofolderoncontainer]:ro -v /app/node_modules --env-file [path to env (./.env)] -p [port outside]:[port inside] -d --name [name] [image name]`

list some volumes
`docker volume ls`

delete volume
`docker volume rm [volume name]`

delete all volume
`docker volume prune`

delete volume when delete run container
`docker rm [name] -fv`

use docker-compose.yml file
`docker-compose up -d`

down the compose
`docker-compose down -v`

force build image with docker compose
`docker-compose -up --build -d`

run docker compose dev & prod compose
`docker-compose -f docker-compose.yml -f [compose file to overwrite (docker-compose.dev.yml)] up -d`

then down it
`docker-compose -f docker-compose.yml -f [compose file to overwrite (docker-compose.dev.yml)] down -v`

connect to mongodb database container
`mongosh -u [username] -p [password]`

connect it when exec
`docker exec -it [name] mongosh -u [username] -p [password]`

delete without run container, open run to execpt it, then prune

show more detail of container
`docker inspect [name]`

list the networks
`docker network ls`

show information of spesific network
`docker network inspect [network name]`

run spesific service
`docker-compose -f docker-compose.yml -f [compose file to overwrite (docker-compose.dev.yml)] up -d --no-deps [service name]`

open redis cli
`docker exec -it [name] redis-cli`

scaling app
`docker-compose -f docker-compose.yml -f [compose file to overwrite (docker-compose.dev.yml)] up -d --scale [service name]=[number of scale]`

build and renew anon volume
`docker-compose -f docker-compose.yml -f [compose file to overwrite (docker-compose.dev.yml)] up -d --build -V`

spesific build image
`docker-compose -f docker-compose.yml -f [compose file to overwrite (docker-compose.dev.yml)] up -d --build [name]`

spesific build image without dependency
`docker-compose -f docker-compose.yml -f [compose file to overwrite (docker-compose.dev.yml)] up -d --build --no-deps [name]`

force the build image
`docker-compose -f docker-compose.yml -f [compose file to overwrite (docker-compose.dev.yml)] up -d --force-recreate [name]`

force the build image without dependency
`docker-compose -f docker-compose.yml -f [compose file to overwrite (docker-compose.dev.yml)] up -d --force-recreate --no-deps  [name]`

push docker image to docker hub
`docker push [image name]`

change docker image name
`docker image tag [current name] [new name]`

build image without run it
`docker-compose -f docker-compose.yml -f [compose file to overwrite (docker-compose.dev.yml)] build`

build spesific image
`docker-compose -f docker-compose.yml -f [compose file to overwrite (docker-compose.dev.yml)] build [name]`

push image into docker hub
`docker-compose -f docker-compose.yml -f [compose file to overwrite (docker-compose.dev.yml)] push`

push spesific image into docker hub
`docker-compose -f docker-compose.yml -f [compose file to overwrite (docker-compose.dev.yml)] push [name]`
