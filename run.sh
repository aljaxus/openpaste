echo ""
echo "-> removing openpaste container if exists"
docker kill openpaste &>/dev/null
docker rm openpaste &>/dev/null
echo "-> starting new container called openpaste"
docker run -ti --name openpaste --cpus 1 aljaxus/openpaste
echo ""