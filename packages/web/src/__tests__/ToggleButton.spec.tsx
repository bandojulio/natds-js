import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { assert, spy } from 'sinon';
import renderer from 'react-test-renderer';

import { ToggleButton } from '../Components/ToggleButton';

interface IMockedIconProps {
  className?: string;
}

const MockedIcon = (props: IMockedIconProps) => (
  <i {...props} />
);

describe('ToggleButton component', () => {
  describe('rendering sizes', () => {
    test('should match snapshot - Size Small', () => {
      const component = renderer.create(<ToggleButton size="small" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />).toJSON();
      expect(component).matchSnapshot('ToggleButton Size Small snapshot');
    });

    test('should match snapshot - Size Medium', () => {
      const component = renderer.create(<ToggleButton size="medium" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />).toJSON();
      expect(component).matchSnapshot('ToggleButton Size Medium snapshot');
    });
  });

  describe('rendering colors', () => {
    test('should match snapshot - Color Primary', () => {
      const component = renderer.create(<ToggleButton color="primary" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />).toJSON();
      expect(component).matchSnapshot('ToggleButton Color Primary snapshot');
    });

    test('should match snapshot - Color Secondary', () => {
      const component = renderer.create(<ToggleButton color="secondary" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />).toJSON();
      expect(component).matchSnapshot('ToggleButton Color Secondary snapshot');
    });

    test('should match snapshot - Color Default', () => {
      const component = renderer.create(<ToggleButton color="secondary" iconOn={<MockedIcon />} iconOff={<MockedIcon />} />).toJSON();
      expect(component).matchSnapshot('ToggleButton Color Default snapshot');
    });
  });

  describe('rendering attributes', () => {
    test('should match snapshot - Disabled', () => {
      const component = renderer.create(<ToggleButton color="primary" iconOn={<MockedIcon />} iconOff={<MockedIcon />} disabled />).toJSON();
      expect(component).matchSnapshot('ToggleButton Disabled snapshot');
    });
  });

  describe('interaction', () => {
    test('should call onClick callback', () => {
      const mockOnClick = spy();
      const component = shallow(<ToggleButton onClick={mockOnClick} iconOn={<MockedIcon />} iconOff={<MockedIcon />} />);

      component.simulate('click');

      assert.calledOnce(mockOnClick);
    });

    test('should start checked', () => {
      const component = shallow(<ToggleButton iconOn={<MockedIcon className="on" />} iconOff={<MockedIcon className="off" />} checked={true} />);

      expect(component.dive().find('.on')).to.have.length(1);
      expect(component.dive().find('.off')).to.have.length(0);
    });

    test('should toggle the state icon accordingly', () => {
      const component = shallow(<ToggleButton iconOn={<MockedIcon className="on" />} iconOff={<MockedIcon className="off" />} />);

      expect(component.dive().find('.on')).to.have.length(0);
      expect(component.dive().find('.off')).to.have.length(1);

      component.at(0).simulate('click');

      expect(component.dive().find('.on')).to.have.length(1);
      expect(component.dive().find('.off')).to.have.length(0);
    });
  });
});
