import Header from './Header'
import Footer from './Footer'
// import '../static/assets/vendor/fontawesome-free/css/all.min.css'
const Layout = (props) => (
  <div >

    <meta charset="utf-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <meta name="description" content=""/>
  <meta name="author" content=""/>

  <title>SB Admin 2 - Dashboard</title>
  <link href="/static/assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>
  <link href="/static/assets/css/sb-admin-2.min.css" rel="stylesheet"/>
  <div id="content-wrapper" class="d-flex ">
  
    <Header />
    {props.children}
  </div>
    <Footer />
  <script src="/static/assets/vendor/jquery/jquery.min.js"></script>
  <script src="/static/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <script src="/static/assets/vendor/jquery-easing/jquery.easing.min.js"></script>

  <script src="/static/assets/js/sb-admin-2.min.js"></script>
  </div>
)

export default Layout