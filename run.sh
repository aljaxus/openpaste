echo ""
echo "-> removing openpaste container if exists"
docker kill openpaste &>/dev/null
docker rm openpaste &>/dev/null
echo "-> starting new container called openpaste"
docker run -ti --name openpaste -p 8101:8080 -v data:/var/app/data aljaxus/openpaste
echo ""
docker ps
echo ""
echo ""