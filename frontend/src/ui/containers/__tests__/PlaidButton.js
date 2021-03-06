import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PlaidButton from '../PlaidButton'

configure({ adapter: new Adapter() })

describe('PlaidButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(<PlaidButton />)
    expect(wrapper.find('.plaid-link-wrapper')).toHaveLength(1)
    expect(wrapper.find('PlaidLink')).toHaveLength(1)
  })
  it('renders a Redirect (to bank accouts list) upon state.plaidToken set', done => {
    const wrapper = shallow(<PlaidButton />)
    expect(wrapper.find('.plaid-link-wrapper')).toHaveLength(1)
    expect(wrapper.find('PlaidLink')).toHaveLength(1)
    wrapper.setState({
      plaidToken: 'something'
    })
    wrapper.update()
    expect(wrapper.find('Redirect')).toHaveLength(1)
    done()
  })
})
