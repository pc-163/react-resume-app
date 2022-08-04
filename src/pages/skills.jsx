import React from 'react'

const Skills = () => {

      return (
            <>
                  <section id="skills" class="skills section-bg">
                        <div class="container">

                              <div class="section-title">
                                    <h2 className='text-uppercase'>Skills</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </div>

                              <div class="row skills-content">

                                    <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up">

                                          <div class="progress">
                                          <span class="skill">HTML/CSS <i class="val">90%</i></span>
                                                <div class="progress-bar p1" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <div class="progress">
                                          <span class="skill">JS <i class="val">90%</i></span>
                                                <div class="progress-bar p2" role="progressbar" aria-label="Basic example"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <div class="progress">
                                          <span class="skill">REACT <i class="val">90%</i></span>
                                                <div class="progress-bar p3" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>

                                    </div>
                                    <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up">

                                    <div class="progress">
                                    <span class="skill">GIT <i class="val">90%</i></span>
                                          <div class="progress-bar p1" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress">
                                    <span class="skill">CSS FRAMEWORKS <i class="val">90%</i></span>
                                          <div class="progress-bar p2" role="progressbar" aria-label="Basic example"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="progress">
                                    <span class="skill">ADOBE <i class="val">90%</i></span>
                                          <div class="progress-bar p3" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                              </div>

                              </div>

                        </div>
                  </section>
            </>
      )
}

export default Skills