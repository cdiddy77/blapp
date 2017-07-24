# Getting Started

## prereqs
```
Install git (https://git-scm.com/download/win)
Install node.js (http://www.nodejs.org) (Make sure node.exe is in your PATH, install should have done this for you)
Install JDK (http://www.oracle.com/technetwork/java/javase/downloads/index.html)
Install Android SDK Build tools 23.0.1 (for mobile client development/testing only: https://developer.android.com/studio/index.html)
Install Visual Studio Code (https://code.visualstudio.com/Download)
```
## first thing
```
git clone https://github.com/cdiddy77/pxt.git
cd pxt
npm install -g jake
npm install -g typings
npm install
typings install
jake
npm install -g pxt
cd ..
git clone https://github.com/cdiddy77/blapp.git
cd blapp
npm install
cd client/mobile
npm install
cd ../..
npm link ../pxt

(If the first npm install fails with an error about not being able to find the python executable then run: "npm install --global --production windows-build-tools."
then set your PYTHON env variable using: setx PYTHON "%USERPROFILE%\.windows-build-tools\python27\python.exe")

(Also set your JAVA_HOME env var i.e. setx JAVA_HOME "c:\Program Files\Java\jdk1.8.0_131")
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
npm run build -- --watch
npm run {ios|android}
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
