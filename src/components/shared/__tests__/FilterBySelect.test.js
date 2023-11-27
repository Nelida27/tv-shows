import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FilterBySelect from '../FilterBySelect.vue'

describe('FilterBySelect', () => {
  it('show filter by select', () => {
    const wrapper = mount(FilterBySelect, { props: { options: ['Test']} })
    expect(wrapper.html()).toContain('Test')
  })

})