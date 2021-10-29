import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe('When Home loads...',()=>{
    it('displays three NavLinks', ()=>{
        const home = shallow(<Home />)
        const indexHeading = home.find("h3")
        expect(indexHeading.text()).toEqual("I am the Home")
    })
})