import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="container position-relative" id="content">
          <div class="row h-100 ">
            <aside class="col-md-3 bg-dark" id="left">
              <div class="mb-3 sticky-top" id="side">
                <ul
                  class="nav flex-md-column flex-row justify-content-between"
                  id="sidenav"
                >
                  <li class="nav-item">
                    <a href="#sec1" class="nav-link active pl-0 text-white">
                      One
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#sec2" class="nav-link pl-0 text-white">
                      Two
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#sec3" class="nav-link pl-0 text-white">
                      Three
                    </a>
                    <ul class="nav flex-md-column ml-2">
                      <li class="nav-item">
                        <a href="#sec3a" class="nav-link text-white">
                          Section A
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#sec3b" class="nav-link text-white">
                          Section B
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a href="#sec4" class="nav-link pl-0 text-white">
                      Four
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#sec5" class="nav-link pl-0 text-white">
                      Five
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#sec6" class="nav-link pl-0 text-white">
                      Six
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            <main class="col py-5">
              <div class="row position-relative">
                <div class="col">
                  <div class="tab-content py-3 position-relative">
                    <div
                      class="tab-pane active position-relative"
                      id="tab1"
                      role="tabpanel"
                    >
                      <h2 class="mb-3">Insert Text</h2>

                      <div class="anchor" id="sec1"></div>
                      <h5>One</h5>
                      <p>
                        Sriracha biodiesel taxidermy organic post-ironic,
                        Intelligentsia salvia mustache 90's code editing brunch.
                        Butcher polaroid VHS art party, hashtag Brooklyn deep v
                        PBR narwhal sustainable mixtape swag wolf squid tote
                        bag. Tote bag cronut semiotics, raw denim deep v
                        taxidermy messenger bag. Tofu YOLO Etsy, direct trade
                        ethical Odd Future jean shorts paleo. Forage Shoreditch
                        tousled aesthetic irony, street art organic Bushwick
                        artisan cliche semiotics ugh synth chillwave meditation.
                        Shabby chic lomo plaid vinyl chambray Vice. Vice
                        sustainable cardigan, Williamsburg master cleanse hella
                        DIY 90's blog.
                      </p>

                      <p>
                        Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher
                        street art Carles, stumptown gluten-free Kickstarter
                        artisan Wes Anderson wolf pug. Godard sustainable you
                        probably haven't heard of them, vegan farm-to-table
                        Williamsburg slow-carb readymade disrupt deep v.
                        Meggings seitan Wes Anderson semiotics, cliche American
                        Apparel whatever. Helvetica cray plaid, vegan brunch
                        Banksy leggings +1 direct trade. Wayfarers codeply PBR
                        selfies. Banh mi McSweeney's Shoreditch selfies, forage
                        fingerstache food truck occupy YOLO Pitchfork fixie
                        iPhone fanny pack art party Portland.
                      </p>

                      <p>
                        Sriracha biodiesel taxidermy organic post-ironic,
                        Intelligentsia salvia mustache 90's code editing brunch.
                        Butcher polaroid VHS art party, hashtag Brooklyn deep v
                        PBR narwhal sustainable mixtape swag wolf squid tote
                        bag. Tote bag cronut semiotics, raw denim deep v
                        taxidermy messenger bag. Tofu YOLO Etsy, direct trade
                        ethical Odd Future jean shorts paleo. Forage Shoreditch
                        tousled aesthetic irony, street art organic Bushwick
                        artisan cliche semiotics ugh synth chillwave meditation.
                        Shabby chic lomo plaid vinyl chambray Vice. Vice
                        sustainable cardigan, Williamsburg master cleanse hella
                        DIY 90's blog.
                      </p>

                      <div class="anchor" id="sec2"></div>
                      <h5>Two</h5>
                      <p>
                        Intelligentsia salvia mustache 90's code editing brunch.
                        Butcher polaroid VHS art party, hashtag Brooklyn deep v
                        PBR narwhal sustainable mixtape swag wolf squid tote
                        bag. Tote bag cronut semiotics, raw denim deep v
                        taxidermy messenger bag. Tofu YOLO Etsy, direct trade
                        ethical Odd Future jean shorts paleo. Forage Shoreditch
                        tousled aesthetic irony, street art organic Bushwick
                        artisan cliche semiotics ugh synth chillwave meditation.
                        Shabby chic lomo plaid vinyl chambray Vice. Vice
                        sustainable cardigan, Williamsburg master cleanse hella
                        DIY 90's blog.
                      </p>

                      <p>
                        Dreamcatcher street art Carles, stumptown gluten-free
                        Kickstarter artisan Wes Anderson wolf pug. Godard
                        sustainable you probably haven't heard of them, vegan
                        farm-to-table Williamsburg slow-carb readymade disrupt
                        deep v. Meggings seitan Wes Anderson semiotics, cliche
                        American Apparel whatever. Helvetica cray plaid, vegan
                        brunch Banksy leggings +1 direct trade. Wayfarers
                        codeply PBR selfies. Banh mi McSweeney's Shoreditch
                        selfies, forage fingerstache food truck occupy YOLO
                        Pitchfork fixie iPhone fanny pack art party Portland.
                      </p>

                      <hr />

                      <div class="anchor" id="sec3"></div>
                      <h5>Three</h5>
                      <p>
                        Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher
                        street art Carles, stumptown gluten-free Kickstarter
                        artisan Wes Anderson wolf pug. Godard sustainable you
                        probably haven't heard of them, vegan farm-to-table
                        Williamsburg slow-carb readymade disrupt deep v.
                        Meggings seitan Wes Anderson semiotics, cliche American
                        Apparel whatever. Helvetica cray plaid, vegan brunch
                        Banksy leggings +1 direct trade. Wayfarers codeply PBR
                        selfies. Banh mi McSweeney's Shoreditch selfies, forage
                        fingerstache food truck occupy YOLO Pitchfork fixie
                        iPhone fanny pack art party Portland.
                      </p>

                      <div class="pl-4">
                        <div class="anchor" id="sec3a"></div>
                        <h6>Three A</h6>
                        <p>
                          PBR narwhal sustainable mixtape swag wolf squid tote
                          bag plus and them then Helvetica cray plaid, vegan
                          brunch Banksy leggings +1 direct trade. Wayfarers
                          codeply PBR selfies. Banh mi McSweeney's Shoreditch
                          selfies, forage fingerstache food truck occupy YOLO
                          Pitchfork fixie MDO of twitter fame iPhone fanny pack
                          art party Portland. dd Future jean shorts paleo.
                          Forage Shoreditch tousled aesthetic irony, street art
                          organic Bushwick artisan cliche semiotics ugh synth
                          chillwave meditation. Shabby chic lomo plaid vinyl
                          chambray Vice. Vice sustainable cardigan!
                        </p>
                        <br />

                        <div class="anchor" id="sec3b"></div>
                        <h6>Three B</h6>
                        <p>
                          Helvetica cray plaid, vegan brunch Banksy leggings +1
                          direct trade. Wayfarers codeply PBR selfies. Banh mi
                          McSweeney's Shoreditch selfies, forage fingerstache
                          food truck occupy YOLO Pitchfork fixie iPhone fanny
                          pack art party Portland. PBR narwhal sustainable
                          mixtape swag wolf squid tote bag. Godard sustainable
                          you probably haven't heard of them, vegan
                          farm-to-table Williamsburg slow-carb readymade disrupt
                          deep v. Meggings seitan Wes Anderson semiotics, cliche
                          American Apparel whatever. Helvetica cray plaid, vegan
                          brunch Banksy leggings +1 direct trade. Wayfarers
                          codeply PBR selfies.{" "}
                        </p>
                      </div>

                      <hr />

                      <div class="anchor" id="sec4"></div>
                      <h5>4</h5>
                      <p>
                        Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher
                        street art Carles, stumptown gluten-free Kickstarter
                        artisan Wes Anderson wolf pug. Godard sustainable you
                        probably haven't heard of them, vegan farm-to-table
                        Williamsburg slow-carb readymade disrupt deep v.
                        Meggings seitan Wes Anderson semiotics, cliche American
                        Apparel whatever. Helvetica cray plaid, vegan brunch
                        Banksy leggings +1 direct trade. Wayfarers codeply PBR
                        selfies. Banh mi McSweeney's Shoreditch selfies, forage
                        fingerstache food truck occupy YOLO Pitchfork fixie
                        iPhone fanny pack art party Portland.
                      </p>

                      <div class="anchor" id="sec5"></div>
                      <h5>5</h5>
                      <p>
                        Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher
                        street art Carles, stumptown gluten-free Kickstarter
                        artisan Wes Anderson wolf pug. Godard sustainable you
                        probably haven't heard of them, vegan farm-to-table
                        Williamsburg slow-carb readymade disrupt deep v.
                        Meggings seitan Wes Anderson semiotics, cliche American
                        Apparel whatever. Helvetica cray plaid, vegan brunch
                        Banksy leggings +1 direct trade. Wayfarers codeply PBR
                        selfies. Banh mi McSweeney's Shoreditch selfies, forage
                        fingerstache food truck occupy YOLO Pitchfork fixie
                        iPhone fanny pack art party Portland.
                      </p>

                      <div class="anchor" id="sec6"></div>
                      <h5>6</h5>
                      <p>
                        Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher
                        street art Carles, stumptown gluten-free Kickstarter
                        artisan Wes Anderson wolf pug. Godard sustainable you
                        probably haven't heard of them, vegan farm-to-table
                        Williamsburg slow-carb readymade disrupt deep v.
                        Meggings seitan Wes Anderson semiotics, cliche American
                        Apparel whatever. Helvetica cray plaid, vegan brunch
                        Banksy leggings +1 direct trade. Wayfarers codeply PBR
                        selfies. Banh mi McSweeney's Shoreditch selfies, forage
                        fingerstache food truck occupy YOLO Pitchfork fixie
                        iPhone fanny pack art party Portland.
                      </p>
                    </div>
                    <div class="tab-pane" id="tab2" role="tabpanel">
                      <div class="card card-outline-primary mb-3">
                        <div class="card-block">
                          <h3 class="card-title">Primary</h3>
                          <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <a href="#" class="btn btn-outline-secondary">
                            Outline
                          </a>
                        </div>
                      </div>
                      <div class="card card-outline-primary mb-3">
                        <div class="card-block">
                          <h3 class="card-title">Primary</h3>
                          <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <a href="#" class="btn btn-outline-secondary">
                            Outline
                          </a>
                        </div>
                      </div>
                      <div class="card card-outline-primary mb-3">
                        <div class="card-block">
                          <h3 class="card-title">Primary</h3>
                          <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <a href="#" class="btn btn-outline-secondary">
                            Outline
                          </a>
                        </div>
                      </div>
                      <div class="card card-outline-primary mb-3">
                        <div class="card-block">
                          <h3 class="card-title">Primary</h3>
                          <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <a href="#" class="btn btn-outline-secondary">
                            Outline
                          </a>
                        </div>
                      </div>
                      <div class="card card-outline-primary mb-3">
                        <div class="card-block">
                          <h3 class="card-title">Primary</h3>
                          <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <a href="#" class="btn btn-outline-secondary">
                            Outline
                          </a>
                        </div>
                      </div>
                      <div class="card card-outline-primary mb-3">
                        <div class="card-block">
                          <h3 class="card-title">Primary</h3>
                          <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <a href="#" class="btn btn-outline-secondary">
                            Outline
                          </a>
                        </div>
                      </div>
                      <div class="card card-outline-primary mb-3">
                        <div class="card-block">
                          <h3 class="card-title">Primary</h3>
                          <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <a href="#" class="btn btn-outline-secondary">
                            Outline
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="tab3" role="tabpanel">
                      <h4>More content...</h4>
                      <p>
                        Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher
                        street art Carles, stumptown gluten-free Kickstarter
                        artisan Wes Anderson wolf pug. Godard sustainable you
                        probably haven't heard of them, vegan farm-to-table
                        Williamsburg slow-carb readymade disrupt deep v.
                        Meggings seitan Wes Anderson semiotics, cliche American
                        Apparel whatever. Helvetica cray plaid, vegan brunch
                        Banksy leggings +1 direct trade. Wayfarers codeply PBR
                        selfies. Banh mi McSweeney's Shoreditch selfies, forage
                        fingerstache food truck occupy YOLO Pitchfork fixie
                        iPhone fanny pack art party Portland.
                      </p>

                      <p>
                        Sriracha biodiesel taxidermy organic post-ironic,
                        Intelligentsia salvia mustache 90's code editing brunch.
                        Butcher polaroid VHS art party, hashtag Brooklyn deep v
                        PBR narwhal sustainable mixtape swag wolf squid tote
                        bag. Tote bag cronut semiotics, raw denim deep v
                        taxidermy messenger bag. Tofu YOLO Etsy, direct trade
                        ethical Odd Future jean shorts paleo. Forage Shoreditch
                        tousled aesthetic irony, street art organic Bushwick
                        artisan cliche semiotics ugh synth chillwave meditation.
                        Shabby chic lomo plaid vinyl chambray Vice. Vice
                        sustainable cardigan, Williamsburg master cleanse hella
                        DIY 90's blog.
                      </p>

                      <p>
                        Intelligentsia salvia mustache 90's code editing brunch.
                        Butcher polaroid VHS art party, hashtag Brooklyn deep v
                        PBR narwhal sustainable mixtape swag wolf squid tote
                        bag. Tote bag cronut semiotics, raw denim deep v
                        taxidermy messenger bag. Tofu YOLO Etsy, direct trade
                        ethical Odd Future jean shorts paleo. Forage Shoreditch
                        tousled aesthetic irony, street art organic Bushwick
                        artisan cliche semiotics ugh synth chillwave meditation.
                        Shabby chic lomo plaid vinyl chambray Vice. Vice
                        sustainable cardigan, Williamsburg master cleanse hella
                        DIY 90's blog.
                      </p>
                    </div>
                    <div class="row">
                      <div class="col-md-4 ml-auto text-right">
                        <small class="text-uppercase">
                          Connect on social media
                        </small>
                        <ul class="nav justify-content-end">
                          <li class="nav-item">
                            <a href="#" class="nav-link pr-0">
                              <i class="fa fa-pinterest fa-lg"></i>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="#" class="nav-link pr-0">
                              <i class="fa fa-twitter fa-lg"></i>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="#" class="nav-link pr-0">
                              <i class="fa fa-instagram fa-lg"></i>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="#" class="nav-link pr-0">
                              <i class="fa fa-facebook fa-lg"></i>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="#" class="nav-link pr-0">
                              <i class="fa fa-skype fa-lg"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 text-right small">
                        @2017 Company Name
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
