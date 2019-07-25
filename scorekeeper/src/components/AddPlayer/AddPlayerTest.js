import AddPlayer from './AddPlayer';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<AddPlayer />);
});

it('Add player name', () => {

    const onPlayerAdd = jest.fn();
    const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
    const nameInput = addPlayerComponent.find('input').first().getDOMNode();
    const form = addPlayerComponent.find('form');

    form.simulate('submit');

    nameInput.value = 'Ania';

    expect(onPlayerAdd).toBeCalledWith('Ania');
});