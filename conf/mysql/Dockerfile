FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root

COPY ./cnf/mysql.cnf /etc/mysql/my.cnf

COPY ./scripts /docker-entrypoint-initdb.d

EXPOSE 3306

CMD ["mysqld"]
