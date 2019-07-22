"use strict";
import Hapi from '@hapi/hapi';

class Server {
    async init() {
        const server = Hapi.server({
            port: 3000,
            host: 'localhost'
        });
    
        server.route({
            method: 'GET',
            path:'/',
            handler: (request, h) => {
    
                return 'Hello World!';
            }
        });
    
        await server.start();
        console.log('Server running on %s', server.info.uri);
    }


  }
  
  module.exports = Server;
  