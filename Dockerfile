FROM ubuntu
RUN apt-get update 
RUN apt-get install nano
RUN apt-get install -yq nodejs
RUN apt-get install -yq  npm
#RUN  npm init
RUN npm install express --save
RUN npm install cassandra-driver --save
RUN apt-get install -yq openssh-server
COPY open.js /home/
EXPOSE 80 8080 11900

