import {Page} from 'ionic-framework/ionic';
import {FormBuilder, Validators, FORM_BINDINGS, ControlGroup} from 'angular2/common'


@Page({
    viewBindings: [FORM_BINDINGS],
    templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

    loginForm: ControlGroup;

    constructor(formBuilder: FormBuilder) {
        this.loginForm = formBuilder.group({
            username: ["", Validators.required],
            passwordRetry: formBuilder.group({
                password: ["", Validators.required]
            })
        });
    }
    
    login() {
        console.log(JSON.stringify(this.loginForm.value, null, 2));
    }
}
