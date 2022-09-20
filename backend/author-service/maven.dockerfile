FROM openjdk:17-alpine
WORKDIR /tmp
COPY ./target/*.jar  /tmp/execute.jar
EXPOSE 8003
ENTRYPOINT ["java", "-jar", "execute.jar"]