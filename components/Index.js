
const Index = (props) => (
  <div class="container-fluid">

          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
          </div>

          <div class="row">

            <div class="col-xl-12 col-md-6 mb-4">
            <div>
            <p>3, 5, 9, 15, X, Y, Z - Please create a new function for finding X, Y, Z value</p>
            </div>
            <div>
            <button class="btn btn-primary" onClick={(event) => props.find_sequence()} color="primary">Click here show result !</button>
            </div>
            <div>
            <br/>
            X = {props.state.seq_x}  Y = {props.state.seq_y}  Z = {props.state.seq_z}
            </div>
            </div>

          </div>


   


        </div>
)

export default Index