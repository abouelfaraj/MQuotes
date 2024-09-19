    import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import SkeletonLoader from '../../component/SkeletonLoader'; 
    import girl_19 from '../../assets/media/svg/avatars/018-girl-9.svg'
    import boy_04 from '../../assets/media/svg/avatars/009-boy-4.svg'
    import girl_1 from '../../assets/media/svg/avatars/003-girl-1.svg'

    const FeedsList = () => {
        const [feeds, setFeeds] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            // Fetch data from the API
            const fetchFeeds = async () => {
                try {
                    const response = await axios.get('/api/feeds', {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust if using different auth method
                        }
                    });
                    setFeeds(response.data);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            };

            fetchFeeds();
        }, []);

        if (loading) return <SkeletonLoader />;
        if (error) return <p>Error: {error.message}</p>;

        return (
            <>
                {feeds.length ? (
                    feeds.map(feed => (
                        <div className="card card-custom gutter-b" key={feed.id}>
                            <div className="card-body">
                                <div>
                                    <div className="d-flex align-items-center pb-4">
                                        <div className="symbol symbol-40 symbol-light-success mr-5">
                                            <span className="symbol-label">
                                                <img src={girl_19} className="h-75 align-self-end" alt="User Avatar" />
                                            </span>
                                        </div>
                                        <div className="d-flex flex-column flex-grow-1">
                                            <a href="/" className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">Grace Logan</a>
                                            <span className="text-muted font-weight-bold">{feed.created_at}</span>
                                        </div>
                                        <div className="dropdown dropdown-inline ml-2" data-toggle="tooltip" title="Quick actions" data-placement="left">
                                            <a href="/" className="btn btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ki ki-bold-more-hor"></i>
                                            </a>
                                            <div className="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right">
                                                <ul className="navi navi-hover">
                                                    <li className="navi-header font-weight-bold py-4">
                                                        <span className="font-size-lg">Choose Label:</span>
                                                        <i className="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
                                                    </li>
                                                    <li className="navi-separator mb-3 opacity-70"></li>
                                                    <li className="navi-item">
                                                        <a href="/" className="navi-link">
                                                            <span className="navi-text">
                                                                <span className="label label-xl label-inline label-light-success">Customer</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="navi-item">
                                                        <a href="/" className="navi-link">
                                                            <span className="navi-text">
                                                                <span className="label label-xl label-inline label-light-danger">Partner</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="navi-item">
                                                        <a href="/" className="navi-link">
                                                            <span className="navi-text">
                                                                <span className="label label-xl label-inline label-light-warning">Supplier</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="navi-item">
                                                        <a href="/" className="navi-link">
                                                            <span className="navi-text">
                                                                <span className="label label-xl label-inline label-light-primary">Member</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="navi-item">
                                                        <a href="/" className="navi-link">
                                                            <span className="navi-text">
                                                                <span className="label label-xl label-inline label-light-dark">Staff</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="navi-separator mt-3 opacity-70"></li>
                                                    <li className="navi-footer py-4">
                                                        <a className="btn btn-clean font-weight-bold btn-sm" href="/">
                                                            <i className="ki ki-plus icon-sm"></i>
                                                            Add new
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-dark-75 font-size-lg font-weight-normal">
                                            {feed.content}
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <a href="/" className="btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2">
                                                <span className="svg-icon svg-icon-md svg-icon-primary pr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <title>Group-chat</title>
                                                        <path d="M16,15.632 L16,12 C16,10.343 14.657,9 13,9 L6.162,9 L6.162,5.526 C6.162,4.131 7.293,3 8.688,3 L20.478,3 C21.873,3 23.004,4.131 23.004,5.526 L23.004,13.105 L23.021,17.787 C23.022,18.063 22.799,18.288 22.523,18.289 C22.389,18.289 22.261,18.236 22.167,18.142 L19.657,15.632 L16,15.632 Z" fill="#000"></path>
                                                        <path d="M1.985,18 L1.985,13 C1.985,11.895 2.88,11 3.985,11 L11.985,11 C13.09,11 13.985,11.895 13.985,13 L13.985,18 C13.985,19.105 13.09,20 11.985,20 L4.101,20 L2.857,21.191 C2.657,21.381 2.341,21.375 2.15,21.175 C2.061,21.082 2.011,20.958 2.011,20.829 L2.011,18.324 C1.994,18.219 1.985,18.11 1.985,18 Z M6.5,14 C6.224,14 6,14.224 6,14.5 C6,14.776 6.224,15 6.5,15 L11.5,15 C11.776,15 12,14.776 12,14.5 C12,14.224 11.776,14 11.5,14 L6.5,14 Z M9.5,16 C9.224,16 9,16.224 9,16.5 C9,16.776 9.224,17 9.5,17 L11.5,17 C11.776,17 12,16.776 12,16.5 C12,16.224 11.776,16 11.5,16 L9.5,16 Z" fill="#000" opacity="0.3"></path>
                                                    </svg>
                                                </span> 24
                                            </a>
                                            <a href="/" className="btn btn-hover-text-danger btn-hover-icon-danger btn-sm btn-text-dark-50 bg-hover-light-danger rounded font-weight-bolder font-size-sm p-2">
                                                <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <title>Heart</title>
                                                        <path d="M16.5,4.5 C14.891,4.5 13.008,6.325 12,7.5 C10.992,6.325 9.109,4.5 7.5,4.5 C4.651,4.5 3,6.722 3,9.55 C3,12.683 6,16 12,19.5 C18,16 21,12.75 21,9.75 C21,6.922 19.349,4.5 16.5,4.5 Z" fill="#000" fillRule="nonzero"></path>
                                                    </svg>
                                                </span> 75
                                            </a>
                                        </div>
                                        <div className="d-flex py-5">
                                            <div className="symbol symbol-40 symbol-light-success mr-5 mt-1">
                                                <span className="symbol-label">
                                                    <img src={ boy_04 } className="h-75 align-self-end" alt="Commenter Avatar" />
                                                </span>
                                            </div>
                                            <div className="d-flex flex-column flex-row-fluid">
                                                <div className="d-flex align-items-center flex-wrap">
                                                    <a href="/" className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder pr-6">Mr. Anderson</a>
                                                    <span className="text-muted font-weight-normal flex-grow-1 font-size-sm">1 Day ago</span>
                                                    <span className="text-muted font-weight-normal font-size-sm">Reply</span>
                                                </div>
                                                <span className="text-dark-75 font-size-sm font-weight-normal pt-1">
                                                    Long before you sit down to put digital pen to paper you need to make sure you have to sit down and write.
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="symbol symbol-40 symbol-light-success mr-5 mt-1">
                                                <span className="symbol-label">
                                                    <img src={ girl_1 } className="h-75 align-self-end" alt="Commenter Avatar" />
                                                </span>
                                            </div>
                                            <div className="d-flex flex-column flex-row-fluid">
                                                <div className="d-flex align-items-center flex-wrap">
                                                    <a href="/" className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder pr-6">Mrs. Anderson</a>
                                                    <span className="text-muted font-weight-normal flex-grow-1 font-size-sm">2 Days ago</span>
                                                    <span className="text-muted font-weight-normal font-size-sm">Reply</span>
                                                </div>
                                                <span className="text-dark-75 font-size-sm font-weight-normal pt-1"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="separator separator-solid mt-5 mb-4"></div>
                                <form className="position-relative">
                                    <textarea id="kt_forms_widget_5_input" className="form-control border-0 p-0 pr-10 resize-none" rows="1" placeholder="Reply..." style={{ overflow: 'hidden', overflowWrap: 'break-word', height: '20px' }}></textarea>
                                    <div className="position-absolute top-0 right-0 mt-n1 mr-n2">
                                        <span className="btn btn-icon btn-sm btn-hover-icon-primary">
                                            <i className="flaticon2-clip-symbol icon-ms"></i>
                                        </span>
                                        <span className="btn btn-icon btn-sm btn-hover-icon-primary">
                                            <i className="flaticon2-pin icon-ms"></i>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>You have no feeds yet.</p>
                )}
            </>
        );
    };

    export default FeedsList;
