import React from 'react';
import Layout from '../components/Layout'
import IndexComponent from '../components/Index'
class index extends React.Component {
  constructor() {
    super();
    this.state = {
      array_seq : ["3", "5", "9" , "15" , "X" , "Y" , "Z"],
      seq_x : "?",
      seq_y : "?",
      seq_z : "?",
    }
  }

  async componentDidMount() {
    
  }

  async find_sequence() {
    let newState = this.state
    var array_sequence = newState.array_seq;
    var tmp_array = 0;
        var result = 0;
        for(var i = 0 ; i < array_sequence.length; i++)
        {
            if(isNaN(parseInt(array_sequence[i])))
            {
                result = tmp_array + (2*i)
                tmp_array = result
                array_sequence[i] = result
            }
            else
            {
                tmp_array = parseInt(array_sequence[i])
                array_sequence[i] = parseInt(array_sequence[i])
            }
        }
        newState.seq_x = array_sequence[4]
        newState.seq_y = array_sequence[5]
        newState.seq_z = array_sequence[6]
        newState.array_seq = array_sequence
        this.setState(newState)
  }

  render() {
    return (
        <div>
        <Layout>
        <IndexComponent state = {this.state}
        find_sequence={() => this.find_sequence()}
        />
        </Layout>
        </div>
    )
  }
}


export default index