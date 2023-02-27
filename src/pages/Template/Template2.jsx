import dayjs from 'dayjs';
import React from 'react';
import { useSelector } from 'react-redux';
import './template2.scss';

function Template2() {
    const dataCV = useSelector((state) => state.createCv.cvValue);
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
        <div className="cv">
            <div className="cv-page">
                <div className="cv-page-header">
                    <div className="cv-page-header-img-block">
                        <img src={dataCV.img} />
                    </div>
                    <div className="cv-page-header-title-block">
                        <div className="cv-page-header-title-block-name">{dataCV.fullName}</div>
                        <div className="cv-page-header-title-block-des">{dataCV.target}</div>
                    </div>
                </div>
                <div className="cv-page-body">
                    <div className="cv-page-body-col-left">
                        <div className="content-group">
                            <div className="content-group-title">Thông tin liên hệ</div>
                            <div className="content-group-info">
                                <img src="https://img.icons8.com/material-rounded/20/ff881d/calendar--v1.png" />
                                {dayjs(dataCV.dayOfBirth).format('DD/MM/YYYY')}
                            </div>
                            <div className="content-group-info">
                                <img src="https://img.icons8.com/material/20/ff881d/gender--v1.png" />
                                {getGender(dataCV.gender)}
                            </div>
                            <div className="content-group-info">
                                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/20/ff881d/external-telephone-advertisement-tanah-basah-glyph-tanah-basah.png" />
                                {dataCV.phone}
                            </div>
                            <div className="content-group-info">
                                <img src="https://img.icons8.com/material-rounded/24/ff881d/mail.png" />
                                {dataCV.email}
                            </div>
                            <div className="content-group-info">
                                <img src="https://img.icons8.com/fluency-systems-filled/20/ff881d/chain.png" />
                                {dataCV.website}
                            </div>
                            <div className="content-group-info">
                                <img src="https://img.icons8.com/material-rounded/24/ff881d/home-page.png" />
                                {dataCV.address}
                            </div>
                        </div>

                        <div className="content-group">
                            <div className="content-group-title">Các kỹ năng</div>
                            {dataCV.skills.map((skill, index) => (
                                <div className="content-group-skill" key={index}>
                                    <div className="content-group-skill-name">{skill.skillName}</div>
                                    <div className="content-group-skill-des">{skill.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="cv-page-body-col-right">
                        <div className="content-block">
                            <div className="content-block-name">Học vấn</div>
                            {dataCV.educations.map((edu, index) => (
                                <div className="content-block-info" key={index}>
                                    <img src="https://img.icons8.com/ios-glyphs/30/496c92/graduation-cap--v1.png" />
                                    <div className="content-block-info-group">
                                        <div className="content-block-info-group-title">
                                            {edu.education} | {dayjs(edu.scholastic[0]).format('DD/MM/YYYY')} -{' '}
                                            {dayjs(edu.scholastic[1]).format('DD/MM/YYYY')}
                                        </div>
                                        <div className="content-block-info-group-subtitle">{edu.school}</div>
                                        <div className="content-block-info-group-des">{edu.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="content-block">
                            <div className="content-block-name">Kinh Nghiệm Làm việc</div>
                            {dataCV.experience.map((exp, index) => (
                                <div className="content-block-info" key={index}>
                                    <img src="https://img.icons8.com/ios-glyphs/30/496c92/graduation-cap--v1.png" />
                                    <div className="content-block-info-group">
                                        <div className="content-block-info-group-title">
                                            {exp.position} | {dayjs(exp.workingTime[0]).format('DD/MM/YYYY')} -{' '}
                                            {dayjs(exp.workingTime[1]).format('DD/MM/YYYY')}
                                        </div>
                                        <div className="content-block-info-group-subtitle">{exp.company}</div>
                                        <div className="content-block-info-group-des">{exp.descriptWork}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {dataCV.activity[0].position !== '' && (
                            <div className="content-block">
                                <div className="content-block-name">Hoạt động</div>
                                {dataCV.activity.map((act, index) => (
                                    <div className="content-block-info" key={index}>
                                        <img src="https://img.icons8.com/ios-glyphs/30/496c92/graduation-cap--v1.png" />
                                        <div className="content-block-info-group">
                                            <div className="content-block-info-group-title">{act.position}</div>
                                            <div className="content-block-info-group-subtitle">{act.organization}</div>
                                            <div className="content-block-info-group-des">{act.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template2;
