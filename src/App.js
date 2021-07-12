import React, {useState, useEffect} from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project';



function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);
  
  const fetchData = async() => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setIsLoading(false);
    }catch(error){
      setIsLoading(false);
      console.log("There is an error")
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if(isLoading){
    return <h2>Loading...</h2>
  }
  
  console.log(jobs);
  const {title, company, dates, duties} = jobs[value];
  return <React.Fragment><main>
          <header>
            <h2>Experience</h2>
            <div className="underline"></div>
          </header>
          <section className="section-center">
            {/* <div className="btn-container">
              <button className="btn">tommy</button>
              <button className="btn">bigDrop</button>
              <button className="btn">cuker</button>
            </div> */}

            <div className="btn-container">
              {
                jobs.map((job, index) => {
                  return <button key={job.id} className={`btn ${(index===value) && 'active-btn'}`} onClick={() => setValue(index)}>{job.company}</button>
                })
              }
            </div>

            <article className="single-section">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="date">{dates}</p>
              {
                duties.map((duty, index) => {
                  return <div key={index} className="job-info">
                    <FaAngleDoubleRight className="icon"></FaAngleDoubleRight>
                    <p>{duty}</p>
                  </div>
              })
              }
            </article>
          </section>
          <button className="more-info">more info</button>
        </main>
        <div className="domain">
            <p>copyright... <a href="http://linkedin.com/in/mahip-p-0b4aab1b4">@ mahip_patni23</a></p>
        </div>
        </React.Fragment>

}

export default App;
