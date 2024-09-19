import React from 'react';
import logo from '../assets/media/logos/logo-default.png';

function Header() {
    return (
        <div id="kt_header" className="header header-fixed">
            <div className="container d-flex align-items-stretch justify-content-between">
                <div className="d-none d-lg-flex align-items-center mr-3">
                    <a href="index.html">
                        <img alt="Logo" src={logo} className="logo-sticky max-h-35px" />
                    </a>
                    <div className="quick-search quick-search-inline ml-20 w-300px" id="kt_quick_search_inline">
                        <form method="get" className="quick-search-form">
                            <div className="input-group rounded bg-light">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <span className="svg-icon svg-icon-lg">
                                            <svg width="24" height="24" viewBox="0 0 24 24">
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24"></rect>
                                                    <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                                                    <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <input type="text" className="form-control h-45px" placeholder="Search..." />
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <i className="quick-search-close ki ki-close icon-sm text-muted"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <div id="kt_quick_search_toggle" data-toggle="dropdown" data-offset="0px,1px"></div>
                        <div className="dropdown-menu dropdown-menu-left dropdown-menu-lg dropdown-menu-anim-up">
                            <div className="quick-search-wrapper scroll ps" data-scroll="true" data-height="350" data-mobile-height="200" style={{ height: '350', overflow: 'hidden' }}><div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex="0" style={{ left: '0px', width: '0px' }}></div></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex="0" style={{ top: '0px', height: '0px' }}></div></div></div>
                        </div>
                    </div>
                </div>
                <div className="topbar">
                    <div className="dropdown d-flex d-lg-none">
                        <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                            <div className="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">
                                <span className="svg-icon svg-icon-xl">
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"></rect>
                                            <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                                            <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero"></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                            <div className="quick-search quick-search-dropdown" id="kt_quick_search_dropdown">
                                <form method="get" className="quick-search-form">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <span className="svg-icon svg-icon-lg">
                                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24"></rect>
                                                            <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                                                            <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero"></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="quick-search-close ki ki-close icon-sm text-muted"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                                <div className="quick-search-wrapper scroll ps" data-scroll="true" data-height="325" data-mobile-height="200" style={{ height: '325px', overflow: 'hidden' }}><div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex="0" style={{ left: '0px', width: '0px' }}></div></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex="0" style={{ top: '0px', height: '0px' }}></div></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="topbar-item mr-4" data-toggle="dropdown" data-offset="10px,0px">
                            <div className="btn font-weight-bolder btn-sm btn-light-success px-5">Create</div>
                        </div>
                        <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-md">
                            <ul className="navi navi-hover py-5">
                                <li className="navi-item">
                                    <a href="/" className="navi-link">
                                        <span className="navi-icon">
                                            <i className="flaticon2-drop"></i>
                                        </span>
                                        <span className="navi-text">New Group</span>
                                    </a>
                                </li>
                                <li className="navi-item">
                                    <a href="/" className="navi-link">
                                        <span className="navi-icon">
                                            <i className="flaticon2-list-3"></i>
                                        </span>
                                        <span className="navi-text">Contacts</span>
                                    </a>
                                </li>
                                <li className="navi-item">
                                    <a href="/" className="navi-link">
                                        <span className="navi-icon">
                                            <i className="flaticon2-rocket-1"></i>
                                        </span>
                                        <span className="navi-text">Groups</span>
                                        <span className="navi-link-badge">
                                            <span className="label label-light-primary label-inline font-weight-bold">new</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="navi-item">
                                    <a href="/" className="navi-link">
                                        <span className="navi-icon">
                                            <i className="flaticon2-bell-2"></i>
                                        </span>
                                        <span className="navi-text">Calls</span>
                                    </a>
                                </li>
                                <li className="navi-item">
                                    <a href="/" className="navi-link">
                                        <span className="navi-icon">
                                            <i className="flaticon2-gear"></i>
                                        </span>
                                        <span className="navi-text">Settings</span>
                                    </a>
                                </li>
                                <li className="navi-separator my-3"></li>
                                <li className="navi-item">
                                    <a href="/" className="navi-link">
                                        <span className="navi-icon">
                                            <i className="flaticon2-magnifier-tool"></i>
                                        </span>
                                        <span className="navi-text">Help</span>
                                    </a>
                                </li>
                                <li className="navi-item">
                                    <a href="/" className="navi-link">
                                        <span className="navi-icon">
                                            <i className="flaticon2-bell-2"></i>
                                        </span>
                                        <span className="navi-text">Privacy</span>
                                        <span className="navi-link-badge">
                                            <span className="label label-light-danger label-rounded font-weight-bold">5</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="topbar-item mr-4">
                        <div className="btn btn-icon btn-sm btn-clean btn-text-dark-75 btn-dropdown" id="kt_quick_panel_toggle">
                            <span className="svg-icon svg-icon-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"></rect>
                                        <rect fill="#000000" opacity="0.3" x="13" y="4" width="3" height="16" rx="1.5"></rect>
                                        <rect fill="#000000" x="8" y="9" width="3" height="11" rx="1.5"></rect>
                                        <rect fill="#000000" x="18" y="11" width="3" height="9" rx="1.5"></rect>
                                        <rect fill="#000000" x="3" y="13" width="3" height="7" rx="1.5"></rect>
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="topbar-item mr-4">
                        <div className="btn btn-icon btn-sm btn-clean btn-text-dark-75" id="kt_quick_actions_toggle">
                            <span className="svg-icon svg-icon-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"></rect>
                                        <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                                        <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3"></path>
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="topbar-item mr-4">
                        <div className="btn btn-icon btn-sm btn-clean btn-text-dark-75" id="kt_quick_user_toggle">
                            <span className="svg-icon svg-icon-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                        <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                                        <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fillRule="nonzero"></path>
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="topbar-item">
                        <div className="btn btn-icon btn-sm btn-primary font-weight-bolder p-0" id="kt_quick_notifications_toggle">3</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;