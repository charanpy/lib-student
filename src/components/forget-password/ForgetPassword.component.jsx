import React from "react";
import { darkInputCls } from "../login/Login.component";
import Button from "../shared/button/Button.component";
import "./forgetpassword.css";
const ForgetPasswordComponent = () => {
  const user = false;
  // function to change the otp input to the next input field
  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");
    let fieldIntIndex = parseInt(fieldIndex, 10);

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      // It should not be last input field
      if (fieldIntIndex < 4) {
        // Get the next input field using it's name
        const nextfield = document.querySelector(
          `input[name=otpInput-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  };
  return (
    <div>
      {user ? (
        //Email vertification page
        <form
          className="flex flex-col justify-center items-center space-y-8 min-h-screen"
          // onSubmit={onHandleSubmit}
        >
          <div className="space-y-2">
            <h1 className="text-2xl text-slate-900 dark:text-slate-100">
              Forget Password !
            </h1>
          </div>
          <div>
            <input
              // ref={rollNoRef}
              className={`emailInput ${darkInputCls}`}
              placeholder="Enter Roll Number"
              type="text"
              required
              autoComplete="true"
            />
            <div className="text-center m-3">
              <Button className=" p-2 tracking-wide rounded-lg text-white bg-blue-500">
                SEND EMAIL
              </Button>
            </div>
          </div>
        </form>
      ) : (
        // End of Email verification page
        // otp verification page
        <form
          className="flex flex-col justify-center items-center space-y-8 min-h-screen"
          // onSubmit={onHandleSubmit}
        >
          <div className="space-y-2">
            <h1 className="text-2xl text-slate-900 dark:text-slate-100">
              OTP Verification !
            </h1>
            <p className="text-slate-500">Enter the OTP received in Email</p>
          </div>
          <div>
            {/*otp input 1 */}
            <input
              // ref={rollNoRef}
              className={`otpInput m-2 text-center ${darkInputCls}`}
              // placeholder="Enter OTP"
              type="text"
              required
              autoComplete="true"
              maxLength="1"
              name="otpInput-1"
              onChange={handleChange}
            />
            {/*otp input 2 */}
            <input
              // ref={rollNoRef}
              className={`otpInput text-center m-2 ${darkInputCls}`}
              // placeholder="Enter OTP"
              type="text"
              required
              autoComplete="true"
              maxLength="1"
              name="otpInput-2"
              onChange={handleChange}
            />
            {/*otp input 3 */}
            <input
              // ref={rollNoRef}
              className={`otpInput m-2 in-range:border-green-500 text-center ${darkInputCls}`}
              // placeholder="Enter OTP"
              type="text"
              required
              autoComplete="true"
              maxLength="1"
              name="otpInput-3"
              onChange={handleChange}
            />
            {/*otp input 4 */}
            <input
              // ref={rollNoRef}
              className={`otpInput m-2 text-center ${darkInputCls}`}
              // placeholder="Enter OTP"
              type="text"
              required
              autoComplete="true"
              maxLength="1"
              name="otpInput-4"
              onChange={handleChange}
            />
            <div className="text-center m-3">
              <Button className=" p-2 w-full tracking-wide rounded-lg text-white bg-blue-500">
                Verify OTP
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgetPasswordComponent;
