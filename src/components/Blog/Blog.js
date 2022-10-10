import React from "react";

const Blog = () => {
  return (
    <div>
      <h3>Purpose of React Router: </h3>
      <span>
        React Router, and dynamic, client-side routing, allows us to build a
        single-page web application with navigation without the page refreshing
        as the user navigates. React Router uses component structure to call
        components, which display the appropriate information. By preventing a
        page refresh, and using Router or Link, which is explained in more depth
        below, the flash of a white screen or blank page is prevented. This is
        one increasingly common way of having a more seamless user experience.
        React router also allows the user to utilize browser functionality like
        the back button and the refresh page while maintaining the correct view
        of the application.
      </span>
      <h3>Context Api:</h3>
      <span>
        React context API, In this article you will explore what is Context API
        and how to use it in your React project. The Context API is a React
        structure that enables you to exchange unique details and assists in
        solving prop-drilling from all levels of your application. What is
        Context API? The React Context API is a way for a React app to
        effectively produce global variables that can be passed around. This is
        the alternative to "prop drilling" or moving props from grandparent to
        child to parent, and so on. Context is also touted as an easier, lighter
        approach to state management using Redux. Context API is a (kind of) new
        feature added in version 16.3 of React that allows one to share state
        across the entire app (or part of it) lightly and with ease.
      </span>
      <h3> About useRef:</h3>
      <span>
        In React components, there are times when frequent changes have to be
        tracked without enforcing the re-rendering of the component. It can also
        be that there is a need to re-render the component efficiently. While
        useState and useReducer hooks are the React API to manage local state in
        a React component, they can also come at a cost of being called too
        often making the component to re-render for each call made to the update
        functions. In this article, I’ll explain why useState is not efficient
        for tracking some states, illustrate how useState creates too much
        re-render of a component, how values that are stored in a variable are
        not persisted in a component, and last but not least, how useRef can be
        used keep track of variables without causing re-render of the component.
        And give a solution on how to enforce re-render without affecting the
        performance of a component. After the evolution of functional
        components, functional components got the ability to have a local state
        that causes re-rendering of the component once there is an update to any
        of their local state.
      </span>
    </div>
  );
};

export default Blog;
