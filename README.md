
# Simple Webpack Config (with sass)

To start working with config create basic directory by command:




## Installation


```bash
  npm install
```
and create directory by command

```bash
  npx webpack --config webpack.config.create.js --env pageIndex="00"
```
## Usage/Examples
Default entry point is src/INDEX/app.js

```
npm run create
or
npx webpack --config webpack.config.create.js --env pageIndex="INDEX"
// to create html file, use it once per page
```
in next sesions use 
```
npm run start
```
To change page which you want to work, in two webpack configs is variable called pageIndex.