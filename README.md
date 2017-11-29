# Getting Started

## prereqs
```
Install git (https://git-scm.com/download/win)
Install node.js (http://www.nodejs.org) (Make sure node.exe is in your PATH, install should have done this for you)
Install Visual Studio Code (https://code.visualstudio.com/Download)
```
## first thing
```
git clone https://github.com/cdiddy77/blapp.git
cd blapp
npm install

```

## to run development server:
```
npm run start
```
	
## to enable uploading assets via development server:
```
node server.js
```	
## to write server code 
```
tsc -p server -w
```
	
## to write web client code
```
code client/web
Run Build Task (tsc -p client/web -w -noEmit)
```
	
## before checking in:
```
  npm run build
  npm run build-server
```

Thanks!
