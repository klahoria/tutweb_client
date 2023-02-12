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


function Dashboard() {
  return (
    <div className='pb-5'>
      <div className="header row dashboard_page px-0 justify-content-center border_change">
        <Header />
        <div className="background_girl d-flex flex-wrap align-items-center justify-content-around">
          <div className="w-75">

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
        </div>
      </div>
      {/* <div className="ubder_circle row"></div> */}

      <div className="success_page text-center mt-5 pt-5">
        <h1 className='mx-auto px-md-5 py-3 text-subtext w-50'>Our Success</h1>
        <p className='text-subtext lh-30 mw-vh-36 px-md-5 mx-md-auto'>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.</p>

        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          <GradientCard textMain="15K+" subText="Students" />
          <GradientCard textMain="75%" subText="Total Success" />
          <GradientCard textMain="35" subText="Main questions" />
          <GradientCard textMain="26" subText="Chief experts" />
          <GradientCard textMain="16" subText="Year of experience" />
        </div>


      </div>

      <div className="page_3 text-center">
        <h3 className='text-center'>
          All-in-one
          <span>
            Cloud software
          </span>
        </h3>
        <span className='text-center mw-vh-36 lh-30 light-gray'>TOTC is one powerful online software suite that combines all the tools <br /> needed to run a successful school or office.
        </span>


        <div className='d-flex flex-wrap justify-content-center py-5'>
          {/* {[...Array(3)].map((item) => {
            console.log(item)
            return <span>hello {item}</span>
          })} */}
          <DetailCard img="/image/svg/pic3.svg" sub1="Online Billing," sub2="Invoicing, & Contracts" subText="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts" />
          <DetailCard img="/image/svg/pics.svg" sub1="Easy Scheduling &," sub2="Attendence Tracking" subText="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance" />
          <DetailCard img="/image/svg/pic.svg" sub1="Customer Tacking" subText="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization " />
        </div>

      </div>


      <div className='text-center'>
        <h3>What is TOTC?</h3>
        <p className="w-50 mx-auto mw-custom light-gray">
          TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
        </p>

        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          <DetailCardImage bg_image="/image/png/card_1.png" customClass="w-50 py-3 fw-bold" sub1="FOR INSTRUCTORS" variant="outlined" border="white" Textcol-md-autoor="white" background="transparent" title="start a class today" />
          <DetailCardImage bg_image="/image/png/card_2.png" customClass="w-50 py-3 fw-bold" sub1="FOR STUDENTS" variant="outlined" border="#23BDEEE5" Textcol-md-autoor="white" background="#23BDEEE5" title="start a class today" />
          {/* <DetailCardImage bg_image="/image/png/card_1.png" sub1="Online Billing," sub2="Invoicing, & Contracts" subText="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts" /> */}
        </div>


      </div>


      <div className='multi_back mx-0 mx-md-auto py-3 my-5'>
        <div className="row flex-wrap justify-content-between">
          <div className='col-md-auto'>
            <h3 className='px-md-4 lh-base'>Everything you can do in a physical <br /> classroom, you can do with TOTC</h3>
            <p className='px-md-4 d-block lh-base lh-42 ws-7 ls-1'>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
            <Link to="" className="underline px-md-4">Learn More</Link>
          </div>
          <div className='px-md-5 col-md-auto text-end'><img src="image/png/vidthumb.png" alt="" className='image_thumb' /></div>
        </div>
      </div>

      {/* Fearures card */}

      <div className="our_features">
        <h2 className="text-center">Our Features</h2>
        <p className="py-4 text-center ws-1 light-gray">This very extraordinary feature, can make learning activities more efficient</p>

        <div className="col-md-10 mx-auto">

          <div className="row">
            <div className="col-md-auto wc-70">
              <img src="/image/png/frame1.png" className="w-100" alt="" />
            </div>
            <div className="col-md-auto flex-grow-1 py-5">
              <h2 className='px-md-5'>
                A user interface designed <br /> for the classroom
              </h2>
              <div className='px-md-5'>
                {/* <ul className='list-unstyled'> */}
                <div className='py-3 mw-670 d-flex align-items-center'>
                  <Card image="/image/png/list_icon/squares.png" />
                  <span className='ps-md-3'>
                    Teachers don’t get lost in the grid view and have a dedicated Podium space.
                  </span>
                </div>
                <div className='py-3 mw-670 d-flex align-items-center'>
                  <Card image="/image/png/list_icon/copy.png" />
                  <span className='ps-md-3'>
                    TA’s and presenters can be moved to the front of the class.
                  </span>
                </div>
                <div className='py-3 mw-670 d-flex align-items-center'>
                  <Card image="/image/png/list_icon/persons.png" />
                  <span className='ps-md-3'>
                    Teachers can easily see all students and class data at one time.
                  </span>
                </div>
                {/* </ul> */}
              </div>
            </div>
          </div>
          <div className="row margin-top-negaitve justify-content-between">
            <div className="col-md-auto">
              <h2>
                Tools For Teachers <br /> And Learners
              </h2>
              <p className='light-gray mw-586 fs-5'>
                Class has a dynamic set of teaching tools built to be deployed and used during class.
                Teachers can handout assignments in real-time for students to complete and submit.
              </p>
            </div>
            <div className="col-md-auto">
              <img src="/image/png/frame2.png" alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="row box_tour">
        <div className="col-md-10 mx-auto">
          <div className='row justify-content-between align-items-center'>
            <div className="col-md-auto">
              <img src="/image/png/viewTour.png" alt="" />
            </div>
            <div className="col-md-auto">
              <h1>Assessments, <br /> Quizzes, Tests</h1>
              <p className='mw-586 fs-5'>Easily launch live assignments, quizzes, and tests.
                Student results are automatically entered in the online gradebook.</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Dashboard;