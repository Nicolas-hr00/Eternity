import React from 'react';
import '../Employee.css';


function Employee(props) {
    return (
        <div className="Employee">
            <div className="spaces">

                <div className="grid1">
                    
                    <img className="img-1" alt="doctor_1" src={props.src} />

                    <div className="bio-box">
                        <h2><u> Bio</u></h2>
                            <p className="p3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna aliqua. Molestie a iaculis at erat pellentesque. 
                             Tempus egestas sed sed risus pretium quam vulputate dignissim. 
                             Platea dictumst vestibulum rhoncus est pellentesque elit. 
                            </p>
                            </div><br /><br /> {/* Bio - box */}

                            <div className="education">
                                <h2><u> Education</u></h2>
                                <p className="p4">
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                 Tempus imperdiet nulla malesuada pellentesque elit. 
                                 Velit egestas dui id ornare arcu odio.
                                </p>
                            </div>  {/* Education box */}

                        </div> {/* End of Grid 1 */}

                <div className="grid2"> 
                    <h2><u> {props.name} </u></h2><br />
                    <div className="about-box">
                    <h2><u> About Work </u></h2> <br />
                    <p className="p1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Nunc mi ipsum faucibus vitae aliquet nec. Gravida in fermentum et sollicitudin. 
                        Diam in arcu cursus euismod quis viverra nibh cras pulvinar. 
                        At urna condimentum mattis pellentesque id nibh tortor id. 
                        Lectus nulla at volutpat diam ut. Ornare arcu odio ut sem nulla. 
                        Sapien pellentesque habitant morbi tristique senectus. 
                        Odio aenean sed adipiscing diam donec adipiscing tristique. 
                        Netus et malesuada fames ac. Blandit turpis cursus in hac habitasse. 
                        Et leo duis ut diam quam nulla. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. 
                        Id aliquet lectus proin nibh nisl condimentum id venenatis a. Ut eu sem integer vitae justo. 
                        Eu lobortis elementum nibh tellus molestie nunc non blandit massa. </p>
                     </div> <br /> {/* End of about box */}

            <div className="work-box">
            <h2><u> Work Experience </u></h2> 
            <ul>
                <li> Job 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li> Job 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li> Job 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>         
                </ul>
                </div> {/* End of work-box */}

                </div> {/* End of grid 2 */}

                </div>    {/* End of spaces */}
        </div>          /* End of Employee */
    )
}

export default Employee