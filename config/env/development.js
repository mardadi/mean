'use strict';

module.exports = {
    db: "mongodb://mardadi:H0tC0ffee01@troup.mongohq.com:10068/dev-gobomba",
    app: {
        name: "GoBomba! - Learn, Jam, Live!"
    },
    facebook: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
        clientID: "CONSUMER_KEY",
        clientSecret: "CONSUMER_SECRET",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    google: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    linkedin: {
        clientID: "API_KEY",
        clientSecret: "SECRET_KEY",
        callbackURL: "http://localhost:3000/auth/linkedin/callback"
    }
}