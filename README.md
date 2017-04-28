# Getting Started

## first thing
```
git clone https://github.com/cdiddy77/blapp.git
cd blapp
npm install
cd client/mobile
npm install
cd ../..
```

## to run development server:
```
npm run start
```
	
## to run production server (rare):
```
npm run build
npm run build-server
node server.js
```
	
## to run mobile client:
```
cd client/mobile
npm run {ios|android}
npm run build -- --watch
```
### in new shell:
```
npm run start
```
	
## to write server code 
```
code .
Run Build Task (tsc -p server -w)
```
	
## to write web client code
```
code client/web
Run Build Task (tsc -p client/web -w -noEmit)
```
	
## to write mobile client code
```
code client/mobile
Run Build Task (tsc -p client/mobile -w -noEmit)
```

## before checking in:
```
  npm run build
  npm run build-server
```

Thanks!
