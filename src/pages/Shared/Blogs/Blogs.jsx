import React from "react";
import { Accordion, Button } from "react-bootstrap";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";

const MyDoc = () => (
  <Document>
    <Page>
      <Text className="m-5">
        1)Tell us the differences between uncontrolled and controlled
        components. Ans: Controlled Component:-- i)The component is under control
        of the component’s state. ii)These components are predictable as are
        controlled by the state of the component. iii)It accepts the current
        value as props Uncontrolled Component:-- i)Components are under the
        control of DOM. ii)Are Uncontrolled because during the life cycle
        methods the data may loss iii)We access the values using refs. 2)How to
        validate React props using PropTypes Ans:Props are used to passing the
        read-only attributes to React components. For the proper functioning of
        components and to avoid future bugs and glitches it is necessary that
        props are passed correctly.The propTypes object contains a list of
        validators for basic data types, some of them are: PropTypes.any : This
        means the prop can be of any data type. PropTypes.bool: This means the
        prop should be a boolean. PropTypes.number: This means the prop should
        be a number. PropTypes.string: This means the prop should be a string.
        PropTypes.func: This means the prop should be a function.
        PropTypes.array: This means the prop should be an array.
        PropTypes.object: This means the prop should be an object.
        PropTypes.symbol: This means the prop should be a symbol.
        PropTypes.instanceOf: This means the prop should be an instance of a
        particular JavaScript class. PropTypes.isRequired: This means the prop
        should be provided. PropTypes.oneOf(): This means the props should be
        one of several types of specified values. PropTypes.element: This means
        the props must be an element. 3)Tell us the difference between nodejs
        and express js. Ans: NodeJs:-- i) It is used to build server-side,
        input-output, event-driven apps. ii)It is built on Google’s V8 engine.
        iii)Controllers are not provided. ExpressJs:-- i)It is used to build
        web-apps using approaches and principles of Node.js. ii)It is built on
        Node.js. iii) Controllers are provided. 4)What is a custom hook, and why
        will you create a custom hook? Ans:Hooks are reusable functions.When a
        component logic that needs to be used by multiple components, we can
        extract that logic to a custom Hook. Custom Hooks start with "use".
        Example: UseFetch
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

      <div className="App">
        <DownloadButton />
      </div>

      <div className="container">

        <div class="container">
  <h3 class="text-center mb-4">Tell us the differences between uncontrolled and controlled components?</h3>

  <h3 class="text-center mb-4">How to validate React props using PropTypes?</h3>

  <h3 class="text-center mb-4">Tell us the difference between nodejs and express js?</h3>

  <h3 class="text-center mb-4">What is a custom hook, and why will you create a custom hook?</h3>

</div>

      </div>
      </div>



  );
};

export default Blogs;
