
import './App.css';
import {  Form, Formik } from 'formik';
import { validationSchema } from './validations/schemas';
import { useRef } from 'react';
import PreviewImage from './component/PreviewImage';
import KErrorMessage from './component/KErrorMessage';

function App() {

  const fileRef = useRef(null)


  return (
    <div className="App">
      <Formik
        validationSchema={validationSchema}
        initialValues={{
         file:"",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, setFieldValue }) => (
          
          <Form>

            <input 
            ref={fileRef}
            hidden
            type="file"
            accept='images/*' 
            onChange={(event) => {
              setFieldValue("file", event.target.files[0])
            }} />

            <KErrorMessage name="file"/>

           {values.file &&  <PreviewImage file={values.file}/>} 
            <button onClick={() => {
              fileRef.current.click()
            }}>
              Upload
            </button>


            

            <button type="submit">Submit</button>
          </Form>

        )}
      </Formik>
    </div>
  );
}

export default App;
