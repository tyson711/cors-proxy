const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3030;
const originBlacklist = [];
const originWhitelist = [];
const cors_proxy = require("./lib/cors-anywhere");
cors_proxy
  .createServer({
    originBlacklist: originBlacklist,
    originWhitelist: originWhitelist,
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: [
      "cookie",
      "cookie2",
      "x-heroku-queue-wait-time",
      "x-heroku-queue-depth",
      "x-heroku-dynos-in-use",
      "x-request-start"
    ],
    redirectSameOrigin: true,
    httpProxyOptions: {
      xfwd: false
    }
  })
  .listen(port, host, function() {
    console.log("Running CORS Proxy on " + host + ":" + port);
  });
