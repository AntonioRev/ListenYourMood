FROM node:alpine

LABEL version="2.3.2" maintainer="antoniorp1998@gmail.com"
WORKDIR /app
COPY . /app

# Environment
ENV PKGS="curl" \
    PKGS_TMP="bash ca-certificates openssl ncurses coreutils python2 make gcc g++ libgcc linux-headers grep util-linux binutils findutils"
# Basic setup, programs and init
RUN apk add -U curl bash ca-certificates openssl ncurses coreutils python2 make gcc g++ libgcc linux-headers grep util-linux binutils findutils \
    && npm install --global jest 


# Runtime
ENTRYPOINT [ "npm" ]
CMD ["run", "test"]