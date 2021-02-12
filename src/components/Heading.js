import React from 'react';

export default function Heading() {
    return (
        <div id="heading" className="text-center heading">
            <h1 className="app-title">A simple React-based Todo List!</h1>
            <p className="app-description">
                This app stores your todo-list data in your browser&apos;s storage.<br />Be careful when clearing your storage!
            <span style={{ fontWeight: 'bold' }}> You&apos;ll lose your list!</span>
            </p>
        </div>
    )
}