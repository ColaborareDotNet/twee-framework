module.exports = {
    "extensions": {
        "Twee Basic HTTP Parsers": {
            "module": "twee-extensions/http/parsers"
        },

        "Twee Response Formats": {
            "module": "twee-extensions/http/responses"
        },

        "Twee Winston Logger": {
            "module": "twee-extensions/logging/winston"
        },

        "Twee Custom Headers": {
            "module": "twee-extensions/http/headers/requested-with"
        },

        "Twee Static Files Serving": {
            "module": "twee-extensions/http/static"
        },

        "Twee Twee Session": {
            "module": "twee-extensions/http/session",
            "disabled": true
        },

        "Twee Twee Compressor": {
            "module": "twee-extensions/http/compressor"
        },

        "Twee View Engine": {
            "module": "twee-extensions/view/engine/swig"
        },

        "Twee View Helpers": {
            "module": "twee-extensions/view/helpers"
        },

        "Twee Twee Passport": {
            "module": "twee-extensions/http/session/passport",
            "disabled": true
        }
    },

    "options": {
        "compress": {
            "html": true,
            "gzip": true
        },

        "passport": {
            "enabled": true
        },

        "staticFiles": {
            "directory": "public"
        },

        "logging": {
            "winston": {
                "accessFile": "var/log/access.json",
                "exceptionsFile": "var/log/exceptions.json",
                "exitOnError": false,
                "consoleLogging": false,
                "consoleLoggingOptions": {
                    "colorize": true,
                    // optional: control whether you want to log the meta data about the request (default to true)
                    "meta": true,
                    "msg": "HTTP {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}",
                    // Use the default Express/morgan request formatting, with the same colors. Enabling this will override any msg and colorStatus if true.
                    // Will only output colors on transports with colorize set to true
                    "expressFormat": true,
                    "colorStatus": true
                }
            }
        },

        "favicon": {
            "file": "public/favicon.ico"
        },

        "bodyParser": {
            "urlencoded": {
                "extended": false
            }
        },

        "session": {
            "enabled": true,
            "options": {
                "secret": "expR3ssS3cR3TASD:Fwfk%$^$%&*&",
                "cookie": {
                    "secure": false,
                    "maxAge": 999999999999,
                    "signed": true,
                    "path": "/"
                },
                "resave": true,
                "saveUninitialized": true
            }
        },

        "viewEngine": {
            "swig": {
                "engineExtension": "html",
                "options": {
                    "cache": null
                }
            },
            "jade": {
                "engineExtension": "jade",
                "options": {
                    "pretty": true,
                    "compileDebug": false
                }
            },
            "disabled": false
        },

        "cache": {
            "redis": {
                "host": "127.0.0.1",
                "port": 6379
            },
            "memcache": {}
        }
    }
};