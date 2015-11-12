#! /usr/bin/env node

process.on("SIGPIPE", process.exit);

var stdin = process.openStdin();


var data = '';

stdin.on('data', function(chunk) {
  data += chunk;
});

stdin.on('end', function() {
  console.log(data.replace(/([a-z0-9])([A-Z])/g, function(match, p1, p2, offset, str){
    return p1 + '_' + p2.toLowerCase();
  }));
});
