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

