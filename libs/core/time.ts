/**
 * Basic functionalities.
 */
//% color=30 weight=89 icon="\uf017"
namespace Time {
    /**
     * After a certain amount of time, take some actions
     * @param ms number of milliseconds to wait before executing, eg: 500
     */
    //% weight=90
    //% blockId=set_timeout
    //% block="After %ms|milliseconds"
    //% handlerStatement=true
    export function afterTime(
        ms: number,
        body: ()=>void): void {
        afterTimeImpl(ms, body);
    }
    /**
     * Every so often, take some actions
     * @param ms number of milliseconds to wait before executing, eg: 500
     */
    //% weight=80
    //% blockId=set_interval
    //% block="Every %ms|milliseconds"
    //% handlerStatement=true
    export function everyTime(
        ms: number,
        body: ()=>void): void {
        everyTimeImpl(ms, body);
    }

    /**
     * Cause the application to reset
     */
    //% weight=70
    //% blockId=reset_application
    //% block="Reset Application"
    export function resetApplication(): void {
        resetApplicationImpl();
    }

    /**
     * When the application is reset, take some actions
     */
    //% weight=60
    //% blockId=when_application_reset
    //% block="When Application is Reset"
    export function whenAppReset(body: ()=>void): void {
        whenAppResetImpl(body);
    }

}