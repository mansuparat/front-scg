const style_paragraph = {
    'margin-left': '10%'
};

const style_head3 = {
    'margin-left': '5%'
};
  
const Resume = (props) => (
    <div class="container-fluid">
  
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0 text-gray-800">Resume</h1>
            </div>
  
            <div class="row">
  
              <div class="col-xl-2 col-md-6 mb-4">
               <img src="/static/assets/img/resume.png" />
              </div>

              <div class="col-xl-4 col-md-6 mb-4">
               Name : Suparat Kitpaiboonsin<br/>
               Address : 244/13 Village No.3 Sub-district.bansuan
               Chonburi, Chonburi 20000 Thailand<br/>
               Email : mansuparatkit@gmail.com<br/>
               Tel: (+66)830398613
              </div>

              <div class="col-xl-2 col-md-6 mb-4">
                Age  : 25<br/>
                Date of birth : 13/05/1994<br/>
                Sex : Male<br/>
                Marital Status : Single
              </div>

              <div class="col-xl-2 col-md-6 mb-4">
              Nationality  : Thai<br/>
              Religion : Buddhism<br/>
              Height : 173<br/>
              Weight  : 73	
              </div>
  
            </div>
            <hr class="sidebar-divider my-0"/>
            <br/>
            <div class="row">
  
              <div class="col-xl-12 col-md-6 mb-4">
               <h3>OBJECTIVE</h3><br/>
               <p style={style_paragraph}>I want to use knowledge and ability for research and development the most benefit and performance to enterprise and to learn more skills.</p>
              </div>
            </div>
            <hr class="sidebar-divider my-0"/>
            <br/>
            <div class="row">
  
              <div class="col-xl-12 col-md-6 mb-4">
               <h3>Summary of Qualification</h3><br/>
               <p style={style_paragraph}>•	Get requirement from customer also Linfox PTT SCCC Yazaki and etc.</p>
               <br/>
               <p style={style_paragraph}>• Friendly, humble, flexible and helpful</p>
               <br/>
               <p style={style_paragraph}>• Programming skill also PHP HTML CSS SQL JAVASCRIPT C C++ and etc.</p>
               <br/>
               <p style={style_paragraph}>• MS office Suite skill also Word Excel and Powerpoint</p>
               <br/>
               <p style={style_paragraph}>•	System skill also Unix Linux Window Centos PM2 and Ubuntu </p>
               <br/>
               <p style={style_paragraph}>•	Webserver skill also Apache and Nginx</p>
               <br/>
               <p style={style_paragraph}>•	Framework to development also Codeigniter Laravel Node JS Adonis and React JS</p>
              </div>
            </div>

            <hr class="sidebar-divider my-0"/>
            <br/>
  
            <div class="row">
  
              <div class="col-xl-12 col-md-6 mb-4">
               <h3>WORK EXPERIENCE</h3><br/>
               <h4 style={style_head3}>D.T.C ENTERPRISE ( 20 June 2016 – 10 October 2017 )</h4><br/>
               <p style={style_paragraph}>• Development Website and monitor linux program about GPS Tracking</p>
               <br/>
               <p style={style_paragraph}>• Development GPS Tracking system by PHP CSS HTML JAVASCIRPT and JQUERY</p>
               <br/>
               <p style={style_paragraph}>• GPS Tracking is monitor also check status speed latitude longitude address from vehicle and export to report at real time and history. Management driver and vehicle</p>
               <br/>
               <p style={style_paragraph}>• Develop Auto mail report and Calculate vehicle departure and arrive station by Node JS</p>
               <br/>
               <p style={style_paragraph}>• Provided customer service and use communication skill both Thai and English</p>
              </div>
            </div>
  
            <br/>
  
            <div class="row">
  
              <div class="col-xl-12 col-md-6 mb-4">
               <h4 style={style_head3}>Commerzy ( 20 November 2017 - Present)</h4><br/>
               <p style={style_paragraph}>• Development Website about E-commerce</p>
               <br/>
               <p style={style_paragraph}>• Development Agent system by PHP CSS HTML JAVASCIRPT and JQUERY</p>
               <br/>
               <p style={style_paragraph}>• Agent system is management purchase check stock and monitor report for agent</p>
               <br/>
               <p style={style_paragraph}>• Development Customer Relationship Management system by Laravel Framework</p>
               <br/>
               <p style={style_paragraph}>• Customer Relationship Management system is management relation customers and sales. When customer want to use commerzy system</p>
               <br/>
               <p style={style_paragraph}>• Development Logistic system by React JS (front-end) and Node JS (back-end) then change to Adonis JS</p>
               <br/>
               <p style={style_paragraph}>• Logistic system is agent for get parcels from customer then send to postoffice</p>
              </div>
            </div>
     
            <hr class="sidebar-divider my-0"/>
            <br/>
            <div class="row">
  
              <div class="col-xl-12 col-md-6 mb-4">
               <h3>EDUCATION</h3><br/>
               <p style={style_paragraph}>Burapha University (May 2012 – May 31, 2016) Bachelor of ScienceFaculty of Informatics, Majoring Software Engineering</p>
               <br/>
               <p style={style_paragraph}>Chonradsadornumrung school (May 2009 – Marach 2012)High School Mathematics – Science</p>
              </div>
            </div>
  
  
          </div>
  )
  
  export default Resume