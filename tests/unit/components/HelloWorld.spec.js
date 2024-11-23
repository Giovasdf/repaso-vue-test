/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renderiza el mensaje pasado mediante props', () => {
    const msg = '¡Manos a la obra!'
    const wrapper = mount(HelloWorld, {
      props: { msg },
    })

    expect(wrapper.find('h1').text()).toBe(msg)
  })
})
