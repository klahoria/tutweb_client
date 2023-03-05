import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header'
import { AiFillPlayCircle } from 'react-icons/ai';
import Button from '../Button/Button';
import GradientCard from '../GradientCard/GradientCard';
import DetailCard from '../Card/DetailCard';
import DetailCardImage from '../Card/DetailCardImage';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import CustomButton from '../CustomButtons/CustomButton';
import VerticalCard from './VerticalCard';
import FeatureCard from '../FeaturesCard/FeatureCard'
import Title from '../Title/Title';
import TextView from '../Styled/TextViewer';

function Dashboard() {
  return (
    <div className='w-100'>
      <div className="header row dashboard_page px-0 justify-content-center border_change">
        <Header />
        <div className="background_girl d-flex flex-wrap align-items-center justify-content-around">
          <div className="w-75 d-md-block">

            <h1 className='fw-bold text-start  text-white'>
              <span>Studying </span> Online is now <br />much easier
            </h1>
            <p className='pe-5 pt-4 text-white text-start'>TOTC is an interesting platform that will teach you in more an interactive way</p>


            <div className=' text-start px-0 '>
              <Button title="Join For Free" customClass="px-md-5 in_active bg-lignt-green" customClassStyle="text-white fw-bold" />
              <span className='d-inline-block'>
                <AiFillPlayCircle style={{ width: "60px", height: "60px" }} className="text-white" />
              </span>
              <span className="ms-3 fw-bold">Watch how it works</span></div>
          </div>
          <div className="w-100 px-3 d-md-none d-block">

            <h1 className='fw-bold text-start  text-white'>
              <span>Studying </span> Online is now <br />much easier
            </h1>
            <p className='pe-5 pt-4 text-white text-start'>TOTC is an interesting platform that will teach you in more an interactive way</p>


            <div className=' text-start px-0 '>
              <Button title="Join For Free" customClass="px-md-5 in_active bg-lignt-green" customClassStyle="text-white fw-bold" />
              {/* <span className='d-inline-block'>
                <AiFillPlayCircle style={{ width: "60px", height: "60px" }} className="text-white" />
              </span> */}
              <span className="ms-3 fw-bold">Watch how it works</span></div>
          </div>
        </div>
      </div>
      {/* <div className="ubder_circle row"></div> */}

      <div className="success_page text-center mt-5 pt-5">
        <Title title="Our Success" subTitle="Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci." maxWidth="550px" />

        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          <GradientCard textMain="15K+" subText="Students" />
          <GradientCard textMain="75%" subText="Total Success" />
          <GradientCard textMain="35" subText="Main questions" />
          <GradientCard textMain="26" subText="Chief experts" />
          <GradientCard textMain="16" subText="Year of experience" />
        </div>


      </div>

      <div className="page_3 text-center">
        <Title title="All-in-one Clound Software" subTitle="TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office." maxWidth="500px" />


        <div className='d-flex flex-wrap justify-content-center py-5'>
          <DetailCard img="/image/svg/pic3.svg" sub1="Online Billing," sub2="Invoicing, & Contracts" subText="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts" />
          <DetailCard img="/image/svg/pics.svg" sub1="Easy Scheduling &," sub2="Attendence Tracking" subText="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance" />
          <DetailCard img="/image/svg/pic.svg" sub1="Customer Tacking" subText="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization " />
        </div>

      </div>


      <div className='text-center'>
        <Title title="What is TOTC?" subTitle="TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place" maxWidth="600px" />


        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          <DetailCardImage bg_image="/image/png/card_1.png" customClass="w-50 py-3 fw-bold text-white" sub1="FOR INSTRUCTORS" variant="outlined" border="white" Textcol-md-autoor="white" background="transparent" title="start a class today" />
          <DetailCardImage bg_image="/image/png/card_2.png" customClass="w-50 py-3 fw-bold text-white" sub1="FOR STUDENTS" variant="outlined" border="#23BDEEE5" Textcol-md-autoor="white" background="#23BDEEE5" title="Enter access code" />
        </div>


      </div>


      <div className='multi_back mx-0 mx-md-auto py-3 my-5'>
        <div className="row flex-wrap justify-content-between">
          <div className='col-12 col-md-6'>
            <Title title={"Everything you can do in a physical"} custom_title_class="px-4" breakPoint={"classroom, "} gradient={"you can do with TOTC"} subTitle="TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system." maxWidth="600px" gradientColor="#00CBB8" />

            <Link to="" className="underline px-md-4">Learn More</Link>
          </div>
          <div className='px-md-5 col-12 col-md-6 text-end'><img src="image/png/vidthumb.png" alt="" className='image_thumb' /></div>
        </div>
      </div>


      <FeatureCard image="image/png/vidthumb.png" variant="reverse" imageMaxWidth="500px" />

      <FeatureCard title={[{ lable: 'title', value: 'Our', class: "dblue", fontSize: '18px' }, { lable: 'title', value: 'Features', class: "hilight", fontSize: '18px' }]} subTitle="This very extraordinary feature, can make learning activities more efficient" image="/image/png/frame1.png" imageMaxWidth="670px" customalign="start" />

      <div className="row box_tour py-5 mt-5 mx-0">
        <div className="col-md-10 mx-auto">
          <div className='row justify-content-between px-3 px-md-5 align-items-center'>
            <div className="col-md-auto">
              <img className='mw-700' src="/image/png/viewTour.png" alt="" />
            </div>
            <div className="col-md-auto">
              <h1 className='dblue'>Assessments, <br />
                <span className='hilight'>
                  Quizzes
                </span>
                , Tests
              </h1>
              <p className='mw-586 fs-5 light-gray'>Easily launch live assignments, quizzes, and tests.
                Student results are automatically entered in the online gradebook.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row box_tour py-5 mt-5 mx-0">
        <div className="col-md-10 mx-auto">
          <div className='row justify-content-between px-3 px-md-5 align-items-center'>
            <div className="col-md-auto">
              <h1 className='hilight'>Class Management <br />
                <span className='dblue'>
                  Tools for Educators
                </span>
              </h1>
              <p className='mw-586 fs-5 light-gray'>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
              </p>
            </div>
            <div className="col-md-auto">
              <img className='mw-700' src="/image/png/one_one_d.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="row box_tour py-5 mt-5 mx-0">
        <div className="col-md-10 mx-auto">
          <div className='row justify-content-between px-3 px-md-5 align-items-center'>
            <div className="col-md-auto">
              <img className='mw-700' src="/image/png/cmt.png" alt="" />
            </div>
            <div className="col-md-auto">
              <h1 className='dblue'>One-on-One <br />
                <span className='hilight'>
                  Discussion
                </span>
              </h1>
              <p className='mw-586 fs-5 light-gray'>
                Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mx-0">
        <Button customClass={'py-3'} variant={'outlined'} title={'See more features'} border="#49BBBD" background="transparent" Textcolor="#49BBBD" maxWidth="250px" />
      </div>


      <div className="blue_back row my-5 justify-content-center mx-0">
        <div className="py-5 mt-5 col-md-10">
          <h1>Explore Course</h1>
          <p>Ut sed eros finibus, placerat orci id, dapibus.</p>
        </div>

        <div className="col-md-12 py-5">
          <div className='offset-md-2 pb-5 px-3'>
            <span>Lorem Ipsum</span>
          </div>
          <div className='d-flex align-items-center justify-content-between px-md-5 px-5 offset-md-2 table-responsive navbar-nav-scroll' style={{ overflowY: 'hidden' }}>
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
          </div>
        </div>

        <div className="col-md-12 py-5">
          <div className='offset-md-2 pb-5 px-3'>
            <span>Quisque a Consequat</span>
          </div>
          <div className='d-flex align-items-center justify-content-between px-md-5 px-5 offset-md-2 table-responsive navbar-nav-scroll' style={{ overflowY: 'hidden' }}>
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
          </div>
        </div>

        <div className="col-md-12 py-5">
          <div className='offset-md-2 pb-5 px-3'>
            <span>Aenean Facilisis</span>
          </div>
          <div className='d-flex align-items-center justify-content-between px-md-5 px-5 offset-md-2 table-responsive navbar-nav-scroll' style={{ overflowY: 'hidden' }}>
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
          </div>
        </div>

      </div>

      <div className="row box_tour py-5 mt-5 mx-0">
        <div className="col-md-10 mx-auto">
          <div className='row justify-content-between px-3 px-md-5 align-items-start'>
            <div className="col-md-6 col-sm-12 py-3">
              <h1 className='dblue mb-4'><br />
                <span className='light-gray fs-6'>
                  <span className='d-flex align-items-center justify-content-start'>
                    <hr style={{ maxWidth: '100px', width: "100%" }} /> &nbsp;&nbsp;&nbsp; TESTIMONIAL
                  </span>
                </span>
                What They Say?
              </h1>
              <p className='mw-586 fs-5 light-gray'>
                TOTC has got more than 100k positive ratings from our users around the world.
              </p>
              <p className='mw-586 fs-5 light-gray'>
                Some of the students and teachers were greatly helped by the Skilline.
              </p>
              <p className='mw-586 fs-5 light-gray'>
                Are you too? Please give your assessment
              </p>

              <div className="custom_fields">
                <CustomButton title={"Write your assessment"} customClass="p-3 fs-5" border="var(--hilight)" textColor="var(--hilight)" maxWidth="300px" role="button" />
              </div>

            </div>
            <div className="col-md-6 col-sm-12 py-3">
              <img className='mw-700' src="/image/png/wst.png" style={{ maxHeight: '70vh' }} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;