const cluster = require('cluster');
const os = require('os');
const express = require('express');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker process ${worker.process.pid} died. Restarting...`);
        cluster.fork();

        // clustre ks used to disturbute the instance into multiple instance  runing on same port

        // note: child process is A sub process run  indenpdentalysss
    });
} else {
    const app = express();
    //fork is creating a copy of prarent process which is called as chile process
    // Configure your Express app
    // ...
    app.get('/', (req, res) => {
        res.send(`Handled by worker ${process.pid}`);
    });

    const server = app.listen(3000, () => {
        console.log(`Worker process ${process.pid} is listening on port 3000`);
    });
}