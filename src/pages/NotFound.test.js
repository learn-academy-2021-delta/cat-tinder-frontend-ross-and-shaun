import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe('When NotFound loads...',()=>{
    it('displays three NavLinks', ()=>{
        const notFound = shallow(<NotFound/>)
        const indexHeading = notFound.find("h3")
        expect(indexHeading.text()).toEqual("Ooops, no cats here!")
    })
})