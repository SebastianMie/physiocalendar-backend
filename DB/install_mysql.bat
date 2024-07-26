@echo off
set MYSQL_VERSION=mysql-8.0.26-winx64
set MYSQL_INSTALLER=%MYSQL_VERSION%.msi
set MYSQL_ROOT_PASSWORD=your_root_password
set MYSQL_DB_NAME=physiokalendar
set MYSQL_USER=physiouser
set MYSQL_USER_PASSWORD=password

:: Download MySQL if not already downloaded
if not exist %MYSQL_INSTALLER% (
    echo Downloading MySQL...
    powershell -Command "Invoke-WebRequest -Uri https://dev.mysql.com/get/Downloads/MySQL-8.0/%MYSQL_INSTALLER% -OutFile %MYSQL_INSTALLER%"
)

:: Install MySQL
echo Installing MySQL...
msiexec /i %MYSQL_INSTALLER% /quiet /norestart INSTALLDIR="C:\Program Files\MySQL\MySQL Server 8.0" /qn

:: Wait for installation to complete
timeout /t 60

:: Start MySQL service
net start MySQL80

:: Configure MySQL
echo Configuring MySQL...
"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql" -u root -p%MYSQL_ROOT_PASSWORD% -e "CREATE DATABASE %MYSQL_DB_NAME%;"
"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql" -u root -p%MYSQL_ROOT_PASSWORD% -e "CREATE USER '%MYSQL_USER%'@'localhost' IDENTIFIED BY '%MYSQL_USER_PASSWORD%';"
"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql" -u root -p%MYSQL_ROOT_PASSWORD% -e "GRANT ALL PRIVILEGES ON %MYSQL_DB_NAME%.* TO '%MYSQL_USER%'@'localhost';"
"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql" -u root -p%MYSQL_ROOT_PASSWORD% -e "FLUSH PRIVILEGES;"

echo MySQL installation and configuration completed.
