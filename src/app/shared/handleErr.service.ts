import { Injectable, NgModule } from '@angular/core';

@NgModule()
export class HandleError {
    handleError(err: any): string {
        let errMessage: string;
        if (err instanceof Response) {
            const body = err.json() || '';
            const error = JSON.stringify(body);
            errMessage = `${err.status} - ${err.statusText} || '' } ${error}`;
        } else {
            errMessage = err.message ? err.message : err.toString();
        }
        return errMessage;
    }
}
