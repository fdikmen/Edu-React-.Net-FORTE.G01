import React from 'react';
// const LoadingHOC = (WrappedComponent) => { return ...class//function... }

const LoadingHOC = (WrappedComponent, field) => {
    return class LoadingHOC extends React.Component {
        render() {
            // return this.props.loading ? <div>Loading...</div> :
            return this.props[field].length === 0 ? <div>Loading...</div> :
                <WrappedComponent {...this.props} />;
        }
    }
}

/*
const LoaderHoc = (Xxxxxx) => {return function LoadingHOC() {
    return (
      props.loading ? <div>Loading...</div> :
         <Xxxxxx {...props} />;
    )
  }}
*/

export default LoadingHOC;

