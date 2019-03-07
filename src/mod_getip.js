/**
 * Created by alokguha on 25/09/15.
 * Cloned from repo https://github.com/aloksguha/myip
 */
'use strict'

const ni = require('os').networkInterfaces()

module.exports = {
  getLocalIP4: () => {
    let ipAddress = [];
    for(let key in ni){
      for(let index in ni[key]){
        if(ni[key][index].family === 'IPv4' && !ni[key][index].internal){
          ipAddress.push(ni[key][index].address);
        }
      }
    }
    if(ipAddress.length > 1){
      return ipAddress[Math.floor(Math.random() * ((ipAddress.length - 1) - 0 + 1)) + 0];
    }else if(ipAddress.length == 1){
      return ipAddress[0];
    }else{
      return '127.0.0.1';
    }

  },
  getLocalIP6: () => {
    let ipAddress = [];
    for(let key in ni){
      for(let index in ni[key]){
        if(ni[key][index].family === 'IPv6' && !ni[key][index].internal){
          ipAddress.push(ni[key][index].address);
        }
      }
    }
    if(ipAddress.length > 1){
      return ipAddress[Math.floor(Math.random() * ((ipAddress.length - 1) - 0 + 1)) + 0];
    }else if(ipAddress.length == 1){
      return ipAddress[0];
    }else{
      return 'fc00::/7';
    }

  }
}
