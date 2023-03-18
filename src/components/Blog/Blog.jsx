import React from 'react'
import Header from '../Header/Header';
import Title from '../Title/Title';
import TextViewer from '../Styled/TextViewer';
import Image from '../Styled/Image/Image';
import './Blog.css';
import Button from '../Button/Button';


function Blog() {
  return (
    <>
      <Header headerType={"inverted"} />
      <div className="col-12 p-5" style={{ background: "#EBF5FF" }}>
        <div className="row">
          <div className="col-md-6 col-12">
            <Title subTitle="By Themadbrains in" subGradient="inspiration" gradientColor="#49BBBD" alignText="text-left h6" />
            <Title custom_title_class="h2 title_block_card" alignText="text-left" style={{ maxWidth: "450px" }} title="Why Swift UI Should Be on the Radar of Every Mobile Developer" />
            <div className="" style={{ maxWidth: '450px' }}>
              <TextViewer style={{ textAlign: "center" }} maxWidth="450px" color="#696984" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</TextViewer>
            </div>
            <div className="col-12 mt-5">
              <Button title="Start learning now" rounded="rounded-3" />
            </div>
          </div>
          <div className="col-md-6 py-2 text-center d-md-block d-none">
            <Image style={{ width: "100%" }} src="/image/png/blog_1.png" alt="/image/png/blog_1.png" />
          </div>
        </div>
      </div>
      <div className="col-12 px-5 py-5">
        <div class="px-5 mx-auto fw-bold h4 pb-4  " style={{ maxWidth: "calc(97%)" }}>Reading blog list</div>
        <div className="row justify-content-around">
          <Image src="image/png/blog/blogCard (1).png" subtitle="UI/UX" style={{ width: "calc(100%/4)", maxWidth: "300px", minWidth: "300px" }} class="py-3" alt="" />
          <Image src="image/png/blog/blogCard (2).png" subtitle="React" style={{ width: "calc(100%/4)", maxWidth: "300px", minWidth: "300px" }} class="py-3" alt="" />
          <Image src="image/png/blog/blogCard (3).png" subtitle="PHP" style={{ width: "calc(100%/4)", maxWidth: "300px", minWidth: "300px" }} class="py-3" alt="" />
          <Image src="image/png/blog/blogCard (4).png" subtitle="JavaScript" style={{ width: "calc(100%/4)", maxWidth: "300px", minWidth: "300px" }} class="py-3" alt="" />
        </div>
      </div>

    </>
  )
}

export default Blog