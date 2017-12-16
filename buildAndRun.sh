#!/bin/sh
mvn clean package && docker build -t com.mycompany/AvesProject .
docker rm -f AvesProject || true && docker run -d -p 8080:8080 -p 4848:4848 --name AvesProject com.mycompany/AvesProject 
