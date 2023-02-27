import dayjs from 'dayjs';
import React from 'react';
import { useSelector } from 'react-redux';
import './template1.scss';
function Template1() {
    const valueCV = useSelector((state) => state.createCv.cvValue);
    const getGender = (value) => {
        if (value === 0) {
            return 'Nữ';
        } else if (value === 1) {
            return 'Nam';
        } else {
            return 'Orther';
        }
    };
    return (
        <>
            <div>Template 1</div>
            <div className="cv">
                <div className="cv-page">
                    <div className="cv-page-header">
                        <div className="cv-page-header-name-and-title">
                            <img className="cv-page-header-name-and-title__img" src={valueCV.img} />
                            <div className="cv-page-header-name-and-title__fullname">
                                <p className="cv-page-header-name-and-title__fullname-name">{valueCV.fullName}</p>
                                <div className="cv-page-header-name-and-title__fullname-title">{valueCV.target}</div>
                            </div>
                        </div>
                        <div className="cv-page-header__profile">
                            <div>Gioi tinh : {getSex(valueCV.gender)}</div>
                            <div>Ngay sinh : {dayjs(valueCV.dayOfbirth).format('DD/MM/YYYY')} </div>
                            <div>Email : {valueCV.email}</div>
                            <div>Dien thoai : {valueCV.phone}</div>
                            <div>Dia chi : {valueCV.address}</div>
                            {valueCV.website !== '' && <div style={{ wordWrap: 'break-word' }}>Website : {valueCV.website}</div>}
                        </div>
                    </div>
                    <div className="cv-page-body">
                        <div className="cv-page-body-group">
                            <div className="cv-page-body-group-name">HỌC VẤN</div>
                            {valueCV.educations.map((item, index) => (
                                <div className="cv-page-body-group-content" key={index}>
                                    <div className="cv-page-body-group-content-title">{item.school}</div>
                                    <div className="cv-page-body-group-content-info">
                                        <div className="cv-page-body-group-content-info__first">
                                            <img src="https://img.icons8.com/ios-filled/15/ccc/business.png" />
                                            {item.education}
                                        </div>
                                        <div className="cv-page-body-group-content-info__last">
                                            <img src="https://img.icons8.com/material-outlined/15/ccc/calendar--v1.png" />
                                            {dayjs(item.scholastic[0]).format('DD/MM/YYYY')} - {dayjs(item.scholastic[1]).format('DD/MM/YYYY')}
                                        </div>
                                    </div>
                                    <div className="cv-page-body-group-content-descript">{item.description}</div>
                                </div>
                            ))}
                        </div>

                        <div className="cv-page-body-group">
                            <div className="cv-page-body-group-name">Kinh Nghiệm Làm Việc</div>
                            {valueCV.experience.map((item, index) => (
                                <div className="cv-page-body-group-content" key={index}>
                                    <div className="cv-page-body-group-content-title">{item.company}</div>
                                    <div className="cv-page-body-group-content-info">
                                        <div className="cv-page-body-group-content-info__first">
                                            <img src="https://img.icons8.com/ios-filled/15/ccc/business.png" color="#ccc" />
                                            {item.position}
                                        </div>
                                        <div className="cv-page-body-group-content-info__last">
                                            <img src="https://img.icons8.com/material-outlined/15/ccc/calendar--v1.png" />
                                            {dayjs(item.workingTime[0]).format('DD/MM/YYYY')} - {dayjs(item.workingTime[1]).format('DD/MM/YYYY')}
                                        </div>
                                    </div>
                                    <div className="cv-page-body-group-content-descript">{item.descriptWork}</div>
                                </div>
                            ))}
                        </div>

                        <div className="cv-page-body-group">
                            <div className="cv-page-body-group-name">Kỹ năng</div>
                            {valueCV.skills.map((item, index) => (
                                <div className="cv-page-body-group-content" key={index}>
                                    <div className="cv-page-body-group-content-title">{item.skillName}</div>
                                    <div className="cv-page-body-group-content-descript">{item.description}</div>
                                </div>
                            ))}
                        </div>

                        {valueCV.activity[0].position !== '' && (
                            <div className="cv-page-body-group">
                                <div className="cv-page-body-group-name">Hoạt động</div>
                                {valueCV.activity.map((item, index) => (
                                    <div className="cv-page-body-group-content" key={index}>
                                        <div className="cv-page-body-group-content-title">{item.organization}</div>
                                        <div className="cv-page-body-group-content-info">
                                            <div className="cv-page-body-group-content-info__first">
                                                <img src="https://img.icons8.com/ios-filled/15/ccc/business.png" />
                                                {item.position}
                                            </div>
                                            <div className="cv-page-body-group-content-info__last">
                                                <img src="https://img.icons8.com/material-outlined/15/ccc/calendar--v1.png" />
                                                {dayjs(item.participationTime[0]).format('DD/MM/YYYY')} -
                                                {dayjs(item.participationTime[1]).format('DD/MM/YYYY')}
                                            </div>
                                        </div>
                                        <div className="cv-page-body-group-content-descript">{item.description}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Template1;
