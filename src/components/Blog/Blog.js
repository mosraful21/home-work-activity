import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-body'>
            <div className='blog-container'>
                <h2>How does react work?</h2>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug. A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.</p>
                <br />
                <h2>Props vs State?</h2>
                <h3>props</h3>
                <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
                <h3>state</h3>
                <p>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
                <table border={1} width='100%'>
                    <tr>
                        <th>props</th>
                        <th>state</th>
                    </tr>
                    <tr>
                        <td>Props are read-only.</td>
                        <td>State changes can be asynchronous..</td>
                    </tr>
                    <tr>
                        <td>Props are immutable.</td>
                        <td>State is mutable.</td>
                    </tr>
                    <tr>
                        <td>Props allow you to pass data from one component to other components as an argument.</td>
                        <td>State holds information about the components.</td>
                    </tr>
                    <tr>
                        <td>Props can be accessed by the child component.</td>
                        <td>State cannot be accessed by child components.</td>
                    </tr>
                    <tr>
                        <td>Props are used to communicate between components.</td>
                        <td>States can be used for rendering dynamic changes with the component.</td>
                    </tr>
                </table>
                <h2>What is useEffect work?</h2>
                <p>The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it. Pretty much anything you want to “do” in a React component other than return JSX (any sort of side effect), will go into a useEffect. (and you can have more than one useEffect per component, too) All this power comes with a tradeoff: useEffect can be confusing until you understand how it works. In this post, we’re going to look at lots of useEffect examples so that you understand the mental model and can use it effectively in your own code.</p>
            </div>
        </div>
    );
};

export default Blog;