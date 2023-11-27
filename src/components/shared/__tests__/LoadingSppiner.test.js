import { describe, it, expect } from 'vitest'
import bootstrap from 'bootstrap'
import { mount } from '@vue/test-utils'
import LoadingSppiner from '../LoadingSppiner.vue'

describe('LoadingSppiner', () => {
  it('loading render', () => {
    const wrapper = mount(LoadingSppiner, { 
        global:{
            plugins:[bootstrap]
        }
     })
    expect(wrapper.exists()).toBeTruthy()
  })

})