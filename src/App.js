import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Paper from "@material-ui/core/Paper";

const body = {
  fontFamily:
    '"AppleSystem", BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontSize: "14px",
  lineHeight: "1.5",
  color: "#24292e",
  backgroundColor: "#fff",
  display: "flex",
};

const box = {
  margin: "1rem 17rem",
  width: "50%"
};

const formWrapper = {
  margin: "100px 100px",
  padding: "80px"
};

const textInput = {
  padding: ".5rem",
  fontSize: "16px",
  width: "100%",
  display: "block",
  borderRadius: "4px",
  border: "1px solid #ccc",
  borderColor: "#007eff",
  boxShadow:
    "inset 0 1px 1px rgba(0, 0, 0, 0.075),0 0 0 3px rgba(0, 126, 255, 0.1)",
  outline: "none"
};

const textInputError = {
  padding: ".5rem",
  fontSize: "16px",
  width: "100%",
  display: "block",
  borderRadius: "4px",
  border: "1px solid #ccc",
  borderColor: "red",
  boxShadow:
    "inset 0 1px 1px rgba(0, 0, 0, 0.075),0 0 0 3px rgba(0, 126, 255, 0.1)",
  outline: "none"
};

const lab = {
  fontWeight: "bold",
  display: "block",
  marginBottom: ".5rem"
};

const inputFeedback = {
  color: "red",
  marginTop: "0.25rem"
};

const Button = {
  maxWidth: "150px",
  margin: "20px 0",
  padding: "12px 20px",
  borderStyle: "none",
  borderRadius: "5px",
  backgroundColor: "#08c",
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
  fontSize: "17px",
  fontWeight: "500",
  color: "#fff",
  cursor: "pointer",
  outline: "none",
  WebkitAppearance: "none"
};

export default function App() {
  return (
    <div className="App">
      <div className="box" style={box}>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={async values => {
            await new Promise(resolve => setTimeout(resolve, 500));

          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Required")
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,

            } = props;
            return (
              <div className="body" style={body}>
                <Paper
                  className="form form--wrapper"
                  elevation={10}
                  style={formWrapper}
                >
                  <form onSubmit={handleSubmit}>
                    <h1>Forgot Password?</h1>
                    <label htmlFor="email" style={lab}>
                      Email
                    </label>
                    <input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      style={
                        errors.email && touched.email
                          ? textInputError
                          : textInput
                      }
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.email && touched.email
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                    {errors.email && touched.email && (
                      <div className="input-feedback" style={inputFeedback}>
                        {errors.email}
                      </div>
                    )}

                    <button
                      style={Button}
                      type="submit"

                    >
                      Submit
                    </button>
                  </form>
                </Paper>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
