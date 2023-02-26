import { React } from 'react';
import { Link } from 'react-router-dom';

function ListTemplate() {
    const listTemplate = [
        {
            to: '../template1',
            name: 'Template 1'
        },
        {
            to: '../template2',
            name: 'Template 2'
        }
    ];
    return (
        <div>
            {listTemplate.map((temp, index) => (
                <div key={index}>
                    <Link to={temp.to}>{temp.name}</Link>
                </div>
            ))}
        </div>
    );
}

export default ListTemplate;
