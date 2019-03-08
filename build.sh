echo ""
echo "-> pulling dependencies"
docker pull node:10
echo ""
echo "-> building aljaxus/openpaste docker image"
docker build -t aljaxus/openpaste .
echo ""
echo "-> removing openpaste container if exists"
docker kill openpaste &>/dev/null
docker rm openpaste &>/dev/null
echo "-> starting new container called openpaste"
docker run -ti --name openpaste --cpus 1 --detach --memory 128M aljaxus/openpaste