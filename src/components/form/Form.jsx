import React from 'react'
import './Form.scss'
import { RiLockPasswordLine } from "react-icons/ri"
import { MdOutlineEmail } from "react-icons/md"
export default function Form() {
    return (
        <>
            <div className="wrappers">
                <div className="box">
                    <div className="input_box">
                        <MdOutlineEmail className='icon' />
                        <input type="text" autoComplete={false} />
                        <label>Email</label>
                    </div>
                    <div className="input_box">
                        <RiLockPasswordLine className='icon' />
                        <input type="password" />
                        <label>Password</label>
                    </div>
                    <div className="forget">
                        <input type="checkbox" />
                        <label>Remember Me</label>
                        <a href="/">Forget Password</a>
                    </div>
                    <div className="btn">
                        Sign Up
                    </div>
                </div>
            </div>
        </>
    )
}
