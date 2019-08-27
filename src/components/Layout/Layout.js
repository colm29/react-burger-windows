import React, { Fragment } from 'react';

const layout = (props) => (
    <Fragment>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Fragment>
);

export default layout;