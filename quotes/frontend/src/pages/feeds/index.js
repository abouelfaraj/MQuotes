import React, { useRef, useState } from 'react';
import Editor from '../../component/editor';
import boy2 from '../../assets/media/svg/avatars/007-boy-2.svg';
import custom13 from '../../assets/media/svg/humans/custom-13.svg';
import Quill from 'quill';
import FeedsList from './listings';
import Header from '../../component/header';
import Footer from '../../component/footer';

const Delta = Quill.import('delta');

function Feed() {
  const [setRange] = useState();
  const [setLastChange] = useState();
  const [readOnly] = useState(false)
  // Use a ref to access the quill instance directly
  const quillRef = useRef();

  return (
    <>
      <Header />
      <main>
        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
          <div className="d-flex flex-column-fluid">
            <div className="container">
              <div className="row">
                <div className="col-xl-8">
                  <div className="card card-custom gutter-b">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-40 symbol-light-success mr-5">
                          <span className="symbol-label">
                            <img src={boy2}
                              className="h-75 align-self-end" alt="" />
                          </span>
                        </div>
                        <span className="text-muted font-weight-bold font-size-lg">What’s quote
                          on your mind?</span>
                      </div>
                      <Editor
                        ref={quillRef}
                        readOnly={readOnly}
                        defaultValue={new Delta()}
                        onSelectionChange={setRange}
                        onTextChange={setLastChange}
                      />
                    </div>
                  </div>
                  <div className="card card-custom bg-light gutter-b">
                    <div className="card-header border-0">
                      <h3 className="card-title font-weight-bold text-dark">Feeds</h3>
                      <div className="card-toolbar">
                        <div className="dropdown dropdown-inline" data-toggle="tooltip"
                          title="Quick actions" data-placement="left">
                          <a href="/"
                            className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                            data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i className="ki ki-bold-more-hor"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                            <ul className="navi navi-hover py-5">
                              <li className="navi-item">
                                <a href="/" className="navi-link">
                                  <span className="navi-icon">
                                    <i className="flaticon2-drop"></i>
                                  </span>
                                  <span className="navi-text">All Feeds</span>
                                </a>
                              </li>
                              <li className="navi-item">
                                <a href="/" className="navi-link">
                                  <span className="navi-icon">
                                    <i className="flaticon2-list-3"></i>
                                  </span>
                                  <span className="navi-text">Famous</span>
                                </a>
                              </li>
                              <li className="navi-item">
                                <a href="/" className="navi-link">
                                  <span className="navi-icon">
                                    <i className="flaticon2-rocket-1"></i>
                                  </span>
                                  <span className="navi-text">Personnel</span>
                                  <span className="navi-link-badge">
                                    <span
                                      className="label label-light-primary label-inline font-weight-bold">new</span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-2" id="feeds-list">
                      <FeedsList />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card card-custom gutter-b card-stretch card-shadowless f-trial">
                    <div className="card-body p-0 d-flex">
                      <div
                        className="d-flex align-items-start justify-content-start flex-grow-1 bg-light-warning p-8 card-rounded flex-grow-1 position-relative">
                        <div className="d-flex flex-column align-items-start flex-grow-1 h-100">
                          <div className="p-1 flex-grow-1">
                            <h4 className="text-warning font-weight-bolder">30 Days Free Trial
                            </h4>
                            <p className="text-dark-50 font-weight-bold mt-3">Pay 0$ for the
                              First Month</p>
                          </div>
                          <a href="/"
                            className="btn btn-link btn-link-warning font-weight-bold">Create
                            Report
                            <span className="svg-icon svg-icon-lg svg-icon-warning">
                              <svg width="24" height="24" viewBox="0 0 24 24">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                  <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                  <rect fill="#000000" opacity="0.3"
                                    transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                    x="11" y="5" width="2" height="14" rx="1">
                                  </rect>
                                  <path
                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                    fill="#000000" fillRule="nonzero"
                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)">
                                  </path>
                                </g>
                              </svg>
                            </span></a>
                        </div>
                        <div className="position-absolute right-0 bottom-0 mr-5 overflow-hidden">
                          <img src={custom13}
                            className="max-h-200px max-h-xl-275px mb-n20" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-8">
                  <div className="card card-custom gutter-b card-stretch card-shadowless">
                    <div className="card-body p-0">
                      <ul className="dashboard-tabs nav nav-pills nav-danger row row-paddingless m-0 p-0 flex-column flex-sm-row"
                        role="tablist">
                        <li
                          className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                          <a className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
                            data-toggle="pill" href="#tab_forms_widget_1">
                            <span className="nav-icon py-2 w-auto">
                              <span className="svg-icon svg-icon-3x">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect x="0" y="0" width="24" height="24" />
                                    <path
                                      d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                                      fill="#000000" />
                                    <rect fill="#000000" opacity="0.3"
                                      transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)"
                                      x="16.3255682" y="2.94551858" width="3"
                                      height="18" rx="1" />
                                  </g>
                                </svg>
                              </span>
                            </span>
                            <span
                              className="nav-text font-size-lg py-2 font-weight-bold text-center">SAAS
                              Application</span>
                          </a>
                        </li>
                        <li
                          className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                          <a className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
                            data-toggle="pill" href="#tab_forms_widget_2">
                            <span className="nav-icon py-2 w-auto">
                              <span className="svg-icon svg-icon-3x">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect x="0" y="0" width="24" height="24" />
                                    <rect fill="#000000" x="4" y="4" width="7"
                                      height="7" rx="1.5" />
                                    <path
                                      d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                      fill="#000000" opacity="0.3" />
                                  </g>
                                </svg>
                              </span>
                            </span>
                            <span
                              className="nav-text font-size-lg py-2 font-weight-bolder text-center">Main
                              Categories</span>
                          </a>
                        </li>
                        <li
                          className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                          <a className="nav-link active border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
                            data-toggle="pill" href="#tab_forms_widget_3">
                            <span className="nav-icon py-2 w-auto">
                              <span className="svg-icon svg-icon-3x">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect x="0" y="0" width="24" height="24" />
                                    <path
                                      d="M6,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,19 C20,20.1045695 19.1045695,21 18,21 L6,21 C4.8954305,21 4,20.1045695 4,19 L4,5 C4,3.8954305 4.8954305,3 6,3 Z M5.5,5 C5.22385763,5 5,5.22385763 5,5.5 L5,6.5 C5,6.77614237 5.22385763,7 5.5,7 L6.5,7 C6.77614237,7 7,6.77614237 7,6.5 L7,5.5 C7,5.22385763 6.77614237,5 6.5,5 L5.5,5 Z M17.5,5 C17.2238576,5 17,5.22385763 17,5.5 L17,6.5 C17,6.77614237 17.2238576,7 17.5,7 L18.5,7 C18.7761424,7 19,6.77614237 19,6.5 L19,5.5 C19,5.22385763 18.7761424,5 18.5,5 L17.5,5 Z M5.5,9 C5.22385763,9 5,9.22385763 5,9.5 L5,10.5 C5,10.7761424 5.22385763,11 5.5,11 L6.5,11 C6.77614237,11 7,10.7761424 7,10.5 L7,9.5 C7,9.22385763 6.77614237,9 6.5,9 L5.5,9 Z M17.5,9 C17.2238576,9 17,9.22385763 17,9.5 L17,10.5 C17,10.7761424 17.2238576,11 17.5,11 L18.5,11 C18.7761424,11 19,10.7761424 19,10.5 L19,9.5 C19,9.22385763 18.7761424,9 18.5,9 L17.5,9 Z M5.5,13 C5.22385763,13 5,13.2238576 5,13.5 L5,14.5 C5,14.7761424 5.22385763,15 5.5,15 L6.5,15 C6.77614237,15 7,14.7761424 7,14.5 L7,13.5 C7,13.2238576 6.77614237,13 6.5,13 L5.5,13 Z M17.5,13 C17.2238576,13 17,13.2238576 17,13.5 L17,14.5 C17,14.7761424 17.2238576,15 17.5,15 L18.5,15 C18.7761424,15 19,14.7761424 19,14.5 L19,13.5 C19,13.2238576 18.7761424,13 18.5,13 L17.5,13 Z M17.5,17 C17.2238576,17 17,17.2238576 17,17.5 L17,18.5 C17,18.7761424 17.2238576,19 17.5,19 L18.5,19 C18.7761424,19 19,18.7761424 19,18.5 L19,17.5 C19,17.2238576 18.7761424,17 18.5,17 L17.5,17 Z M5.5,17 C5.22385763,17 5,17.2238576 5,17.5 L5,18.5 C5,18.7761424 5.22385763,19 5.5,19 L6.5,19 C6.77614237,19 7,18.7761424 7,18.5 L7,17.5 C7,17.2238576 6.77614237,17 6.5,17 L5.5,17 Z"
                                      fill="#000000" opacity="0.3" />
                                    <path
                                      d="M11.3521577,14.5722612 L13.9568442,12.7918113 C14.1848159,12.6359797 14.2432972,12.3248456 14.0874656,12.0968739 C14.0526941,12.0460053 14.0088196,12.002002 13.9580532,11.9670814 L11.3533667,10.1754041 C11.1258528,10.0189048 10.8145486,10.0764735 10.6580493,10.3039875 C10.6007019,10.3873574 10.5699997,10.4861652 10.5699997,10.5873545 L10.5699997,14.1594818 C10.5699997,14.4356241 10.7938573,14.6594818 11.0699997,14.6594818 C11.1706891,14.6594818 11.2690327,14.6290818 11.3521577,14.5722612 Z"
                                      fill="#000000" />
                                  </g>
                                </svg>
                              </span>
                            </span>
                            <span
                              className="nav-text font-size-lg py-2 font-weight-bolder text-center">Video
                              Tutorials</span>
                          </a>
                        </li>
                        <li
                          className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                          <a className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
                            data-toggle="pill" href="#tab_forms_widget_4">
                            <span className="nav-icon py-2 w-auto">
                              <span className="svg-icon svg-icon-3x">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect x="0" y="0" width="24" height="24" />
                                    <rect fill="#000000" opacity="0.3" x="13" y="4"
                                      width="3" height="16" rx="1.5" />
                                    <rect fill="#000000" x="8" y="9" width="3"
                                      height="11" rx="1.5" />
                                    <rect fill="#000000" x="18" y="11" width="3"
                                      height="9" rx="1.5" />
                                    <rect fill="#000000" x="3" y="13" width="3"
                                      height="7" rx="1.5" />
                                  </g>
                                </svg>
                              </span>
                            </span>
                            <span
                              className="nav-text font-size-lg py-2 font-weight-bolder text-center">Sales
                              Statistics</span>
                          </a>
                        </li>
                        <li
                          className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                          <a className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
                            data-toggle="pill" href="#tab_forms_widget_5">
                            <span className="nav-icon py-2 w-auto">
                              <span className="svg-icon svg-icon-3x">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect x="0" y="0" width="24" height="24" />
                                    <path
                                      d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                                      fill="#000000" opacity="0.3" />
                                    <path
                                      d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z"
                                      fill="#000000" />
                                  </g>
                                </svg>
                              </span>
                            </span>
                            <span
                              className="nav-text font-size-lg py-2 font-weight-bolder text-center">System
                              Security</span>
                          </a>
                        </li>
                        <li
                          className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-0 mb-3 mb-lg-0">
                          <a className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
                            data-toggle="pill" href="#tab_forms_widget_5">
                            <span className="nav-icon py-2 w-auto">
                              <span className="svg-icon svg-icon-3x">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24" />
                                    <path
                                      d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                      fill="#000000" fillRule="nonzero"
                                      opacity="0.3" />
                                    <path
                                      d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                      fill="#000000" fillRule="nonzero" />
                                  </g>
                                </svg>
                              </span>
                            </span>
                            <span
                              className="nav-text font-size-lg py-2 font-weight-bolder text-center">Customer
                              Support</span>
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content m-0 p-0">
                        <div className="tab-pane active" id="forms_widget_tab_1" role="tabpanel">
                        </div>
                        <div className="tab-pane" id="forms_widget_tab_2" role="tabpanel"></div>
                        <div className="tab-pane" id="forms_widget_tab_3" role="tabpanel"></div>
                        <div className="tab-pane" id="forms_widget_tab_4" role="tabpanel"></div>
                        <div className="tab-pane" id="forms_widget_tab_6" role="tabpanel"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Feed;