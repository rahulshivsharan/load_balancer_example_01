# Loadbalancing using OpenResty for nodejs application

Implementing basic load balancing using Nginx

We are using Openresty (Nginx)

1. Create 2 nodejs application
2. Create a .conf (example loadBal.conf) file for load balancing configuration
    `load-balancer.conf`
3. Copy the `load-balancer.conf` file in path `Openresty/conf` or `nginx/conf` folder.  
4. In the same folder exists `nginx.conf` file, in this file at last line add statement to include the above .conf file, as shown below

`include  load-balancer.conf;`

5. Now start the node app 1 and node app 2 
6. Start Nginx server

```bash
start nginx
```
7. Once Nginx server starts, it acts as load-balancer, on browser hit the url 

```bash
http://localhost:8099    
```
The browser will hit internal configured two url's

```bash
http://localhost:5001
```
or

```bash
http://localhost:5002
```

8. For turning off the nginx server hit the below command

```bash
tasklist /fi "imagename eq nginx.exe"
```

9. the above command will list down process's with process Id's. Kill the process with below command

The below example is for process Id 12616 

```bash
taskkill /pid 12616 /F
```