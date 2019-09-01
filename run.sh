#!/bin/bash
#Run.sh
while [ ${#} -gt 0 ];do OPTERR=0;OPTIND=1;getopts "hdprw" arg;case "$arg" in
  h) help=true
  ;;
  d) development=true
  ;;
  p) production=true
  ;;
  r) rebuild=true
  ;;
  \?) SET+=("$1")
  ;;
  *) printf "\n./run.sh [ -d -r ] | [-h]\n\n">&2
  ;;
esac;shift;[ "" != "$OPTARG" ] && shift;done
[ ${#SET[@]} -gt 0 ] && set "" "${SET[@]}" && shift




printf "\n\n"

if [[ ! -z "$help" ]]; then
  printf "=-=-= Run.sh help page\n\n"
  printf "./run.sh [ -d -r ] | [-h]\n\n"
  printf " -d   Development mode. Starts appserver with hot-module reloading, mongodb and mongopanel.\n"
  printf "      Production mode. Builds the app and serves everything from containers.\n      Default mode if -d is not provided.\n"
  printf " -r   Rebuild. Rebuilds the containers from current source code.\n      Common use case would be when the source code was updated"
  printf " -h   Shows this help menu\n"
  printf "\n\n"
  exit
fi

if [[ ! -z "$rebuild" ]]; then
  printf "\n=-= REBUILD MODE\n"
  printf "\n= Removing containers ...\n"
  if [[ ! -z "$development" ]]; then
    docker-compose -f docker-compose.dev.yml down
  else 
    docker-compose -f docker-compose.prod.yml down
  fi
  printf "\n= Building containers ...\n"
  if [[ ! -z "$development" ]]; then
    docker-compose -f docker-compose.dev.yml build
  else 
    docker-compose -f docker-compose.prod.yml build
  fi
else 
  printf "\n=-= RESUME MODE\n"
  printf "\n= Stopping containers ...\n"
  if [[ ! -z "$development" ]]; then
    docker-compose -f docker-compose.dev.yml stop
  else 
    docker-compose -f docker-compose.prod.yml stop
  fi
fi

printf "\n\n"
if [[ ! -z "$development" ]]; then
  printf "\n\n=-=-= RUNNING DEVELOPMENT BUILD\n\n"
  docker-compose -f docker-compose.dev.yml up
else 
  printf "\n\n=-=-= RUNNING PRODUCTION BUILD\n\n"
  docker-compose -f docker-compose.prod.yml up -d
fi
