import React from 'react'

function VerticalCard() {
    return (
        <div>
            <span className='bg-white d-inline-block px-2 py-3 rounded-4' style={{ transform: 'rotate(-10deg)' }}>
                <span className='d-inline-block rounded-4 align-middle text-center' style={{ background: 'rgb(204, 250, 188)', height: '290px', width: '55px' }}>
                    <span className="d-inline-block px-1 rounded-4 text-bg-danger text-center" style={{ background: 'blue', writingMode: 'tb', marginTop: '40px', width: '38px', height: '220px', verticalAlign: 'middle' }}>hello this</span>
                </span>
            </span>
        </div>
    )
}

export default VerticalCard