REM kill open browser tabs
REM taskkill /IM microsoftedgecp.exe /FI "WINDOWTITLE eq *Blapp*PXT

REM rebuild PXT
call npm run build-pxt

REM start web app
call npm run start
