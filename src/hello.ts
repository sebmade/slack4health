import 'material-design-lite/material.css';
import {Component, View, bootstrap, coreDirectives} from 'angular2/angular2';

@Component({
    selector: 'hello'
})
@View({
    template: require('./hello.html'),
    styles: [require('./hello.css')],
    directives: [coreDirectives]
})
export class Hello {
    name: string = 'World';
    constructor() {
        setTimeout(() => {
            this.name = 'NEW World'
        }, 2000);
    }
}

bootstrap(Hello);
