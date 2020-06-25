import React, { Component } from 'react';
import {Tabs, Image, Container} from 'react-bootstrap';

const faqs = [
  {
    q: '',
    a: ''
  },
];
class Schol extends Component {

  render() { 
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies mi quis. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Sit amet massa vitae tortor condimentum lacinia quis vel. Morbi enim nunc faucibus a. Tristique nulla aliquet enim tortor. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Purus in mollis nunc sed id semper risus in. In nibh mauris cursus mattis molestie a iaculis at. Neque vitae tempus quam pellentesque nec nam. Leo duis ut diam quam nulla. Nunc faucibus a pellentesque sit amet. Convallis a cras semper auctor neque vitae tempus quam. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Condimentum id venenatis a condimentum vitae sapien. Ullamcorper a lacus vestibulum sed arcu non. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris.

    Orci porta non pulvinar neque laoreet. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Eget duis at tellus at urna condimentum mattis pellentesque. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Sagittis eu volutpat odio facilisis mauris sit. Id diam maecenas ultricies mi eget mauris. At elementum eu facilisis sed odio. Pellentesque id nibh tortor id aliquet. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Eu ultrices vitae auctor eu augue ut. Fermentum leo vel orci porta non pulvinar neque laoreet. In aliquam sem fringilla ut morbi. Nisi quis eleifend quam adipiscing vitae. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Quis vel eros donec ac odio tempor. Velit dignissim sodales ut eu sem integer vitae.`;

    return (
      <Container className="nopadding">
      <Container className="tileContainer" >
          <Container className="tile draw-border"> 
            <Container className="tileHeader"> <i class="fas fa-paper-plane"/> Apply </Container>
            <Container className="tileBody"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </Container>
          </Container>
          <Container className="tile draw-border"> 
            <Container className="tileHeader">  <i class="fas fa-forward" /> Extend </Container>
            <Container className="tileBody"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </Container>
          </Container>
          <Container className="tile draw-border"> 
            <Container className="tileHeader">  <i class="fas fa-heart"/> Become a donor </Container>
            <Container className="tileBody"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </Container>
          </Container>
        </Container>

        <Container className="tileContainer" >
          <Container className="tileWide">
            <Container className="tileHeader"> A Scholarship - More than a mere financial assistance </Container>
            <Container className="tileBody">
            "I promise I will work hard to prove myself worthy of this opportunity you have given me. I am looking forward to the day I will be able to help other students as you have supported me.“ Given above is a snippet of one of the responses we received from a scholarship recipient this year. While there are many heart-warming responses, the above response suggests that along with much needed financial assistance, the practice of giving/dana has also been passed to the next generation of University of Moratuwa (UoM) graduates. How fitting with the UMAAV objectives, we think.

UMAAV scholarship program is still in its infancy but is steadily growing thanks to your generosity. We have just completed our very first round of scholarships and just announced the call for applications for the next round. Therefore this is an excellent time to share the highlights of the scholarship program.
            </Container>
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
            <Container className="tileHeader"> How many scholarships have been provided so far? </Container>
            <Container className="tileBody">
            So far we have provided 15 scholarships for highly deserving applicants for the year 2013. These scholarships are provided until the recipients successfully complete the degree program subjected to maximum of four academic years.
            </Container>
          </Container>
      </Container>
      <Container className="tileContainer" >
          <Container className="tileWide">
            <Container className="tileHeader"> How is the scholarship program funded? </Container>
            <Container className="tileBody">
            There are a number of annual activities conducted by UMAAV to raise funds, including the most popular Dinner Dance (winter event) and the Cricket Carnival (summer event). The profit earned from these events is debited to the scholarship fund. Apart from the scholarship fund, a number of individual sponsorships provided by the UMAAV members are also used to provide the scholarships.
            </Container>
          </Container>
      </Container>
      </Container>
    );
  }
}

export default Schol;
