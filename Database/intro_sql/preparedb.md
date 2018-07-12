...shell
mysql -u root -p
enter password:

mysql>

...sql
create database mytestdb;

create user myuser identified by 'mypass';

use mytestdb;

grant all privileges on mytestdb.* to myuser;

flush privileges;   
...


