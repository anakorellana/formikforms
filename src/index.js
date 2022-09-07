import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

const Example = () => (
  <div>
    <h1 style={{ color: "navy" }}>Random Questions</h1>
    <Formik
      initialValues={{
        work: "",
        favoritesnacks: ""
        // lastName: '',
        // email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <div id="my-radio-group" style={{ color: "navy" }}>
            Where would you prefer to work?
          </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="work" value="Remotely" />
              Remotely
            </label>

            <label>
              <Field type="radio" name="work" value="At Home" />
              At home
            </label>
            <div>Work: {values.work}</div>
          </div>

          <div id="my-radio-group" style={{ color: "navy" }}>
            What are your usual cravings?
          </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="favoritesnacks" value="Sweet" />
              Sweets
            </label>

            <label>
              <Field type="radio" name="favorite snacks" value="Savory" />
              Savory
            </label>
            <div>I prefer: {values.favoritesnacks} snacks</div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

ReactDOM.render(<Example />, document.getElementById("root"));
