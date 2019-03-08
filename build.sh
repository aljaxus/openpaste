echo ""
echo "-> pulling dependencies"
docker pull node:10
echo ""
echo "-> building aljaxus/openpaste docker image"
docker build -t aljaxus/openpaste .
echo ""
echo "Successfully built the docker image"
read -p "Press any key to run the container - press ctrl+c to exit the script `echo $'\n '`"
echo ""
./run.sh