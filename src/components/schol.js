import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import ItemList from './itemList';

class Schol extends Component {

  render() { 

    const scholUpdate = `Total paid:	Rs. 6.47 Million
        Total scholarships:	105	
        Active scholarships:	27	
        Scholarship amount:	Rs. 4,000/month`;

    return (
      <Container className="nopadding">
        <Container className="tileContainer" >
          <Container className="tile draw-border"> 
            <Container className="tileHeader"> <i className="fas fa-paper-plane" style= {{color: 'lightgreen'}} /> Apply </Container>
            <Container className="tileBody"> We encourage students undergoing financial hardships due to their social and family
circumstances to apply for the UMAAV scholarship via the application below. All students entering or currently enrolled in an undergraduate degree course in the University of Moratuwa are eligible to apply.  
<br/><br/>
<a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf21ol96XEEZ4M98gBNP1xhYeaJOFRbUxcmdyywGIAcF6V_Bg/viewform"> Applications for NEW Scholarships are now open for 2022.<br/>Please apply here <i className="fas fa-edit" style= {{color: 'red'}} /></a> 
            </Container>
          </Container>
          <Container className="tile draw-border"> 
            <Container className="tileHeader">  <i className="fas fa-forward" style= {{color: 'orange'}} /> Extend </Container>
            <Container className="tileBody"> If you are an existing scholarship recipient, you need to extend your scholarship by filling the application below. The scholarship committee will review your current circumstances before granting the extension. 
            <br/><br/>
<a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfYAo-Lh-uqU6Bp-X7UHoh1e0a_R2EV7SpDo3hOERdz7su-Qg/viewform?gxids=7628"> Applications to extend existing Scholarships are now open for 2022.<br/>Please apply here <i className="fas fa-edit" style= {{color: 'red'}} /></a> 
             </Container>
          </Container>
          <Container className="tile draw-border"> 
            <Container className="tileHeader">  <i className="fas fa-heart" style= {{color: 'pink'}} /> Sponsor </Container>
            <Container className="tileBody"> You can make a difference by sponsoring a student with only 25 AUD/month. UMAAV will take care of all the administrative tasks, such as application processing, selections and fund transfers. 
            <br/><br/>
            <a target="_blank" href="https://forms.gle/PtrWEHaKeaz34DaQA"> Register your interest as a sponsor<i className="fas fa-edit" style= {{color: 'red'}} /></a> 
             </Container>
          </Container>
        </Container>

        <Container className="tileContainer" >
          <Container className="tileWide">
            <Container className="tileHeader"> A Scholarship - More than a mere financial assistance </Container>
            
            <Container className="tileBody">
            "I promise I will work hard to prove myself worthy of this opportunity you have given me. I am looking forward to the day I will be able to help other students as you have supported me.“ <br/> Given above is a snippet of one of the responses we received from a scholarship recipient this year. While there are many heart-warming responses, the above response suggests that along with much needed financial assistance, the practice of giving/dana has also been passed to the next generation of University of Moratuwa (UoM) graduates. How fitting with the UMAAV objectives, we think.
UMAAV scholarship program is still in its infancy but is steadily growing thanks to your generosity. We have just completed our very first round of scholarships and just announced the call for applications for the next round. Therefore this is an excellent time to share the highlights of the scholarship program.

            </Container>
            <ItemList name='' items={scholUpdate}/> 
          </Container>
        </Container>
        
        <Container className="tileContainer" >
            <Container className="tileWide">
              <Container className="tileHeader"> How are the scholarship recipients selected? </Container>
              <Container className="tileBody">
              The scholarship committee has framed a set of criteria to identify the most deserving cases among all the applications received. The criteria include not only the parameters to measure the financial difficulties faced by the applicant, but also his/her academic performance and engagement in extra-curricular activities. In addition, each applicant needs to be recommended by an academic staff member of UoM. The scholarship committee also cross-check the validity of information provided, through various reliable sources in Sri Lanka.Based on the outcome of the above process, well-deserved applicants are short listed. Finally the scholarship committee gather, discuss and select the most deserving cases from the aforementioned list and allocate scholarships. </Container>
            </Container>
        </Container>
        <Container className="tileContainer" >
            <Container className="tileWide">
              <Container className="tileHeader"> How is the scholarship program funded? </Container>
              <Container className="tileBody">
              There are a number of annual activities conducted by UMAAV to raise funds, including the most popular Dinner Dance (winter event) and the Cricket Carnival (summer event). The profit earned from these events is debited to the scholarship fund. Apart from the scholarship fund, a number of individual sponsorships provided by the UMAAV members are also used to provide the scholarships.
              Also check our <a href="/partner-program"> partner program </a>.
              </Container>
            </Container>
        </Container>
      </Container>
    );
  }
}

export default Schol;
