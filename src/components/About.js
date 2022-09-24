import React, { useState } from 'react'



export default function About() {

    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

   //eslint-disable-next-line
    const [btnText, setbtnText] = useState('Enable Dark Mode')

   //eslint-disable-next-line
    const toggleStyle = () => { 
        if (myStyle.color === 'black') {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtnText('Enable Light Mode')
        }
        else {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtnText('Enable Dark Mode')

        }
    }

    return (
        <div className="container" style={myStyle}>
            <h1 className="my-2">About</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUlizer gives you a way to analyze your text quickly and efficiently. Be it word count/ character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button " style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUlizer is a free character counter tool that provides instant character count 
                            and word count statistics for a given text. TextUlizer reports the number of words and characters.
                            Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button " style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counting software works in web browsers such as Chrome, Firefox, Safari, Opera. It suits to count
                            characters in facebook, blog, ebook, MS Office documents, PDFs, esssays, etc.
                
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button onClick={toggleStyle} type='button' className='btn btn-primary my-4'>{btnText}</button>
            </div> */}
        </div>
    )
}
