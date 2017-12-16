FROM airhacks/glassfish
COPY ./target/AvesProject.war ${DEPLOYMENT_DIR}
