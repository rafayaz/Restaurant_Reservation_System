import React from 'react';
import  {Link} from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
    return (
        <section className='about' id="about">
            <div className="conatiner">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only thing we are serious about is food.</p>
                    </div>
                    <p className="mid">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, odio! 
                        Temporibus numquam, velit libero fuga, aut quod sit architecto fugiat rem placeat
                         dolorem impedit laborum eveniet cumque at nobis officiis esse. Numquam eos a accusamus 
                         veniam asperiores, nemo eius exercitationem expedita porro ex ipsam mollitia nihil 
                         consequatur harum magni pariatur.
                    </p>
                    <Link to={"/"}>
                        Explore Menu{""}
                        <span>
                            <HiOutlineArrowNarrowRight/>
                        </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    )
}

export default About