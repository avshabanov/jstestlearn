
## Load testing with ab

### REST API, /rest/post/list

```
alex$ ab -n 10000 -c 50 http://127.0.0.1:8080/rest/post/list
This is ApacheBench, Version 2.3 <$Revision: 655654 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
Completed 9000 requests
Completed 10000 requests
Finished 10000 requests


Server Software:        Jetty(7.6.8.v20121106)
Server Hostname:        127.0.0.1
Server Port:            8080

Document Path:          /rest/post/list
Document Length:        55 bytes

Concurrency Level:      50
Time taken for tests:   4.254 seconds
Complete requests:      10000
Failed requests:        0
Write errors:           0
Total transferred:      1525928 bytes
HTML transferred:       552145 bytes
Requests per second:    2350.85 [#/sec] (mean)
Time per request:       21.269 [ms] (mean)
Time per request:       0.425 [ms] (mean, across all concurrent requests)
Transfer rate:          350.32 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    2   2.7      2      24
Processing:     2   19   7.0     18     174
Waiting:        0   16   6.5     16     174
Total:          4   21   6.5     21     175

Percentage of the requests served within a certain time (ms)
  50%     21
  66%     23
  75%     24
  80%     26
  90%     29
  95%     32
  98%     36
  99%     38
 100%    175 (longest request)
```

### JSP/HTML Generation, /index.html

```
alex$ ab -n 10000 -c 50 http://127.0.0.1:8080/index.html
This is ApacheBench, Version 2.3 <$Revision: 655654 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
Completed 9000 requests
Completed 10000 requests
Finished 10000 requests


Server Software:        Jetty(7.6.8.v20121106)
Server Hostname:        127.0.0.1
Server Port:            8080

Document Path:          /index.html
Document Length:        1141 bytes

Concurrency Level:      50
Time taken for tests:   5.384 seconds
Complete requests:      10000
Failed requests:        7663
   (Connect: 0, Receive: 0, Length: 7663, Exceptions: 0)
Write errors:           0
Total transferred:      13685898 bytes
HTML transferred:       11346484 bytes
Requests per second:    1857.36 [#/sec] (mean)
Time per request:       26.920 [ms] (mean)
Time per request:       0.538 [ms] (mean, across all concurrent requests)
Transfer rate:          2482.39 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1   1.1      0      19
Processing:     1   26  19.6     24      94
Waiting:        0   26  19.5     23      91
Total:          1   27  19.6     24      96

Percentage of the requests served within a certain time (ms)
  50%     24
  66%     35
  75%     42
  80%     46
  90%     54
  95%     61
  98%     68
  99%     72
 100%     96 (longest request)
```