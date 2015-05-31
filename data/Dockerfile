FROM centos:centos7

#RUN mkdir /tmp
RUN mkdir /nodejs
#RUN yum install -y tar
#RUN wget http://nodejs.org/dist/v0.10.30/node-v0.10.30.tar.gz
#RUN wget http://nodejs.org/dist/v0.10.30/node-v0.10.30-linux-x64.tar.gz
#RUN yum install -y make tar gcc gcc-c++
#RUN tar -zxf /tmp/node-v0.10.30-linux-x64.tar.gz -C /usr/local
RUN yum install -y yum install http://mirrors.ustc.edu.cn/epel/7/x86_64/e/epel-release-7-5.noarch.rpm
RUN yum install -y nodejs npm --enablerepo=epel
ADD ./src /nodejs

WORKDIR /nodejs RUN npm install 
WORKDIR /nodejs RUN node index.js
ENTRYPOINT node /nodejs/index.js

EXPOSE 8080


MAINTAINER xiaoshao, zengwei19861029@163.com