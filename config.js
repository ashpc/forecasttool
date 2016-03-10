//if enviroment exist load config env vars, otherwise use dev config file
if(process.env.NODE_ENV) module.exports = loadConfigFromEnv();
else module.exports = require('./config-dev.js');


//.......Use Enviroment Variables to Load Config.........
function loadConfigFromEnv() {
  var auth = JSON.parse(process.env.AUTH_SERVICE);
  var heartMon = JSON.parse(process.env.HEART_MONITOR);
  var secret = process.env.SESSION_SECRET;
  var db, configFromEnv;

  //if an outside DB is defined use it otherwise use the bound CF instance
  if (process.env.DB) db = JSON.parse(process.env.DB);
  else db  = JSON.parse(process.env.VCAP_SERVICES)['p-mysql'][0].credentials;


  configFromEnv = {
    auth: {
      host: auth.host,
      port: auth.port,
      path: auth.path,
      method: auth.method
    },
    secret: secret,
    knex: {
      client: 'mysql',
      connection: {
        host : db.hostname,
        user :  db.username,
        password: db.password,
        database: db.name,
        multipleStatements: true
      },  
    },
    heartMon: heartMon
  };

  return configFromEnv;
}



