# Server Side Node Presentation

## Summary
A campfire talk demonstrating Server Side NodeJS, including a SSR React Demo.

## Sections
1. [Deck](./packages/00-deck)
2. [Stdlib HTTP Hello World](./packages/1.0-stdlib-http)
   - introduction to `http` servers in node
3. [Stdlib HTTP w/ Custom Middleware App](./packages/1.1-with-middleware)
   - build a middleware stack for `http` servers from scratch
   - the basis of all async `http` handlers in nodejs
4. [Stdlib HTTP w/ Custom Middleware App + Routing](./packages/1.2-with-routing)
   - add basic routing to your middleware app
5. [Express](./packages/2.0-express)
   - basic express hello world
6. [Express Async Patterns](./packages/2.1-express-async-patterns)
   - history of async patterns
   - callbacks -> promises -> async/await
7. [Koa](./packages/2.2-koa)
   - "next gen" server framework
   - basic express hello world
8. [Todos API Server w/ sqlite](./packages/3.0-express-api-server)
   - build an express api server with typeorm and sqlite
   - use of routing and all http methods
9. [SSR React Todos App](./packages/3.1-ssr-react)
   - build a SSR Todos App in React and express

## Install
```sh
yarn && yarn lerna boostrap
```

## View the Deck
```sh
yarn serve:deck
# > http://localhost:8080
```

## Starting an Example
By default all examples listen on port 3000, except the `express-api-server` app.
```sh
cd ./packages/<example-folder>
yarn start
# > http://localhost:3000
```

## Starting the React SSR Demo
1. Start the API Server
```sh
cd ./packages/3.0-express-api-server
yarn start
# > http://localhost:9000
```
2. Start the `ssr-react` server
```sh
cd ./packages/3.1-ssr-react
yarn start
# > http://localhost:3000
```
3. Visit `http://localhost:3000`.


## Technology Demonstrated
- stdlib http
- express
- koa
- typeorm
- razzle
- typescript

## Tooling
- codesurfer-deck
- babel w/ typescript
- lerna

