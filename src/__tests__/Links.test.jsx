import React from 'react';
import Links from '../components/links/Links';
import renderer from 'react-test-renderer';

it('Link list renders correctly given data', () => {
    const sampleLinks = [{'type': 'LinkedIn', 'link': 'https://linkedin.com'}];

    const component = renderer.create(
        sampleLinks.map((link, index) => {
            return(
                <Links key={index} type={link.type} link={link.link} />
            )
        })
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});