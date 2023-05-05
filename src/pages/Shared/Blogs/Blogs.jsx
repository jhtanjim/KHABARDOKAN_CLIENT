import React from "react";
import { Accordion, Button } from "react-bootstrap";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";

const MyDoc = () => (
  <Document>
    <Page>

      <Text>
        1/ Differences between uncontrolled and controlled components:

        Answer: Uncontrolled components store their own state internally, while controlled components are managed by React state.


        2/Validating React props using PropTypes:

        Answer: PropTypes is a built-in library in React that allows you to validate the type and shape of your component props.

        3/Differences between Node.js and Express.js:

        Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework that runs on top of Node.js.



        4/WWhat is a custom hook, and why will you create a custom hook?

        Answer:  A custom hook is a JavaScript function that allows you to reuse stateful logic in functional components. You would create a custom hook to avoid duplicating code and make your code more modular and reusable.


      </Text>
    </Page>
  </Document>
);

const DownloadButton = () => (
  <PDFDownloadLink document={<MyDoc />} fileName="myBlog.pdf">
    {({ blob, url, loading, error }) =>
      loading ? "Loading document..." : <div className=" mt-5">
        <Button className="bg-success">Download now!</Button>
      </div>

    }
  </PDFDownloadLink>
);


const Blogs = () => {
  return (

    <div>
      <div className="container">

        <h4 className='text-center my-5'>Blog Section</h4>

        <div className="row ">
          <div className="col-12 col-md-6 my-5">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Differences between uncontrolled and controlled components:

                </Accordion.Header>
                <Accordion.Body>
                  Uncontrolled components store their own state internally, while controlled components are managed by React state.                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Validating React props using PropTypes:

                </Accordion.Header>
                <Accordion.Body>
                  PropTypes is a built-in library in React that allows you to validate the type and shape of your component props.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Differences between Node.js and Express.js:

                </Accordion.Header>
                <Accordion.Body>
                  Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework that runs on top of Node.js.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>WWhat is a custom hook, and why will you create a custom hook?

                  ?</Accordion.Header>
                <Accordion.Body>
                  A custom hook is a JavaScript function that allows you to reuse stateful logic in functional components. You would create a custom hook to avoid duplicating code and make your code more modular and reusable.



                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-12 col-md-6 my-5 ">
            <img className='img-fluid border rounded' src="https://res.cloudinary.com/practicaldev/image/fetch/s--cOsaUTh6--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/q7hogmi9grhxs1k1881i.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="App text-center mb-2">
        <DownloadButton />
      </div>
    </div>



  );
};

export default Blogs;
