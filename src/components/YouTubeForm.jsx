import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required!!"),
  email: Yup.string().email("Invalid email format").required("Required!!"),
  channel: Yup.string().required("Required!!"),
});
const YouTubeForm = () => {
  //console.log("form values", formik.values);
  //console.log("form errors", formik.errors);
  console.log("visited fields", formik.touched);
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <input
              type="text"
              id="channel"
              name="channel"
              {...formik.getFieldProps("channel")}
            />
            {formik.touched.channel && formik.errors.channel ? (
              <div>{formik.errors.channel}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </form>
      </Formik>
    </div>
  );
};

export default YouTubeForm;
