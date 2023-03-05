import React from 'react'
import Card from '../Card/Card'
import TextViewer from '../Styled/TextViewer'

function FeatureCard(props) {
    return (
        <div className="our_features py-5">
            {props.title && !Array.isArray(props.title) && <h2 className="text-center fw-bold">{props.title}</h2>}
            {props.title && Array.isArray(props.title) && <h2 className="text-center fw-bold">
                {props.title.map((item, i) => {
                    return item.label == 'breakpoint' ? <br /> : <TextViewer color={item.color} className={item.class}>{item.value} </TextViewer>
                })}
            </h2>}
            {props.subTitle && <p className="py-4 text-center ws-1 light-gray">{props.subTitle}</p>}

            {/* <Title {...props} /> */}
            <div className="col-md-10 mx-auto">

                <div className={`row justify-content-between  ${props.variant == 'reverse' ? 'flex-row-reverse flex-wrap-reverse' : ''} ${props.customalign ? props.customalign == 'center' ? 'align-items-center' : props.customalign == 'start' ? 'align-items-start' : 'align-items-end' : 'align-items-center'}`}>
                    <div className="col-md-6 col-sm-12">
                        <img style={{ maxWidth: props.imageMaxWidth, width: "100%"}} src={props.image} alt={props.image} />
                    </div>
                    <div className="col-md-6 col-sm-12 py-5">
                        <h1 className='px-md-5 fw-bold dblue'>
                            A <span className="hilight">user interface&nbsp;</span>designed <br /> for the classroom
                        </h1>
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

            </div>
        </div >
    )
}

export default FeatureCard