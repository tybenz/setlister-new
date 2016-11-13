setlister
==========

### Getting Started

1. Make sure you have sqlite3 installed <http://www.sqlite.org/>
2. Make sure you have sass installed <http://sass-lang.com/>
3. Install depenencies `npm install`
  * You may get an error installing the `pg` module. This is ok for a local
    development environment.
4. Run all db migrations `npm run db-migrate`
5. Start the server `npm start`
  * If you get an error that it can't find `sass`, set the environment variable
    `SASS_PATH` to your `sass` executable. Or add `sass` to your `PATH`.
6. You should see the home page at [https://localhost:4567/](https://localhost:4567/)
