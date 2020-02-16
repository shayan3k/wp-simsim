import React from "react";
import {useStoreState, useStoreActions} from "easy-peasy";

function SignUp() {
    const username = useStoreState(state => state.login.username);
    const password = useStoreState(state => state.login.password);
    const setUsername = useStoreActions(actions => actions.login.setUsername);
    const setPassword = useStoreActions(actions => actions.login.setPassword);

    return (
        <form className="col-md-6 order-2 order-md-1">
            <h3 className="my-4">ثبت اکانت جدید</h3>
            <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                <input className="form-control" id="username" name="username" placeholder="شماره موبایل خود را وارد کنید" type="text"
                    onChange={
                        e => setUsername(e.target.value)
                    }/>
            </div>
            <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                <input className="form-control" id="name" name="name" placeholder="نام" type="text"/>
            </div>
            <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                <input className="form-control" id="password" name="password" placeholder="رمز ورود" type="password"/>
            </div>
            <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                <input className="form-control" id="password2" name="password2" placeholder="تکرار رمز ورود" type="password"/>
            </div>
            <button className="btn btn-primary btn-lg my-3" type="submit">
                ثبت نام
            </button>
        </form>
    );
}

export default SignUp;
