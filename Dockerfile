IFROM node:6

MAINTAINER Pedro Mendes <pedrolopesme@gmail.com> 

# Module dir
RUN mkdir -p /usr/src/jsplay
WORKDIR /usr/src/jsplay

# Instaling module dependencies
COPY package.json /usr/src/jsplay/
RUN npm install

# ./node_modules/jasmine-node/bin/jasmine-node --verbose --junitreport --noColor spec/*

# Bundle module source
COPY . /usr/src/jsplay

CMD [ "npm test" ]