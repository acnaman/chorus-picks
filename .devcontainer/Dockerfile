FROM node:10.17-slim

# update all
RUN apt-get update && apt-get install -y --no-install-recommends

# install git
RUN apt-get install -y git python procps yarn build-essential

# install angular cli, ionic, firebase-tools
RUN npm install -g @angular/cli@8.3.6

# make work directory
RUN mkdir /workspace
WORKDIR /workspace

# yarn install
RUN yarn install

# Clean up
RUN apt-get autoremove -y \
    && apt-get clean -y
