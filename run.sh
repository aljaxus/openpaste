echo ""
echo "-> removing openpaste container if exists"
docker kill openpaste &>/dev/null
docker rm openpaste &>/dev/null
echo "-> starting new container called openpaste"
docker run -ti --name openpaste --cpus 1 -p 8101:8101 aljaxus/openpaste
echo ""
docker ps
echo ""
echo ""