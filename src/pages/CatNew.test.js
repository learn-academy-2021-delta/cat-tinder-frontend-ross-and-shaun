import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from './CatNew'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatNew renders", () => {
  it("displays a heading", () => {
    const catnew = shallow(<CatNew />)
    const showHeading = catnew.find("h3")
    expect(showHeading.text()).toEqual("Add a new ThunderCat")
  })
})