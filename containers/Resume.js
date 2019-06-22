import React from 'react';
import Layout from '../components/Layout'
import ResumeComponent from '../components/Resume'
class index extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
        <div>
        <Layout>
        <ResumeComponent/>    
        </Layout>
        </div>
    )
  }
}


export default index