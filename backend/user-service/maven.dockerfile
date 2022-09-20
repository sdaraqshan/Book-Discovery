FROM openjdk:17-alpine
WORKDIR /tmp
COPY ./target/*.jar  /tmp/execute.jar
EXPOSE 8004
ENTRYPOINT ["java", "-jar", "execute.jar"]