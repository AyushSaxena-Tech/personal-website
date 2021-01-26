import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/material-kit.css';
import profilePicture from './assets/pp.jpg';

class App extends Component {
  render() {
    return (
      <div className="profile-page sidebar-collapse">
        <div className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg">
        <div className="container">
      <div className="navbar-translate">
        <a className="navbar-brand" href="https://www.creative-tim.com/product/material-kit/?partner=101249" target="_blank">
          Material Kit </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="dropdown nav-item">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="material-icons">apps</i> Components
            </a>
            <div className="dropdown-menu dropdown-with-icons">
              <a href="../index.html" className="dropdown-item">
                <i className="material-icons">layers</i> All Components
              </a>
              <a href="https://demos.creative-tim.com/material-kit/docs/2.0/getting-started/introduction.html" className="dropdown-item">
                <i className="material-icons">content_paste</i> Documentation
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="material-icons">cloud_download</i> Download
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank" data-original-title="Follow us on Twitter">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank" data-original-title="Like us on Facebook">
              <i className="fa fa-facebook-square"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank" data-original-title="Follow us on Instagram">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      </div>
        </div>
        
        <div className="page-header header-filter" data-parallax="true" style={{backgroundImage:"url('https://demos.creative-tim.com/bs3/material-kit/assets/img/examples/city.jpg')"}}></div>
  <div className="main main-raised">
    <div className="profile-content">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="profile">
              <div className="avatar">
                <img src={profilePicture} alt="Circle Image" className="img-raised rounded-circle img-fluid"></img>
              </div>
              <div className="name">
                <h3 className="title">Ayush Saxena</h3>
                <h6>Developer and Tech Enthusiast</h6>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble"><i className="fa fa-dribbble"></i></a>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter"><i className="fa fa-twitter"></i></a>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-pinterest"><i className="fa fa-pinterest"></i></a>
              </div>
              </div>
              <div className="follow">
            <button className="btn btn-fab btn-primary btn-round" rel="tooltip" title="" data-original-title="Follow this user">
              <i className="material-icons">add</i></button>
          </div>
              </div>
              </div>
              <div class="description text-center">
          <p>Lore ipsum </p>
        </div>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <div class="profile-tabs">
              <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" href="#work" role="tab" data-toggle="tab">
                    <i class="material-icons">palette</i> Work
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#studio" role="tab" data-toggle="tab">
                    <i class="material-icons">camera</i> Apps
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#favorite" role="tab" data-toggle="tab">
                    <i class="material-icons">favorite</i> Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tab-content tab-space">
          <div class="tab-pane work active show" id="work">
            <div class="row">
              <div class="col-md-7 ml-auto mr-auto ">
                <h4 class="title">Latest Articles</h4>
                <div class="row collections">
                  <div class="col-md-6">
                    <div class="card card-background" style={{backgroundImage: "url('http://www.ansa.it/webimages/img_457x/2018/1/9/2b87dfb4328e8a6f1dc643aa69af5fc9.jpg')"}}>
                      <a href="#pablo"></a>
                      <div class="card-body">
                        <label class="badge badge-warning">App</label>
                        <a href="#pablo">
                          <h2 class="card-title">App</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card card-background" style={{backgroundImage: "url('https://i1.wp.com/blog.kakcho.com/wp-content/uploads/2017/12/xeanz6-l-610x610-jacket-tumblr-armygreenjacket-black-turtleneck-blackturtleneck-bag-blackbag-handbag-denim-jeans-bluejeans-pumps-.jpg')"}}>
                      <a href="#pablo"></a>
                      <div class="card-body">
                        <label class="badge badge-info">Blog</label>
                        <a href="#pablo">
                          <h2 class="card-title">Blog</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card card-background" style={{backgroundImage: "url('https://s3-eu-west-2.amazonaws.com/cadandthedandy/wp-content/uploads/2018/05/30130124/bespoke-business-suits-savile-row-3.jpg')"}}>
                      <a href="#pablo"></a>
                      <div class="card-body">
                        <label class="badge badge-danger">Articles</label>
                        <a href="#pablo">
                          <h2 class="card-title">Articles</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card card-background" style={{backgroundImage: "url('http://www.backdownsouth.com/wp-content/uploads/2016/11/sockfancy004.jpg')"}}>
                      <a href="#pablo"></a>
                      <div class="card-body">
                        <label class="badge badge-success">Work</label>
                        <a href="#pablo">
                          <h2 class="card-title">Work</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-2 mr-auto ml-auto stats">
                <h4 class="title">Stats</h4>
                <ul class="list-unstyled">
                  <li><b>60</b> Apps Deployed</li>
                  <li><b>4</b> Articles</li>
                  <li><b>331</b> Apps under Development</li>
                  <li><b>1.2K</b> Code count</li>
                </ul>
                <h4 class="title">About Me</h4>
                <p class="description">Test</p>
                <h4 class="title">Focus</h4>
                <span class="badge badge-primary">ERP</span>
                <span class="badge badge-rose">React</span>
              </div>

            </div>
          </div>
          <div class="tab-pane connections" id="studio">
            <div class="row">
              <div class="col-md-5 ml-auto mr-auto">
                <div class="card card-profile card-plain">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="card-header card-header-image">
                        <a href="#pablo">
                          <img class="img" src="http://www.ishootshows.com/wp-content/uploads/2008/07/todd-owyoung-portrait-145238_COB8628-square-600px.jpg"></img>
                        </a>
                        <div class="colored-shadow" style={{backgroundImage: "url('http://www.ishootshows.com/wp-content/uploads/2008/07/todd-owyoung-portrait-145238_COB8628-square-600px.jpg'); opacity: 1;"}}></div></div>
                    </div>
                    <div class="col-md-7">
                      <div class="card-body">
                        <h4 class="card-title">Anthon Jard</h4>
                        <h6 class="card-category text-muted">Model</h6>

                        <p class="card-description">
                          Don't be scared of the truth because we need to restart the human foundation in truth...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-5 mr-auto ml-auto">
                <div class="card card-profile card-plain">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="card-header card-header-image">
                        <a href="#pablo">
                          <img class="img" src="http://new.kevinrees.com/wp-content/uploads/2016/12/Kevin-Portrait-Square.jpg"></img>
                        </a>
                        <div class="colored-shadow" style={{backgroundImage: "url('http://new.kevinrees.com/wp-content/uploads/2016/12/Kevin-Portrait-Square.jpg'); opacity: 1;"}}></div></div>
                    </div>
                    <div class="col-md-7">
                      <div class="card-body">
                        <h4 class="card-title">Marc Jacobs</h4>
                        <h6 class="card-category text-muted">Designer</h6>

                        <p class="card-description">
                          Don't be scared of the truth because we need to restart the human foundation in truth...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 ml-auto mr-auto">
                <div class="card card-profile card-plain">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="card-header card-header-image">
                        <a href="#pablo">
                          <img class="img" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU3Nzk2NTA0Njc1ODIwNTQ5/rebbeca-marie-gomez-aka-becky-g-poses-for-a-portrait-at-the-2017-latin-american-music-awards-at-dolby-theatre-on-october-25-2017-in-hollywood-california-photo-by-gabriel-olsen_getty-images-square.jpg"></img>
                        </a>
                        <div class="colored-shadow" style={{backgroundImage: "url('https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU3Nzk2NTA0Njc1ODIwNTQ5/rebbeca-marie-gomez-aka-becky-g-poses-for-a-portrait-at-the-2017-latin-american-music-awards-at-dolby-theatre-on-october-25-2017-in-hollywood-california-photo-by-gabriel-olsen_getty-images-square.jpg'); opacity: 1;"}}></div></div>
                    </div>
                    <div class="col-md-7">
                      <div class="card-body">
                        <h4 class="card-title">Kendall Jenner</h4>
                        <h6 class="card-category text-muted">Model</h6>

                        <p class="card-description">
                          I love you like Kanye loves Kanye. Don't be scared of the truth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-5 ml-auto mr-auto">
                <div class="card card-profile card-plain">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="card-header card-header-image">
                        <a href="#pablo">
                          <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Jm45nkeAjmUPtmaxAKvFEMepzVTBQvDm2Y5MgcIOVcHY4iIR"></img>
                        </a>
                        <div class="colored-shadow" style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Jm45nkeAjmUPtmaxAKvFEMepzVTBQvDm2Y5MgcIOVcHY4iIR'); opacity: 1;"}}></div></div>
                    </div>
                    <div class="col-md-7">
                      <div class="card-body">
                        <h4 class="card-title">George West</h4>
                        <h6 class="card-category text-muted">Model/DJ</h6>

                        <p class="card-description">
                          I love you like Kanye loves Kanye.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
              </div>
              </div>
              </div>
              </div>

    );
  }
}

export default App;
